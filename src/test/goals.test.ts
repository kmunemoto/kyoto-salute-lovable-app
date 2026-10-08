import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { translations } from "@/i18n/translations";

// 目的別トレーニング（GoalsSection）は、アイコンを項目の並び順で当てている。
// どの言語も「ダイエット・ボディメイク・姿勢改善」の 3 項目でそろっている必要がある。

const LANGS = Object.keys(translations) as (keyof typeof translations)[];

describe("目的別トレーニング（goals）", () => {
  it.each(LANGS)("%s: 3 項目で、空の文言がない", (lang) => {
    const g = translations[lang].goals;
    expect(g.items).toHaveLength(3);
    for (const s of [g.kicker, g.title, g.sub, g.note, ...g.items.flatMap((i) => [i.title, i.description])]) {
      expect(s.trim()).not.toBe("");
    }
  });

  it("日本語は ダイエット・ボディメイク・姿勢改善 の順", () => {
    expect(translations.ja.goals.items.map((i) => i.title)).toEqual(["ダイエット", "ボディメイク", "姿勢改善"]);
  });
});

describe("index.html の説明文", () => {
  // JS が動く前に検索エンジンや SNS が読む説明文。日本語の meta.description と同じ文面にしておく。
  it("meta・OGP・Twitter・JSON-LD の説明文が、日本語の meta.description と同じ", () => {
    const html = fs.readFileSync(path.resolve(__dirname, "../../index.html"), "utf-8");
    const metas = [...html.matchAll(/(?:name="description"|property="og:description"|name="twitter:description") content="([^"]*)"/g)].map((m) => m[1]);
    const jsonLd = [...html.matchAll(/"@type": "HealthClub",[\s\S]*?"description": "([^"]*)"/g)].map((m) => m[1]);
    expect(metas.length).toBeGreaterThanOrEqual(3);
    expect(jsonLd).toHaveLength(1);
    for (const d of [...metas, ...jsonLd]) expect(d).toBe(translations.ja.meta.description);
  });
});
