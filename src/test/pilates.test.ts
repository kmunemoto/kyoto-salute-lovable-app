import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { translations } from "@/i18n/translations";

// マシンピラティス（PilatesSection）。どの言語でも同じ構成（3項目・画像の説明・「イメージです」の注記）で表示する。

const LANGS = Object.keys(translations) as (keyof typeof translations)[];

describe("マシンピラティス（pilates）", () => {
  it.each(LANGS)("%s: 3 項目で、空の文言がない", (lang) => {
    const p = translations[lang].pilates;
    expect(p.points).toHaveLength(3);
    for (const s of [p.kicker, p.title, p.lead, p.imageAlt, p.imageNote, translations[lang].nav.pilates, ...p.points.flatMap((i) => [i.title, i.description])]) {
      expect(s.trim()).not.toBe("");
    }
  });

  it("日本語の見出しと注記", () => {
    expect(translations.ja.pilates.title.replace("\n", "")).toBe("マシンピラティスも選べます");
    expect(translations.ja.pilates.imageNote).toBe("※画像はイメージです");
  });

  it("画像ファイルがある", () => {
    expect(fs.existsSync(path.resolve(__dirname, "../assets/pilates-reformer.webp"))).toBe(true);
  });
});
