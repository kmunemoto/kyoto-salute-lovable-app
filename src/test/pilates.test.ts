import { afterEach, describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { translations } from "@/i18n/translations";

// マシンピラティス（PilatesSection・料金プラン・よくあるご質問）。
// ご入会後、月額プランの1回ごとにトレーニングかマシンピラティスを選べる（追加料金なし）。
// 単発プラン（旅行者向け）は対象外。
// マシンピラティスもトレーナーとの1対1で、トレーナーがバネの強さで負荷を調整する。呼吸に合わせてゆっくり動く。
// マシンピラティスの体験（2026年11月25日から・60分・¥3,000、体験当日の入会で¥0）は、専用の予約ページから。
// 曜日・時間は担当トレーナーのシフトで変わるので、サイトには書かず「空き状況は予約ページで」とする。

const LANGS = Object.keys(translations) as (keyof typeof translations)[];
const root = path.resolve(__dirname, "../..");
const read = (p: string) => fs.readFileSync(path.join(root, p), "utf-8");

const PILATES = /ピラティス|Pilates|普拉提|皮拉提斯|필라테스/;

// 料金カードの項目
const CARD: Record<keyof typeof translations, string> = {
  ja: "マシンピラティス（50分）も選べる",
  en: "Machine Pilates (50 min) also available",
  zh: "也可选择器械普拉提（50分钟）",
  zhTW: "也可選擇器械皮拉提斯（50分鐘）",
  ko: "머신 필라테스(50분)도 선택 가능",
};

// 「マシンピラティスの体験（60分）」の言い方（FAQ とピラティスの欄に入れる）
const PILATES_TRIAL: Record<keyof typeof translations, string> = {
  ja: "マシンピラティスの体験（60分）",
  en: "Machine Pilates trial sessions (60 minutes)",
  zh: "器械普拉提体验课程（60分钟）",
  zhTW: "器械皮拉提斯體驗課程（60分鐘）",
  ko: "머신 필라테스 체험(60분)",
};

// マシンピラティス体験の予約ページ（末尾まで変えない）
const PILATES_TRIAL_URL =
  "https://app.kyoto-salute.com/trial/ceda19b0-d5e0-4928-ab2e-996a0b823af4/menu/8980f07c-987b-42f1-8c37-158f10eacb9f";

// 体験の曜日・時刻・時間帯は書かない（担当トレーナーのシフトで変わるため）
const SCHEDULE = /\d{1,2}[:：]\d{2}|\d{1,2}時|[月火水木金土日]曜|夕方|夜|午後|evening|night|afternoon|(?:mon|tues|wednes|thurs|fri|satur|sun)days?\b|[周週][一二三四五六日]|星期|傍晚|晚上|下午|[월화수목금토일]요일|저녁|오후|밤|毎週/i;

// 「ご入会後」の言い方（ピラティスに触れる文には、この条件を付ける）
const AFTER_JOIN: Record<keyof typeof translations, string> = {
  ja: "ご入会後",
  en: "After joining",
  zh: "入会后",
  zhTW: "入會後",
  ko: "입회 후에는",
};

// 「1対1」の言い方（02 に入れる）
const ONE_ON_ONE: Record<keyof typeof translations, string> = {
  ja: "1対1",
  en: "1-on-1",
  zh: "一对一",
  zhTW: "一對一",
  ko: "1:1",
};

// 前の 01〜03 にあった言い方。根拠が弱い・半分しか正しくない（多くの種目でバネは支えではなく負荷）・
// 安全を約束するように読める、という理由でやめたので、戻さない。
const STALE_POINTS = [
  /姿勢改善に取り組みたい方にぴったり/,
  /バネが動きを支え/,
  /無理なく/,
  /springs support/i,
  /弹簧会辅助/,
  /彈簧會輔助/,
  /스프링이 움직임을 도와/,
];

// 効果を約束する言い方（改善・矯正など）は、ピラティスの紹介に使わない（「〜を目指します」と書く）
const CLAIMS = /改善|矯正|矫正|improv|개선|교정/i;

describe("マシンピラティス（pilates）", () => {
  // 描画したテストの後片付け（途中で失敗しても、次のテストに画面が残らないように）
  afterEach(async () => {
    (await import("@testing-library/react")).cleanup();
  });

  it.each(LANGS)("%s: 3 項目で、空の文言がない", (lang) => {
    const p = translations[lang].pilates;
    expect(p.points).toHaveLength(3);
    for (const s of [p.kicker, p.title, p.lead, p.imageAlt, translations[lang].nav.pilates, ...p.points.flatMap((i) => [i.title, i.description])]) {
      expect(s.trim()).not.toBe("");
    }
  });

  it("日本語の見出しとリード", () => {
    expect(translations.ja.pilates.title.replace("\n", "")).toBe("マシンピラティスも選べます");
    expect(translations.ja.pilates.lead.replace(/\n/g, "")).toBe("パーソナルトレーニングとパーソナルマシンピラティス、どちらも選べます。追加料金はかかりません。");
  });

  it("日本語の 01〜03 の見出し", () => {
    expect(translations.ja.pilates.points.map((i) => i.title)).toEqual(["呼吸と体幹を意識して", "1対1だから始めやすい", "トレーニングと使い分けて"]);
  });

  it.each(LANGS)("%s: 02 に「1対1」があり、前の言い方や効果を約束する言い方がない", (lang) => {
    const p = translations[lang].pilates;
    expect(`${p.points[1].title} ${p.points[1].description}`).toContain(ONE_ON_ONE[lang]);
    for (const s of [p.title, p.lead, ...p.points.flatMap((i) => [i.title, i.description])]) {
      for (const re of STALE_POINTS) expect(s, `${lang}: ${re}`).not.toMatch(re);
      expect(s, s).not.toMatch(CLAIMS);
    }
  });

  it.each(LANGS)("%s: 月額プランのカードすべてに「マシンピラティスも選べる」、単発プランには書かない", (lang) => {
    const { plans, dropIn } = translations[lang].pricing;
    for (const plan of plans) expect(plan.features, plan.name).toContain(CARD[lang]);
    expect([dropIn.name, dropIn.description, ...dropIn.features].join(" ")).not.toMatch(PILATES);
  });

  it.each(LANGS)("%s: よくあるご質問とピラティスの欄に、マシンピラティスの体験（60分・¥3,000）があり、曜日や時刻は書かない", (lang) => {
    const items = translations[lang].faq.items.filter((i) => PILATES.test(i.question));
    expect(items).toHaveLength(1);
    expect(items[0].answer).toContain(PILATES_TRIAL[lang]);
    expect(items[0].answer).toContain("3,000");
    const p = translations[lang].pilates;
    expect(p.trialNote).toContain("60");
    expect(p.trialNote).toContain("3,000");
    for (const s of [items[0].answer, p.trialNote, p.trialBtn, translations[lang].cta.pilatesLink]) {
      expect(s.trim()).not.toBe("");
      expect(s, s).not.toMatch(SCHEDULE);
    }
  });

  it("マシンピラティス体験の予約ボタンは、予約ページの URL を末尾まで変えずに使う", () => {
    expect(read("src/lib/booking.ts")).toContain(`"${PILATES_TRIAL_URL}"`);
    // 予約メニュー（/menu/…）を指す URL は、src・scripts・index.html のどこでも予約ページの URL と完全に一致する（?utm_… だけは付けてよい）
    const walk = (dir: string): string[] =>
      fs.readdirSync(path.join(root, dir), { withFileTypes: true }).flatMap((e) =>
        e.isDirectory() ? walk(`${dir}/${e.name}`) : /\.(tsx?|mjs|html)$/.test(e.name) ? [`${dir}/${e.name}`] : [],
      );
    for (const file of [...walk("src").filter((f) => !f.startsWith("src/test/")), ...walk("scripts"), "index.html"]) {
      for (const m of read(file).matchAll(/https?:\/\/app\.kyoto-salute\.com\/trial\/[^\s"'`<>)]*\/menu\b[^\s"'`<>)]*/g)) {
        expect(m[0].replace(/\?utm_[^#]*$/, ""), file).toBe(PILATES_TRIAL_URL);
      }
    }
  });

  it.each(LANGS)("%s: ホームのピラティス欄と体験の案内欄の、ピラティス体験の予約リンクは予約ページの URL そのもの", async (lang) => {
    const { createElement: h } = await import("react");
    const { render, screen } = await import("@testing-library/react");
    const { MemoryRouter } = await import("react-router-dom");
    const { LanguageProvider } = await import("@/i18n/LanguageContext");
    const { default: PilatesSection } = await import("@/components/PilatesSection");
    const { default: CTASection } = await import("@/components/CTASection");
    render(h(MemoryRouter, null, h(LanguageProvider, { lang, children: [h(PilatesSection, { key: "p" }), h(CTASection, { key: "c" })] })));
    const tr = translations[lang];
    for (const name of [tr.pilates.trialBtn, `${tr.cta.pilatesLink} →`]) {
      const a = screen.getByRole("link", { name });
      expect(a.getAttribute("href"), name).toBe(PILATES_TRIAL_URL);
      expect(a.getAttribute("target"), name).toBe("_blank");
      expect(a.getAttribute("rel"), name).toContain("noopener");
    }
  });

  it("ピラティス体験のページ：予約ボタン（上・下・ヘッダー・スマホの固定バー）は予約ページの URL そのもの", async () => {
    const { createElement: h } = await import("react");
    const { render, screen } = await import("@testing-library/react");
    const { MemoryRouter } = await import("react-router-dom");
    const { HelmetProvider } = await import("react-helmet-async");
    const { LanguageProvider } = await import("@/i18n/LanguageContext");
    const { default: PilatesTrial } = await import("@/pages/PilatesTrial");
    const scrollTo = window.scrollTo;
    window.scrollTo = () => {}; // jsdom には画面のスクロールがない
    try {
      render(h(HelmetProvider, null, h(MemoryRouter, null, h(LanguageProvider, { lang: "ja", children: h(PilatesTrial) }))));
      const links = [...screen.getAllByRole("link", { name: "空き状況を見て予約する" }), ...screen.getAllByRole("link", { name: "ピラティス体験を予約" })];
      expect(links.length).toBeGreaterThanOrEqual(4); // 上・下・ヘッダー（PC・タブレット）・固定バー
      for (const a of links) expect(a.getAttribute("href")).toBe(PILATES_TRIAL_URL);
      // このページでは、LINE は「予約」ではなく「問い合わせ」
      expect(screen.queryByRole("link", { name: "LINEから予約" })).toBeNull();
    } finally {
      window.scrollTo = scrollTo;
    }
  });

  it("マシンピラティス体験の案内ページ：ルート・サイトマップ・曜日や時刻を書かない", () => {
    expect(read("src/App.tsx")).toContain('path="/pilates-trial"');
    expect(read("scripts/generate-sitemap.mjs")).toContain("/pilates-trial");
    // コメント（// と {/* */}）は、画面に出ないので除いて調べる
    const page = read("src/pages/PilatesTrial.tsx").replace(/(^|\s)\/\/.*$/gm, "").replace(/\{\/\*[\s\S]*?\*\/\}/g, "");
    expect(page).toContain("前日まで");
    expect(page).toContain("確認メール");
    expect(page).toContain("60分");
    expect(page).not.toMatch(SCHEDULE);
    expect(read("index.html")).toContain('"url": "https://kyoto-salute.com/pilates-trial"');
  });

  it.each(LANGS)("%s: 目的別トレーニングでピラティスに触れる文にも「ご入会後」が付いている", (lang) => {
    const items = translations[lang].goals.items.filter((i) => PILATES.test(i.description));
    expect(items.length).toBeGreaterThan(0);
    for (const i of items) expect(i.description).toContain(AFTER_JOIN[lang]);
  });

  it("検索エンジン向け（index.html）：FAQPage が画面の FAQ と同じ文面、プラン説明にもピラティス", () => {
    const html = read("index.html");
    const ja = translations.ja.faq.items.find((i) => i.question === "マシンピラティスは選べますか？")!;
    const m = html.match(/"name": "マシンピラティスは選べますか？",\s*"acceptedAnswer": \{\s*"@type": "Answer",\s*"text": "([^"]*)"/);
    expect(m, "FAQPage にピラティスの質問がない").not.toBeNull();
    expect(m![1]).toBe(ja.answer);
    expect(html.match(/マシンピラティス（50分）も選べる、完全手ぶらOK/g)).toHaveLength(3);
  });

  it.each(LANGS)("%s: ピラティスの説明はストレッチに触れず、カードと FAQ に 50 分と書いてある", (lang) => {
    const tr = translations[lang];
    const p = tr.pilates;
    const faq = tr.faq.items.find((i) => PILATES.test(i.question))!;
    const texts = [p.title, p.lead, ...p.points.flatMap((i) => [i.title, i.description]), CARD[lang], faq.answer];
    for (const s of texts) expect(s, s).not.toMatch(/ストレッチ|stretch|拉伸|伸展|스트레칭/i);
    expect(CARD[lang]).toContain("50");
    expect(faq.answer).toContain("50");
  });

  it("利用規約・特商法：本サービスにマシンピラティスを含み、体験はトレーニングとマシンピラティスの両方", () => {
    const terms = read("src/pages/Terms.tsx");
    expect(terms).toContain("パーソナルトレーニングおよびマシンピラティスのサービス（以下「本サービス」）");
    expect(terms).toContain("本規約で「トレーニング」というときは、マシンピラティスを含むものとします");
    expect(terms).toContain("体験トレーニングでは、パーソナルトレーニングまたはマシンピラティスのいずれかを選択できます");
    expect(terms).not.toContain("体験トレーニングは、パーソナルトレーニングのみ");
    expect(read("src/pages/Tokusho.tsx")).toContain("体験トレーニング（パーソナルトレーニング・マシンピラティス）");
  });

  it("ブログ自動生成の前提に「マシンピラティスの体験もある」「1対1でバネの強さを調整」がある", () => {
    const gen = read("scripts/generate-blog-post.mjs");
    expect(gen).toContain("マシンピラティスの体験もある");
    expect(gen).not.toContain("体験トレーニングはパーソナルトレーニングのみ");
    expect(gen).toContain("トレーナーとの1対1で、トレーナーがバネの強さで負荷を調整");
    expect(gen).toContain("「バネが動きを支えてくれる」「無理なく」とは書かない");
  });

  it("「スタート」の表示は、日本時間の 11/25 0:00 で消える（端末のタイムゾーンによらない）", async () => {
    const { isBeforePilatesTrialStart } = await import("@/lib/booking");
    expect(isBeforePilatesTrialStart(new Date("2026-11-24T23:59:59.999+09:00"))).toBe(true);
    expect(isBeforePilatesTrialStart(new Date("2026-11-25T00:00:00+09:00"))).toBe(false);
    expect(isBeforePilatesTrialStart(new Date("2026-11-24T15:00:00Z"))).toBe(false); // 同じ瞬間を UTC で書いたもの
    expect(isBeforePilatesTrialStart(new Date("2026-12-04T12:00:00+09:00"))).toBe(false);
  });

  it("画像ファイルがある", () => {
    expect(fs.existsSync(path.resolve(__dirname, "../assets/pilates-reformer.webp"))).toBe(true);
  });
});
