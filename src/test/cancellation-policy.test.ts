import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { translations } from "@/i18n/translations";

// 予約の変更・キャンセルのルール（2026年11月〜）：
// - 前日23:59までにアプリで手続きすれば、回数を消化しない
// - 当日（0:00以降）の変更・キャンセルと、予約当日に来店がない場合は、1回分の消化
// - 当日の日程変更も、変更前の予約が消化扱い
// - 振替の予約は、空き状況に応じて先着順。ジムの都合で変更をお願いする場合は消化しない
// 「当日キャンセル無料」「空き枠があれば当日でも変更できる（消費なし）」「いつでも変更・キャンセルできる」
// といった古い説明が、どこかに残ったり、自動生成のブログ記事で戻ってきたりしないようにする。

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
  // 当日キャンセルを無料とする古い説明
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
  // 「空き枠があれば当日でも日時を変更できる（消費なし）」という、前のルールの説明
  /空き(枠)?が(あれば|ある場合)[^。]*当日/,
  /当日でも[^。]*変更(でき|が可能|可能|いただけ)/,
  /Same-day changes to another time are possible/i,
  /当天也可以更改/,
  /當天也可以更改/,
  /당일에도 일정 변경이 가능/,
  // 当日も含めて「いつでも」変更・キャンセルできるように読める言い方
  /(変更|キャンセル|振替)[^。]{0,24}いつでも/,
  /いつでも[^。]{0,20}(変更|キャンセル|振替|振り替)/,
  /any ?time[^.]{0,30}(change|cancel|reschedul)|(change|cancel|reschedul)[^.]{0,30}any ?time/i,
  // 当日でも消化されない・当日でも振替できる・直前でも変更できる、といった言い方
  /当日[^。]*(消費|消化)(され(ない|ません)|しない|しません|なし)/,
  /当日でも[^。]*(振替|振り替)/,
  /直前(でも|まで)[^。]{0,20}(変更|キャンセル)/,
];

const CANCEL_QUESTION: Record<keyof typeof translations, string> = {
  ja: "予約のキャンセルや変更はできますか？",
  en: "Can I change or cancel a reservation?",
  zh: "可以更改或取消预约吗？",
  zhTW: "可以更改或取消預約嗎？",
  ko: "예약 변경이나 취소가 가능한가요?",
};

// よくあるご質問の答えに、ルールの要点がそろっている（前日まで・当日は1回消化・当日の日程変更・振替は先着順・ジムの都合は消化なし）
const RULES: Record<keyof typeof translations, string[]> = {
  ja: [
    "前日23:59までにアプリからお手続きいただければ、回数を消化せずに承ります",
    "当日（0:00以降）の変更・キャンセル、およびご予約当日にご来店がない場合",
    "1回分の消化",
    "当日の日程変更の場合も、変更前のご予約が消化扱いとなります",
    "振替のご予約は、空き状況に応じて先着順で承ります",
    "当ジムの都合により変更をお願いする場合は、消化扱いにはいたしません",
  ],
  en: ["by 23:59 the day before", "from 0:00", "no-shows, count as one used session", "the original reservation also counts as used", "first-come, first-served", "for our own reasons, it will not count as used"],
  zh: ["前一天23:59之前", "（0:00以后）", "视为消耗1次课程", "更改前的预约同样视为已消耗", "先到先得", "因本店原因请您变更预约时，不视为消耗"],
  zhTW: ["前一天23:59前", "（0:00以後）", "視為消耗1次課程", "更改前的預約同樣視為已消耗", "先到先得", "因本店原因請您變更預約時，不視為消耗"],
  ko: ["전날 23:59까지", "(0:00 이후)", "세션 1회가 차감됩니다", "변경 전 예약이 차감됩니다", "선착순", "저희 사정으로 변경을 부탁드리는 경우에는 차감하지 않습니다"],
};

describe("予約の変更・キャンセル（前日23:59まで・当日は1回消化）", () => {
  it("古い言い方の例は、語順や助詞が違っても見つかる（新しいルールの文は見つけない）", () => {
    const stale = [
      "アプリからいつでも変更・キャンセルできる",
      "アプリでいつでも予約変更できる柔軟さ",
      "いつでも予約の変更・キャンセルができます",
      "予約の変更はいつでも可能です",
      "当日の予約変更も可能です（セッションは消費されません）",
      "当日でも振替できます",
      "直前でも予約を変更できます",
      "予約日時の変更は、空き枠がある場合に限り、当日でもお手続きいただけます。",
      "You can reschedule anytime in the app.",
    ];
    for (const s of stale) expect(STALE.some((re) => re.test(s)), s).toBe(true);
    const current = [
      "ご予約の変更・キャンセルは、前日23:59までにアプリからお手続きいただければ、回数を消化せずに承ります。",
      "当日の日程変更の場合も、変更前のご予約が消化扱いとなります。",
      "なお、当ジムの都合により変更をお願いする場合は、消化扱いにはいたしません。",
      "いつでも予約できます。",
    ];
    for (const s of current) expect(STALE.some((re) => re.test(s)), s).toBe(false);
  });

  it.each(SITE_FILES)("%s に、前のルールや「当日キャンセル無料」などの古い説明が残っていない", (file) => {
    const s = read(file);
    for (const re of STALE) expect(s, `${file}: ${re}`).not.toMatch(re);
  });

  it.each(Object.keys(CANCEL_QUESTION) as (keyof typeof translations)[])("%s: よくあるご質問に、新しいルールの要点がそろっている", (lang) => {
    const item = translations[lang].faq.items.find((i) => i.question === CANCEL_QUESTION[lang]);
    expect(item, `${lang} のキャンセルの質問が見つからない`).toBeDefined();
    for (const s of RULES[lang]) expect(item!.answer, s).toContain(s);
  });

  it("検索エンジン向けの FAQPage（index.html）と、画面の FAQ が同じ文面", () => {
    const ja = translations.ja.faq.items.find((i) => i.question === CANCEL_QUESTION.ja)!;
    const html = read("index.html");
    const m = html.match(/"name": "予約のキャンセルや変更はできますか？",\s*"acceptedAnswer": \{\s*"@type": "Answer",\s*"text": "([^"]*)"/);
    expect(m, "FAQPage にキャンセルの質問がない").not.toBeNull();
    expect(m![1]).toBe(ja.answer);
  });

  it("利用規約・特商法にも、新しいルールが書いてあり、最終更新日も新しい", () => {
    const terms = read("src/pages/Terms.tsx");
    const tokusho = read("src/pages/Tokusho.tsx");
    expect(terms).toContain("予約日の前日23時59分までに専用アプリからお手続きいただいた場合、セッションを消化しないものとします");
    expect(terms).toContain("予約日の当日（0時以降）の変更・キャンセル、および予約日当日にご来店がない場合は、1回分のセッションを消化したものとして取り扱います");
    expect(terms).toContain("当日に予約の日程を変更する場合も、変更前の予約を消化したものとして取り扱います");
    expect(terms).toContain("振替の予約は、空き状況に応じて先着順で承ります");
    expect(terms).toContain("当ジムの都合により予約の変更をお願いする場合は、セッションを消化したものとして取り扱いません");
    expect(terms).toContain("最終更新日：2026年11月7日");
    expect(tokusho).toContain("予約日の前日23:59までに専用アプリからお手続きいただければ、セッションは消化されません");
    expect(tokusho).toContain("予約日当日（0:00以降）の変更・キャンセル、および予約日当日にご来店がない場合は、1回分のセッションを消化した扱いとなります");
    expect(tokusho).toContain("当日に日程を変更する場合も、変更前の予約が消化扱いとなります");
    expect(tokusho).toContain("振替の予約は、空き状況に応じて先着順で承ります");
    expect(tokusho).toContain("最終更新日：2026年11月7日");
  });

  it("ブログ自動生成の前提にも、新しいルールが書いてある", () => {
    const gen = read("scripts/generate-blog-post.mjs");
    expect(gen).toContain("前日23:59までに手続きすれば回数は消化されない");
    expect(gen).toContain("当日（0:00以降）の変更・キャンセルと、予約当日に来店がない場合は1回分の消化になる");
    expect(gen).toContain("当日に日程を変更した場合も、変更前の予約が消化扱いになる");
  });
});
