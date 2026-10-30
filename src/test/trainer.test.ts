import { describe, expect, it } from "vitest";
import { translations } from "@/i18n/translations";

// トレーナー紹介（TrainerSection）は、写真を trainer.members の並び順で当てている。
// どの言語も「宗本（代表）・米富（マシンピラティス担当）」の順でそろっている必要がある。

const LANGS = Object.keys(translations) as (keyof typeof translations)[];

// トレーナーのプロフィールに、電話番号・メールアドレス・URL・郵便番号・生まれ年などを載せない
const PRIVATE = /@|https?:\/\/|〒|\d{2,4}-\d{2,4}-\d{3,4}|\b19\d\d\b|19\d\d年|[4-6]0代|[4-6]0s/;

// 効果を約束する言い方（改善・矯正など）は、マシンピラティス担当の紹介に使わない
const CLAIMS = /改善|矯正|矫正|improv|개선|교정/i;

describe("トレーナー紹介（trainer）", () => {
  it.each(LANGS)("%s: 宗本・米富の順に2人で、空の文言がない", (lang) => {
    const tr = translations[lang].trainer;
    expect(tr.members.map((m) => m.nameRoman)).toEqual(["Munemoto Kanta", "Yonetomi Yoshiko"]);
    for (const s of [tr.kicker, tr.title, tr.qualLabel, tr.careerLabel, tr.messageLabel, tr.greetingLabel]) expect(s.trim()).not.toBe("");
    for (const m of tr.members) {
      for (const s of [m.name, m.role, m.qual, m.career, m.message, ...m.greetingParagraphs]) expect(s.trim(), m.name).not.toBe("");
      expect(m.greetingParagraphs.length).toBeGreaterThan(0);
    }
  });

  it("日本語の名前と担当", () => {
    const [head, pilates] = translations.ja.trainer.members;
    expect(head.name).toBe("宗本 寛太");
    expect(pilates.name).toBe("米富 佳子");
    expect(pilates.role).toBe("マシンピラティス担当トレーナー");
  });

  it.each(LANGS)("%s: プロフィールに連絡先や年齢などの個人情報がなく、ピラティス担当の紹介に効果を約束する言い方がない", (lang) => {
    const [, pilates] = translations[lang].trainer.members;
    for (const m of translations[lang].trainer.members) {
      for (const s of [m.role, m.qual, m.career, m.message, ...m.greetingParagraphs]) expect(s, s).not.toMatch(PRIVATE);
    }
    for (const s of [pilates.role, pilates.qual, pilates.career, pilates.message, ...pilates.greetingParagraphs]) expect(s, s).not.toMatch(CLAIMS);
  });
});
