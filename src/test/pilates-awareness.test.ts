import { afterEach, describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { translations } from "@/i18n/translations";
import { blogPosts, PILATES_CATEGORY } from "@/data/blog-posts";
import { PILATES_TRIAL_PAGE, PILATES_TRIAL_URL } from "@/lib/booking";
import { PILATES_TRIAL_SEO, PRERENDER_PAGES, SITE_URL } from "@/lib/seo-pages";
import { pageFileName, rewriteHead } from "@/lib/prerender-head";

// 「パーソナル（1対1）のピラティスもやっている」ことを、検索結果・共有したときの表示・サイト内のリンク・ブログで伝える。
// 「パーソナル」は検索向けの欄（タイトル・説明文・構造化データ）で使い、画面の文では「1対1」と書く。

const root = path.resolve(__dirname, "../..");
const read = (p: string) => fs.readFileSync(path.join(root, p), "utf-8");
const indexHtml = () => read("index.html");

afterEach(async () => {
  const { cleanup } = await import("@testing-library/react");
  cleanup();
});

describe("検索結果に出るタイトル・説明文", () => {
  it("ホーム：タイトルと説明文に「1対1のマシンピラティス」がある", () => {
    const { title, description } = translations.ja.meta;
    expect(title).toContain("1対1のマシンピラティス");
    expect(title.startsWith("御所南のパーソナルジム Salute")).toBe(true); // いまの順位の土台は変えない
    expect(description).toContain("1対1のマシンピラティス");
    expect(description).not.toMatch(/改善/);
  });

  it("ホーム：index.html の title・og:title・twitter:title が、日本語の meta.title と同じ", () => {
    const html = indexHtml();
    const titles = [
      ...html.matchAll(/<title>([^<]*)<\/title>|(?:property="og:title"|name="twitter:title") content="([^"]*)"/g),
    ].map((m) => m[1] ?? m[2]);
    expect(titles).toHaveLength(3);
    for (const t of titles) expect(t).toBe(translations.ja.meta.title);
  });

  it("index.html：Lovable が足した重複タグ（og・twitter の2つ目と、プレビュー画面の画像）がない", () => {
    const html = indexHtml();
    for (const key of ['property="og:title"', 'property="og:description"', 'property="og:image"', 'name="twitter:title"', 'name="twitter:description"', 'name="twitter:image"']) {
      expect(html.split(key).length - 1, key).toBe(1);
    }
    expect(html).not.toContain("r2.dev");
    // 説明文は各ページの Helmet が置き換える（2つ並ばないように data-rh を付ける）
    expect(html).toMatch(/<meta name="description" content="[^"]*" data-rh="true">/);
  });

  it("体験ページ：タイトルと説明文に「パーソナルピラティス」「1対1」「丸太町」がある", () => {
    expect(PILATES_TRIAL_SEO.path).toBe(PILATES_TRIAL_PAGE);
    expect(PILATES_TRIAL_SEO.title).toContain("パーソナルピラティス");
    expect(PILATES_TRIAL_SEO.title).toContain("丸太町");
    expect(PILATES_TRIAL_SEO.description).toContain("1対1のマシンピラティス");
    expect(PILATES_TRIAL_SEO.description).toContain("カウンセリングを含めて60分");
    // 共有用の画像（1200×630）がある
    expect(PILATES_TRIAL_SEO.image).toBe(`${SITE_URL}/og-pilates.jpg`);
    expect(fs.existsSync(path.join(root, "public/og-pilates.jpg"))).toBe(true);
  });

  it("利用規約・プライバシーポリシー・特商法：説明文を Helmet で出している（index.html の説明文を書き換えない）", () => {
    for (const file of ["src/pages/Terms.tsx", "src/pages/PrivacyPolicy.tsx", "src/pages/Tokusho.tsx"]) {
      const src = read(file);
      expect(src, file).toMatch(/<Helmet>[\s\S]*<meta name="description" content="[^"]+" \/>[\s\S]*<\/Helmet>/);
      expect(src, file).not.toContain("querySelector('meta[name=\"description\"]')");
    }
  });
});

describe("共有したときの表示（ビルドのときに書き出す pilates-trial.html）", () => {
  const html = rewriteHead(indexHtml(), PILATES_TRIAL_SEO);
  const url = `${SITE_URL}${PILATES_TRIAL_PAGE}`;

  it("ファイル名は pilates-trial.html", () => {
    expect(PRERENDER_PAGES).toContain(PILATES_TRIAL_SEO);
    expect(pageFileName(PILATES_TRIAL_SEO)).toBe("pilates-trial.html");
  });

  it("タイトル・説明文・OGP・Twitter が体験ページのものになる", () => {
    expect(html).toContain(`<title>${PILATES_TRIAL_SEO.title}</title>`);
    const metas: [string, string][] = [
      ['name="description"', PILATES_TRIAL_SEO.description],
      ['property="og:title"', PILATES_TRIAL_SEO.title],
      ['property="og:description"', PILATES_TRIAL_SEO.description],
      ['property="og:url"', url],
      ['property="og:image"', PILATES_TRIAL_SEO.image],
      ['name="twitter:title"', PILATES_TRIAL_SEO.title],
      ['name="twitter:description"', PILATES_TRIAL_SEO.description],
      ['name="twitter:image"', PILATES_TRIAL_SEO.image],
    ];
    for (const [key, value] of metas) {
      const found = [...html.matchAll(new RegExp(`${key} content="([^"]*)"`, "g"))].map((m) => m[1]);
      expect(found, key).toEqual([value]);
    }
    // ホームのタイトルは残らない（ホームの説明文は、お店の情報 HealthClub の description にだけ残る）
    expect(html).not.toContain(translations.ja.meta.title);
  });

  it("canonical は1つで、Helmet と同じ形。ホーム向けの hreflang と FAQPage は外す", () => {
    expect(html.match(/<link rel="canonical"[^>]*>/g)).toEqual([`<link rel="canonical" href="${url}" data-rh="true" />`]);
    expect(html).not.toContain("hreflang");
    const types = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1])["@type"]);
    expect(types).toEqual(["HealthClub"]);
    // 画面の中身（React の読み込み）はそのまま
    expect(html).toContain('<div id="root"></div>');
    expect(html).toContain('<script type="module" src="/src/main.tsx"></script>');
  });

  it("vite.config.ts で、ビルドのときに書き出している", () => {
    const config = read("vite.config.ts");
    expect(config).toContain("PRERENDER_PAGES");
    expect(config).toContain("rewriteHead");
    expect(config).toContain("prerenderPageHeads()");
  });
});

describe("サイト内のリンク（/pilates-trial へ）", () => {
  it("フッター（日本語）・ヘッダーのメニュー・エリアページ・ブログ記事の下・ホームのピラティス欄", () => {
    expect(read("src/components/Footer.tsx")).toContain("<Link to={PILATES_TRIAL_PAGE}");
    expect(read("src/components/Header.tsx")).toContain('{ label: "マシンピラティス体験", href: PILATES_TRIAL_PAGE }');
    expect(read("src/pages/AreaPage.tsx")).toContain("<Link to={PILATES_TRIAL_PAGE}");
    expect(read("src/pages/AreaPage.tsx")).toContain('title: "マシンピラティスも選べる"');
    expect(read("src/pages/BlogPost.tsx")).toContain("1対1のマシンピラティス体験はこちら →");
    expect(read("src/components/PilatesSection.tsx")).toContain("マシンピラティス体験の詳細を見る →");
  });

  it("フッター：日本語のときだけ「マシンピラティス体験」が出る", async () => {
    const { createElement: h } = await import("react");
    const { render, screen } = await import("@testing-library/react");
    const { MemoryRouter } = await import("react-router-dom");
    const { LanguageProvider } = await import("@/i18n/LanguageContext");
    const { default: Footer } = await import("@/components/Footer");
    const ja = render(h(MemoryRouter, null, h(LanguageProvider, { lang: "ja", children: h(Footer) })));
    expect(screen.getByRole("link", { name: "マシンピラティス体験" }).getAttribute("href")).toBe(PILATES_TRIAL_PAGE);
    ja.unmount();
    render(h(MemoryRouter, null, h(LanguageProvider, { lang: "en", children: h(Footer) })));
    expect(screen.queryByRole("link", { name: "マシンピラティス体験" })).toBeNull();
  });
});

describe("FAQ・ピラティス欄", () => {
  const ONE_ON_ONE: Record<keyof typeof translations, string> = { ja: "1対1", en: "1-on-1", zh: "一对一", zhTW: "一對一", ko: "1:1" };
  it.each(Object.keys(translations) as (keyof typeof translations)[])("%s: よくあるご質問で、マシンピラティスも1対1だと答えている", (lang) => {
    const faq = translations[lang].faq.items.find((i) => /ピラティス|Pilates|普拉提|皮拉提斯|필라테스/.test(i.question))!;
    expect(faq.answer).toContain(ONE_ON_ONE[lang]);
    // 画面の文に「パーソナル」を重ねない（#126 のオーナーの指摘）。見出しの上の英字も「Pilates」のまま
    expect(translations[lang].pilates.kicker).not.toMatch(/personal/i);
  });

  it("体験ページ：グループレッスンかどうかの質問に「1対1」と答え、見出しも「1対1の」", () => {
    const page = read("src/pages/PilatesTrial.tsx");
    expect(page).toContain('q: "マシンピラティスは、グループレッスンですか？"');
    expect(page).toContain('<span className="whitespace-nowrap">1対1の</span>');
    expect(page).toContain("twitter:title");
    expect(page).toContain("OG_IMAGE");
  });
});

describe("男性も受けられる（オーナー確認済み）", () => {
  const MEN: Record<keyof typeof translations, { q: string; a: string; note: string }> = {
    ja: { q: "男性もマシンピラティスを受けられますか？", a: "男性の方も受けていただけます", note: "男性の方も受けられます" },
    en: { q: "Can men take machine Pilates too?", a: "men are welcome too", note: "men are welcome too" },
    zh: { q: "男性也可以上器械普拉提吗？", a: "男性也可以参加", note: "男性也可以参加" },
    zhTW: { q: "男性也可以上器械皮拉提斯嗎？", a: "男性也可以參加", note: "男性也可以參加" },
    ko: { q: "남성도 머신 필라테스를 받을 수 있나요?", a: "남성분도 받으실 수 있습니다", note: "남성분도 받으실 수 있습니다" },
  };
  it.each(Object.keys(translations) as (keyof typeof translations)[])("%s: よくあるご質問とピラティス欄に、男性も受けられると書いてある", (lang) => {
    const tr = translations[lang];
    const item = tr.faq.items.find((i) => i.question === MEN[lang].q);
    expect(item, MEN[lang].q).toBeTruthy();
    expect(item!.answer).toContain(MEN[lang].a);
    expect(tr.pilates.trialNote).toContain(MEN[lang].note);
    // 「マシンピラティスは選べますか？」が先（ほかのテストは最初のピラティスの質問を見ている）
    const idx = (re: RegExp) => tr.faq.items.findIndex((i) => re.test(i.question));
    expect(idx(/ピラティス|Pilates|普拉提|皮拉提斯|필라테스/)).toBeLessThan(tr.faq.items.indexOf(item!));
  });

  it("index.html の FAQPage にも、画面と同じ文面で入っている", () => {
    const ja = translations.ja.faq.items.find((i) => i.question === "男性もマシンピラティスを受けられますか？")!;
    const m = indexHtml().match(/"name": "男性もマシンピラティスを受けられますか？",\s*"acceptedAnswer": \{\s*"@type": "Answer",\s*"text": "([^"]*)"/);
    expect(m).not.toBeNull();
    expect(m![1]).toBe(ja.answer);
  });

  it("体験ページ：説明文・リード・よくあるご質問", () => {
    expect(PILATES_TRIAL_SEO.description).toContain("男性の方も受けられます");
    const page = read("src/pages/PilatesTrial.tsx");
    // リード（FAQ の答えにも同じ文があるので、リードにしかない前の部分も含めて確かめる）
    expect(page).toContain("（カウンセリングを含めて60分）。男性の方も受けていただけます。");
    expect(page).toContain('q: "男性も受けられますか？"');
  });
});

describe("体験ページの担当トレーナー", () => {
  it("名前・担当・経歴を出し、資格の欄は出さない", async () => {
    const { createElement: h } = await import("react");
    const { render, screen } = await import("@testing-library/react");
    const { MemoryRouter } = await import("react-router-dom");
    const { HelmetProvider } = await import("react-helmet-async");
    const { LanguageProvider } = await import("@/i18n/LanguageContext");
    const { default: PilatesTrial } = await import("@/pages/PilatesTrial");
    const scrollTo = window.scrollTo;
    window.scrollTo = () => {}; // jsdom には画面のスクロールがない
    try {
      const { container } = render(h(HelmetProvider, null, h(MemoryRouter, null, h(LanguageProvider, { lang: "ja", children: h(PilatesTrial) }))));
      const m = translations.ja.trainer.members.find((x) => x.nameRoman === "Yonetomi Yoshiko")!;
      expect(screen.getByRole("heading", { name: "担当トレーナー" })).toBeTruthy();
      expect(screen.getByText(m.name)).toBeTruthy();
      // 「々」の前に改行しない印（U+2060）を除けば、ホームと同じ経歴の文
      expect(container.textContent!.replace(/\u2060/g, "")).toContain(m.career);
      expect(container.textContent).not.toContain("PYLA");
      expect(screen.getByRole("link", { name: "トレーナー紹介を見る →" }).getAttribute("href")).toBe("/#trainer");
      expect(screen.getByRole("heading", { level: 1 }).textContent).toBe("1対1のマシンピラティス体験");
    } finally {
      window.scrollTo = scrollTo;
    }
  });
});

describe("マシンピラティスのブログ記事", () => {
  const posts = blogPosts.filter((p) => p.category === PILATES_CATEGORY);
  // 手で書いて確かめた3本（このあと自動生成の記事が増えても、テストは落ちないようにする）
  const HANDWRITTEN = ["personal-machine-pilates-kyoto", "machine-pilates-vs-personal-training-kyoto", "men-machine-pilates-kyoto"];

  it("手で書いた3本：1対1・カウンセリングを含めて60分・説明文は130字まで", () => {
    expect(posts.map((p) => p.slug)).toEqual(expect.arrayContaining(HANDWRITTEN));
    for (const p of posts.filter((x) => HANDWRITTEN.includes(x.slug))) {
      expect(p.content, p.slug).toContain("1対1");
      expect(p.content, p.slug).toContain("カウンセリングを含めて60分");
      expect(p.metaDescription.length, p.slug).toBeLessThanOrEqual(130);
    }
  });

  it("どの記事も体験ページにリンクし、画面の文に「パーソナルピラティス」・効果の言い方・曜日や時刻・手ぶらがない", async () => {
    const { pilatesViolations } = await import("../../scripts/blog-rules.mjs");
    expect(posts.length).toBeGreaterThan(0);
    for (const p of posts) {
      expect(p.content, p.slug).toMatch(/<a\s[^>]*href="(?:https:\/\/kyoto-salute\.com)?\/pilates-trial\/?"[^>]*>/);
      expect(pilatesViolations(p), p.slug).toEqual([]);
      expect(fs.existsSync(path.join(root, `src/assets/blog/${p.slug}.webp`)), p.slug).toBe(true);
    }
    // 検索向けの説明文には「パーソナルピラティス」を使ってよい
    expect(posts.find((p) => p.slug === HANDWRITTEN[0])!.metaDescription).toContain("パーソナルピラティス");
  });

  it("自動生成の記事は、決まりに反する言葉があれば止まる", async () => {
    const { pilatesViolations } = await import("../../scripts/blog-rules.mjs");
    const link = '<a href="https://kyoto-salute.com/pilates-trial">マシンピラティス体験</a>';
    const base = { category: PILATES_CATEGORY, title: "マシンピラティスの始め方", metaDescription: "京都でパーソナルピラティスを探している方へ。", content: `<p>トレーナーと1対1で行います。${link}</p>` };
    const withText = (text: string) => ({ ...base, content: `<p>${text}</p>${link}` });
    expect(pilatesViolations(base)).toEqual([]);
    // 画面の文の「パーソナル」の重ね（#126 で外した「パーソナルマシンピラティス」も）
    expect(pilatesViolations({ ...base, title: "京都のパーソナルピラティス" })).toEqual(["パーソナルピラティス"]);
    expect(pilatesViolations({ ...base, title: "京都・御所南のパーソナルマシンピラティス" })).toEqual(["パーソナルマシンピラティス"]);
    // 手ぶら・効果・曜日や時間帯（全角や括弧の曜日も）
    expect(pilatesViolations(withText("手ぶらでOK。夜も通えます。"))).toEqual(["手ぶら", "夜"]);
    expect(pilatesViolations(withText("姿勢改善の効果があります。体幹に効きます。"))).toEqual(["改善", "効果", "効き"]);
    expect(pilatesViolations(withText("平日も土日も、11月28日（土）も、１０：００から"))).toEqual(["平日", "土日", "(土)", "10:00"]);
    // 決まりに反しない言い方は止めない（開始日・時間の長さ・「必ずしも」）
    expect(pilatesViolations(withText("体験は2026年11月25日（水）から。約1時間、24時間受付。経験は必ずしも必要ありません。"))).toEqual([]);
    // 体験ページへのリンクがない記事も止める
    expect(pilatesViolations({ ...base, content: "<p>トレーナーと1対1で行います。</p>" })).toEqual(["体験ページ（/pilates-trial）へのリンクがない"]);
    // ほかのカテゴリーの記事は、この決まりの対象外
    expect(pilatesViolations({ ...base, category: "ダイエット", content: "<p>手ぶらでOK</p>" })).toEqual([]);
    const gen = read("scripts/generate-blog-post.mjs");
    expect(gen).toContain("const violations = pilatesViolations(post);");
    expect(read(".github/workflows/weekly-blog.yml")).toMatch(/- name: Run tests\n\s+if: steps\.generate\.outputs\.created == 'true'\n\s+run: npm test/);
  });

  it("記事の下の案内は、マシンピラティス体験の予約ページ", async () => {
    const { createElement: h } = await import("react");
    const { render, screen } = await import("@testing-library/react");
    const { MemoryRouter, Route, Routes } = await import("react-router-dom");
    const { HelmetProvider } = await import("react-helmet-async");
    const { default: BlogPost } = await import("@/pages/BlogPost");
    const scrollTo = window.scrollTo;
    window.scrollTo = () => {};
    try {
      const open = (slug: string) =>
        render(
          h(HelmetProvider, null,
            h(MemoryRouter, { initialEntries: [`/blog/${slug}`] },
              h(Routes, null, h(Route, { path: "/blog/:slug", element: h(BlogPost) })))),
        );
      const pilates = open(HANDWRITTEN[0]);
      expect(screen.getByRole("link", { name: "マシンピラティス体験を予約する" }).getAttribute("href")).toBe(PILATES_TRIAL_URL);
      expect(screen.getByRole("link", { name: "体験の詳細を見る →" }).getAttribute("href")).toBe(PILATES_TRIAL_PAGE);
      expect(screen.queryByRole("link", { name: "体験トレーニングを予約する" })).toBeNull();
      // ヘッダーの予約ボタンとスマホ下の固定ボタンも、マシンピラティス体験の予約ページ
      const sticky = screen.getAllByRole("link", { name: "ピラティス体験を予約" });
      expect(sticky.length).toBeGreaterThanOrEqual(2);
      for (const a of sticky) expect(a.getAttribute("href")).toBe(PILATES_TRIAL_URL);
      expect(screen.queryByRole("link", { name: "体験を予約" })).toBeNull();
      pilates.unmount();
      // ほかの記事は、これまでどおり体験トレーニング。その下に、マシンピラティス体験へのリンク
      open("strength-training-longevity-weekly-minutes-kyoto");
      expect(screen.getByRole("link", { name: "体験トレーニングを予約する" }).getAttribute("href")).toBe("https://app.kyoto-salute.com/trial");
      expect(screen.getByRole("link", { name: "体験を予約" }).getAttribute("href")).toBe("https://app.kyoto-salute.com/trial");
      expect(screen.getByRole("link", { name: "1対1のマシンピラティス体験はこちら →" }).getAttribute("href")).toBe(PILATES_TRIAL_PAGE);
    } finally {
      window.scrollTo = scrollTo;
    }
  });

  it("ブログ自動生成の前提に、マシンピラティスのカテゴリーと書き方がある", () => {
    const gen = read("scripts/generate-blog-post.mjs");
    expect(gen).toContain('  "マシンピラティス",\n];');
    expect(gen).toContain("「栄養士トレーナー」は付けない");
    expect(gen).toContain("担当トレーナーの名前や資格名は書かない");
  });
});
