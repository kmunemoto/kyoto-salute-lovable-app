// ビルドした index.html の <head> を、ページ用に書き換える。
// JavaScript を動かさない LINE・X・Facebook などのプレビューや、検索エンジンが最初に読む HTML 向け。
// 画面の中身は、これまでどおり JavaScript（React）で表示する。
// vite.config.ts からも読み込むので、このファイルでは「@/」で始まる import を使わない。
import { SITE_URL, type PageSeo } from "./seo-pages";

const escapeAttr = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const escapeText = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** <meta name|property="key" content="…"> の content を書き換える。見つからなければ </head> の前に足す */
const setMeta = (html: string, attr: "name" | "property", key: string, value: string) => {
  const re = new RegExp(`(<meta\\s+${attr}="${escapeRe(key)}"\\s+content=")[^"]*(")`, "g");
  if (re.test(html)) return html.replace(re, (_m, a: string, b: string) => `${a}${escapeAttr(value)}${b}`);
  return html.replace("</head>", `  <meta ${attr}="${key}" content="${escapeAttr(value)}" />\n</head>`);
};

export const pageFileName = (page: PageSeo) => `${page.path.replace(/^\//, "")}.html`;

export function rewriteHead(indexHtml: string, page: PageSeo): string {
  const url = `${SITE_URL}${page.path}`;
  let html = indexHtml;

  // タイトル
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeText(page.title)}</title>`);

  // 説明文・OGP・Twitter
  html = setMeta(html, "name", "description", page.description);
  html = setMeta(html, "property", "og:title", page.title);
  html = setMeta(html, "property", "og:description", page.description);
  html = setMeta(html, "property", "og:url", url);
  html = setMeta(html, "property", "og:image", page.image);
  html = setMeta(html, "name", "twitter:title", page.title);
  html = setMeta(html, "name", "twitter:description", page.description);
  html = setMeta(html, "name", "twitter:image", page.image);

  // 言語ごとのホーム（hreflang）は、ホームのためのものなので外す
  html = html.replace(/[ \t]*<link rel="alternate" hreflang="[^"]*" href="[^"]*"\s*\/?>\n?/g, "");

  // ホームの「よくある質問」（FAQPage）は、このページの画面にないので外す（ページの FAQ は Helmet が足す）
  html = html.replace(/[ \t]*<!-- FAQPage Schema -->\n?/g, "");
  html = html.replace(/[ \t]*<script type="application\/ld\+json">([\s\S]*?)<\/script>\n?/g, (block, body: string) => {
    try {
      return JSON.parse(body)["@type"] === "FAQPage" ? "" : block;
    } catch {
      return block;
    }
  });

  // canonical（Helmet が出すものと同じ形にして、描画後に2つにならないようにする）
  const canonical = `<link rel="canonical" href="${escapeAttr(url)}" data-rh="true" />`;
  html = /<link rel="canonical"[^>]*>/.test(html)
    ? html.replace(/<link rel="canonical"[^>]*>/, canonical)
    : html.replace("</head>", `  ${canonical}\n</head>`);

  return html;
}
