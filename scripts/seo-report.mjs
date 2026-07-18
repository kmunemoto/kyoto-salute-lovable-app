#!/usr/bin/env node
/**
 * 週次SEOレポート生成スクリプト（Google Search Console 連携）
 *
 * Search Console の検索アナリティクスAPIから
 *   - 直近28日 vs その前28日 のクリック数/表示回数/CTR/平均掲載順位
 *   - 上位クエリ / 上位ページ
 *   - 追跡キーワードの順位変動（直近7日 vs その前7日）＋下落アラート
 * を取得し、Markdownレポート（seo-report.md）を出力する。
 *
 * 必要な環境変数:
 *   GSC_SERVICE_ACCOUNT_JSON … GCPサービスアカウントの鍵JSON（文字列全体）
 *   GSC_PROPERTY             … 任意。Search Consoleのプロパティ。
 *                              既定: "https://kyoto-salute.com/"
 *                              ドメインプロパティの場合: "sc-domain:kyoto-salute.com"
 *
 * 依存パッケージなし（Node 18+ の標準 crypto / fetch のみ）。
 * 鍵が未設定の場合はエラーにせず、メッセージを出して正常終了する。
 */

import crypto from "node:crypto";
import { writeFileSync } from "node:fs";

const PROPERTY = process.env.GSC_PROPERTY || "https://kyoto-salute.com/";
const OUTPUT_FILE = "seo-report.md";

/** 順位を監視する主要キーワード（完全一致） */
const TRACKED_KEYWORDS = [
  "パーソナルジム 京都",
  "京都 パーソナルジム",
  "パーソナルジム 御所南",
  "御所南 パーソナルジム",
  "パーソナルジム 丸太町",
  "丸太町 パーソナルジム",
  "京都 パーソナルジム 安い",
  "パーソナルジム 京都 安い",
  "烏丸御池 パーソナルジム",
  "京都市役所前 パーソナルジム",
];

/** 順位がこれ以上悪化したらアラート表示 */
const ALERT_DROP_THRESHOLD = 3;

// ---------------------------------------------------------------- utilities

const fmt = (d) => d.toISOString().slice(0, 10);
const daysAgo = (n) => {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - n);
  return d;
};
const b64url = (buf) =>
  Buffer.from(buf).toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
const pct = (cur, prev) => {
  if (!prev) return "—";
  const p = ((cur - prev) / prev) * 100;
  return `${p >= 0 ? "+" : ""}${p.toFixed(1)}%`;
};

// ------------------------------------------------------------ Google OAuth

async function getAccessToken(sa) {
  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = b64url(
    JSON.stringify({
      iss: sa.client_email,
      scope: "https://www.googleapis.com/auth/webmasters.readonly",
      aud: "https://oauth2.googleapis.com/token",
      iat: now,
      exp: now + 3600,
    }),
  );
  const signer = crypto.createSign("RSA-SHA256");
  signer.update(`${header}.${claims}`);
  const signature = b64url(signer.sign(sa.private_key));
  const jwt = `${header}.${claims}.${signature}`;

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });
  if (!res.ok) throw new Error(`OAuth token error ${res.status}: ${await res.text()}`);
  return (await res.json()).access_token;
}

// -------------------------------------------------- Search Analytics query

async function queryGSC(token, body) {
  const url = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(PROPERTY)}/searchAnalytics/query`;
  const res = await fetch(url, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`GSC API error ${res.status}: ${await res.text()}`);
  return (await res.json()).rows || [];
}

/** 期間全体の合計値（dimensionなし＝1行のサマリー） */
async function fetchTotals(token, startDate, endDate) {
  const rows = await queryGSC(token, { startDate, endDate });
  const r = rows[0] || { clicks: 0, impressions: 0, ctr: 0, position: 0 };
  return { clicks: r.clicks, impressions: r.impressions, ctr: r.ctr, position: r.position };
}

async function fetchByDimension(token, startDate, endDate, dimension, rowLimit) {
  return queryGSC(token, { startDate, endDate, dimensions: [dimension], rowLimit });
}

/** 追跡キーワードの平均掲載順位（完全一致フィルタで正確に取得。表示なしなら null） */
async function fetchKeywordPosition(token, keyword, startDate, endDate) {
  const rows = await queryGSC(token, {
    startDate,
    endDate,
    dimensions: ["query"],
    dimensionFilterGroups: [
      { filters: [{ dimension: "query", operator: "equals", expression: keyword }] },
    ],
    rowLimit: 1,
  });
  return rows[0]?.position ?? null;
}

// ------------------------------------------------------------------- main

async function main() {
  const raw = process.env.GSC_SERVICE_ACCOUNT_JSON;
  if (!raw || !raw.trim()) {
    console.log(
      "GSC_SERVICE_ACCOUNT_JSON が未設定のためスキップします。\n" +
        "docs/SEO-SETUP.md の手順でサービスアカウントを登録すると、週次SEOレポートが有効になります。",
    );
    return;
  }
  const sa = JSON.parse(raw);
  const token = await getAccessToken(sa);

  // GSCのデータ集計はPT（米国太平洋時間）基準で2〜3日遅れて確定するため、
  // UTC実行とのズレも見込んで4日前を最終日とする
  const BUF = 4;
  const end28 = daysAgo(BUF);
  const start28 = daysAgo(BUF + 27);
  const prevEnd28 = daysAgo(BUF + 28);
  const prevStart28 = daysAgo(BUF + 55);
  const end7 = daysAgo(BUF);
  const start7 = daysAgo(BUF + 6);
  const prevEnd7 = daysAgo(BUF + 7);
  const prevStart7 = daysAgo(BUF + 13);

  const [cur, prev, topQueries, topPages, kwCurList, kwPrevList] = await Promise.all([
    fetchTotals(token, fmt(start28), fmt(end28)),
    fetchTotals(token, fmt(prevStart28), fmt(prevEnd28)),
    fetchByDimension(token, fmt(start28), fmt(end28), "query", 20),
    fetchByDimension(token, fmt(start28), fmt(end28), "page", 10),
    Promise.all(TRACKED_KEYWORDS.map((kw) => fetchKeywordPosition(token, kw, fmt(start7), fmt(end7)))),
    Promise.all(TRACKED_KEYWORDS.map((kw) => fetchKeywordPosition(token, kw, fmt(prevStart7), fmt(prevEnd7)))),
  ]);

  const kwRows = TRACKED_KEYWORDS.map((kw, i) => {
    const c = kwCurList[i];
    const p = kwPrevList[i];
    let delta = "—";
    let alert = false;
    if (c != null && p != null) {
      const diff = c - p; // 正の値＝順位悪化
      delta = `${diff >= 0 ? "+" : ""}${diff.toFixed(1)}`;
      if (diff >= ALERT_DROP_THRESHOLD) alert = true;
    } else if (c == null && p != null && p <= 20) {
      delta = "圏外に";
      alert = true;
    }
    return { kw, c, p, delta, alert };
  });
  const alerts = kwRows.filter((r) => r.alert);

  const jst = new Date(Date.now() + 9 * 3600 * 1000).toISOString().slice(0, 10);
  const lines = [];
  lines.push(`# 週次SEOレポート（${jst}）`);
  lines.push("");
  lines.push(`対象プロパティ: \`${PROPERTY}\` ／ 集計期間: ${fmt(start28)} 〜 ${fmt(end28)}（28日間）`);
  lines.push("");

  if (alerts.length > 0) {
    lines.push("## ⚠️ 順位下落アラート");
    lines.push("");
    for (const a of alerts) {
      lines.push(
        `- **${a.kw}**: ${a.p != null ? a.p.toFixed(1) : "—"}位 → ${a.c != null ? a.c.toFixed(1) + "位" : "圏外"}（前週比 ${a.delta}）`,
      );
    }
    lines.push("");
  }

  lines.push("## サマリー（直近28日 vs その前28日）");
  lines.push("");
  lines.push("| 指標 | 直近28日 | 前期間 | 変化 |");
  lines.push("|---|---|---|---|");
  lines.push(`| クリック数 | ${cur.clicks} | ${prev.clicks} | ${pct(cur.clicks, prev.clicks)} |`);
  lines.push(`| 表示回数 | ${cur.impressions} | ${prev.impressions} | ${pct(cur.impressions, prev.impressions)} |`);
  lines.push(`| CTR | ${(cur.ctr * 100).toFixed(2)}% | ${(prev.ctr * 100).toFixed(2)}% | ${pct(cur.ctr, prev.ctr)} |`);
  lines.push(`| 平均掲載順位 | ${cur.position.toFixed(1)} | ${prev.position.toFixed(1)} | ${(cur.position - prev.position >= 0 ? "+" : "") + (cur.position - prev.position).toFixed(1)} |`);
  lines.push("");

  lines.push("## 追跡キーワードの順位（直近7日、前週比）");
  lines.push("");
  lines.push("| キーワード | 今週 | 先週 | 変化 |");
  lines.push("|---|---|---|---|");
  for (const r of kwRows) {
    lines.push(
      `| ${r.kw} | ${r.c != null ? r.c.toFixed(1) : "圏外"} | ${r.p != null ? r.p.toFixed(1) : "圏外"} | ${r.delta} |`,
    );
  }
  lines.push("");
  lines.push("※「圏外」は期間内に表示（インプレッション）が記録されなかったことを示します。");
  lines.push("");

  lines.push("## 上位クエリ（直近28日）");
  lines.push("");
  lines.push("| クエリ | クリック | 表示 | CTR | 順位 |");
  lines.push("|---|---|---|---|---|");
  for (const r of topQueries) {
    lines.push(
      `| ${r.keys[0]} | ${r.clicks} | ${r.impressions} | ${(r.ctr * 100).toFixed(1)}% | ${r.position.toFixed(1)} |`,
    );
  }
  lines.push("");

  lines.push("## 上位ページ（直近28日）");
  lines.push("");
  lines.push("| ページ | クリック | 表示 | 順位 |");
  lines.push("|---|---|---|---|");
  for (const r of topPages) {
    const path = r.keys[0].replace("https://kyoto-salute.com", "") || "/";
    lines.push(`| ${path} | ${r.clicks} | ${r.impressions} | ${r.position.toFixed(1)} |`);
  }
  lines.push("");
  lines.push("---");
  lines.push("_このレポートは GitHub Actions（.github/workflows/seo-report.yml）で毎週月曜に自動生成されています。_");

  const report = lines.join("\n");
  writeFileSync(OUTPUT_FILE, report);
  console.log(report);
  console.log(`\n✅ ${OUTPUT_FILE} に書き出しました。`);
}

main().catch((err) => {
  console.error("SEOレポート生成に失敗しました:", err.message);
  process.exit(1);
});
