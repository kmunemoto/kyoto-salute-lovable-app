import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { translations } from "@/i18n/translations";

// 当日のキャンセルは「1回分のセッションを消費」扱い（2026年10月〜）。日時の変更は、空き枠があれば当日でも可（消費なし）。
// 「当日キャンセル無料」「セッションを消費しない」といった古い説明が、どこかに残ったり、
// 自動生成のブログ記事で戻ってきたりしないようにする。

const root = path.resolve(__dirname, "../..");
const read = (p: string) => fs.readFileSync(path.join(root, p), "utf-8");

const SITE_FILES = [
  "index.html",
  "src/i18n/translations.ts",
  "src/data/blog-posts.ts",
  "src/data/area-pages.ts",
  "src/pages/AreaPage.tsx",
  "src/pages/Terms.tsx",
  "src/pages/Tokusho.tsx",
];

const STALE = [
  /当日(の)?キャンセル(も)?無料/,
  /当日でも(無料|キャンセル料はかかりません)/,
  /当日の(予約)?変更・キャンセルが無料/,
  /当日の予約変更にも無料/,
  /当日でもキャンセル・予約変更が無料/,
  /セッションの消費は発生し/,
  /キャンセル料もセッションの消費も発生しない/,
  /no session is used/i,
  /不会产生取消费用或消耗/,
  /不會產生取消費用或消耗/,
  /세션 차감이 발생하지/,
];

const CANCEL_QUESTION: Record<keyof typeof translations, string> = {
  ja: "予約のキャンセルや変更はできますか？",
  en: "Can I change or cancel a reservation?",
  zh: "可以更改或取消预约吗？",
  zhTW: "可以更改或取消預約嗎？",
  ko: "예약 변경이나 취소가 가능한가요?",
};

const CONSUMES: Record<keyof typeof translations, string> = {
  ja: "当日のキャンセルは1回分のセッションを消費",
  en: "a same-day cancellation counts as one used session",
  zh: "当天取消将视为消耗1次课程",
  zhTW: "當天取消將視為消耗1次課程",
  ko: "당일 취소는 세션 1회를 사용한 것으로",
};

// 当日の日時変更は、空き枠があればできる（消費なし）
const CHANGE_OK: Record<keyof typeof translations, string> = {
  ja: "日時の変更は、空き枠があれば当日でも可能です（セッションは消費されません）",
  en: "Same-day changes to another time are possible if a slot is available",
  zh: "只要有空档，当天也可以更改日期和时间",
  zhTW: "只要有空檔，當天也可以更改日期與時間",
  ko: "빈 시간이 있으면 당일에도 일정 변경이 가능합니다",
};

describe("当日キャンセルの扱い（1回消費）", () => {
  it.each(SITE_FILES)("%s に「当日キャンセル無料」などの古い説明が残っていない", (file) => {
    const s = read(file);
    for (const re of STALE) expect(s, `${file}: ${re}`).not.toMatch(re);
  });

  it.each(Object.keys(CANCEL_QUESTION) as (keyof typeof translations)[])("%s: よくあるご質問に「当日は1回消費」「空き枠があれば当日の変更は可」と書いてある", (lang) => {
    const item = translations[lang].faq.items.find((i) => i.question === CANCEL_QUESTION[lang]);
    expect(item, `${lang} のキャンセルの質問が見つからない`).toBeDefined();
    expect(item!.answer).toContain(CONSUMES[lang]);
    expect(item!.answer).toContain(CHANGE_OK[lang]);
  });

  it("検索エンジン向けの FAQPage（index.html）と、画面の FAQ が同じ文面", () => {
    const ja = translations.ja.faq.items.find((i) => i.question === CANCEL_QUESTION.ja)!;
    const html = read("index.html");
    const m = html.match(/"name": "予約のキャンセルや変更はできますか？",\s*"acceptedAnswer": \{\s*"@type": "Answer",\s*"text": "([^"]*)"/);
    expect(m, "FAQPage にキャンセルの質問がない").not.toBeNull();
    expect(m![1]).toBe(ja.answer);
  });

  it("利用規約・特商法にも「当日は1回消費」「空き枠があれば当日の変更は可」と書いてある", () => {
    const terms = read("src/pages/Terms.tsx");
    const tokusho = read("src/pages/Tokusho.tsx");
    expect(terms).toContain("当日のキャンセルは、1回分のセッションを消費したものとして取り扱います");
    expect(terms).toContain("予約日時の変更は、空き枠がある場合に限り、当日でもお手続きいただけます");
    expect(tokusho).toContain("当日のキャンセルは、1回分のセッションを消費した扱いとなります");
    expect(tokusho).toContain("予約日時の変更は、空き枠があれば当日でも可能です");
  });

  it("ブログ自動生成の前提にも、新しい扱いが書いてある", () => {
    expect(read("scripts/generate-blog-post.mjs")).toContain("当日のキャンセルは1回分のセッションを消費した扱いになる");
  });
});
