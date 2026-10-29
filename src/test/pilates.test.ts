import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { translations } from "@/i18n/translations";

// マシンピラティス（PilatesSection・料金プラン・よくあるご質問）。
// ご入会後、月額プランの1回ごとにトレーニングかマシンピラティスを選べる（追加料金なし）。
// 体験トレーニングはパーソナルトレーニングのみ。単発プラン（旅行者向け）は対象外。

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

// 「体験はトレーニングのみ」の言い方（FAQ に入れる）
const TRIAL_ONLY: Record<keyof typeof translations, string> = {
  ja: "体験トレーニングはパーソナルトレーニングのみ",
  en: "Trial sessions are personal training only",
  zh: "体验课程仅提供私人训练",
  zhTW: "體驗課程僅提供私人訓練",
  ko: "체험 세션은 퍼스널 트레이닝만 가능합니다",
};

// 「ご入会後」の言い方（ピラティスに触れる文には、この条件を付ける）
const AFTER_JOIN: Record<keyof typeof translations, string> = {
  ja: "ご入会後",
  en: "After joining",
  zh: "入会后",
  zhTW: "入會後",
  ko: "입회 후에는",
};

describe("マシンピラティス（pilates）", () => {
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

  it.each(LANGS)("%s: 月額プランのカードすべてに「マシンピラティスも選べる」、単発プランには書かない", (lang) => {
    const { plans, dropIn } = translations[lang].pricing;
    for (const plan of plans) expect(plan.features, plan.name).toContain(CARD[lang]);
    expect([dropIn.name, dropIn.description, ...dropIn.features].join(" ")).not.toMatch(PILATES);
  });

  it.each(LANGS)("%s: よくあるご質問に、ピラティスの質問があり「体験はトレーニングのみ」と書いてある", (lang) => {
    const items = translations[lang].faq.items.filter((i) => PILATES.test(i.question));
    expect(items).toHaveLength(1);
    expect(items[0].answer.toLowerCase()).toContain(TRIAL_ONLY[lang].toLowerCase());
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

  it("利用規約：本サービスにマシンピラティスを含み、体験はトレーニングのみ", () => {
    const terms = read("src/pages/Terms.tsx");
    expect(terms).toContain("パーソナルトレーニングおよびマシンピラティスのサービス（以下「本サービス」）");
    expect(terms).toContain("本規約で「トレーニング」というときは、マシンピラティスを含むものとします");
    expect(terms).toContain("体験トレーニングは、パーソナルトレーニングのみとします");
  });

  it("ブログ自動生成の前提に「体験はトレーニングのみ」がある", () => {
    expect(read("scripts/generate-blog-post.mjs")).toContain("体験トレーニングはパーソナルトレーニングのみ");
  });

  it("画像ファイルがある", () => {
    expect(fs.existsSync(path.resolve(__dirname, "../assets/pilates-reformer.webp"))).toBe(true);
  });
});
