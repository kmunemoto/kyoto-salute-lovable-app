// Weekly blog post generator for Salute御所南.
// Generates one SEO-oriented Japanese article with the Claude API, creates a
// unique on-brand header image for it (see blog-image.mjs), inserts the post
// into src/data/blog-posts.ts, and registers it in public/sitemap.xml.
//
// Requires the ANTHROPIC_API_KEY environment variable.
// Run: node scripts/generate-blog-post.mjs

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Anthropic from "@anthropic-ai/sdk";
import { generateBlogImage } from "./blog-image.mjs";
import { writeSitemap } from "./generate-sitemap.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const POSTS_FILE = path.join(ROOT, "src/data/blog-posts.ts");
const ASSETS_DIR = path.join(ROOT, "src/assets/blog");

const MODEL = process.env.ANTHROPIC_MODEL || "claude-opus-4-8";

const CATEGORIES = [
  "コラム",
  "ダイエット",
  "ボディメイク",
  "女性向け",
  "健康・姿勢改善",
  "初心者向け",
  "料金・プラン",
  "エリアガイド",
  "比較・検討",
  "無料体験",
  "食事アドバイス",
  "ジム選び",
];

function today() {
  return new Date().toISOString().slice(0, 10);
}

function readPosts() {
  return fs.readFileSync(POSTS_FILE, "utf8");
}

function existingSlugs(src) {
  return [...src.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
}

function existingTitles(src) {
  return [...src.matchAll(/title:\s*"([^"]+)"/g)].map((m) => m[1]);
}

// A valid JS identifier derived from the slug, used as the thumbnail import name.
function importVarName(slug) {
  return "blog_" + slug.replace(/-/g, "_");
}

// Insert a new asset import after the last existing "@/assets/blog/..." import.
function addThumbnailImport(src, importLine) {
  const re = /import\s+\w+\s+from\s+"@\/assets\/blog\/[^"]+";\n/g;
  let last = null;
  let m;
  while ((m = re.exec(src))) last = m;
  if (!last) throw new Error("No blog asset imports found in blog-posts.ts");
  const idx = last.index + last[0].length;
  return src.slice(0, idx) + importLine + src.slice(idx);
}

function buildPrompt(titles) {
  return `あなたは京都市中京区・御所南のパーソナルジム「Salute御所南」のWebマーケティング担当者です。
SEOに強く、お客様（見込み客）の役に立つ日本語のブログ記事を1本書いてください。

# ジムの基本情報（記事内で自然に織り込むこと）
- 店名：パーソナルジム Salute御所南
- 立地：地下鉄丸太町駅から徒歩8分、京阪神宮丸太町駅から徒歩8分、御所南・丸太町通り沿い
- 完全個室・完全予約制のマンツーマン指導
- トレーナーは栄養士資格を保有（食事面もサポート）
- 料金：入会金¥0、1回¥4,000〜、縛りのない月額制
- 手ぶらOK（ウェア・シューズ・タオル・お水を無料レンタル）
- 当日キャンセル・予約変更が無料
- 営業時間：10:00〜22:00（完全予約制）
- 無料体験を実施中
- 公式Instagram：https://www.instagram.com/salute_goshominami/

# 執筆ルール
- 1200〜1800文字程度の日本語。
- 本文はHTMLで記述。使用可能タグは <p> <h2> <h3> <ul> <li> <strong> <a> のみ。<html>や<body>は不要。
- 見出し<h2>を3〜5個、必要に応じて<h3>や箇条書きを使う。
- 読者の悩みに共感→解決策→Salute御所南の特徴、という流れにする。
- 誇大広告・医療効果の断定・他店の誹謗はしない。
- 最後の段落で無料体験への誘導と、Instagramへのリンク（<a href="https://www.instagram.com/salute_goshominami/" target="_blank" rel="noopener noreferrer">公式Instagram</a>）を入れる。
- カテゴリーは次から1つ選ぶ：${CATEGORIES.join(" / ")}
- slugは内容を表す英小文字とハイフンのみ（例：personal-gym-stretch-routine-kyoto）。末尾に -kyoto を付けてよい。
- metaDescriptionは110〜130文字程度。末尾に「完全個室・栄養士トレーナー・無料体験実施中。」のような訴求を入れる。
- readTimeは「5分」「6分」のような表記。

# 既存記事のタイトル（テーマが重複しないようにする）
${titles.map((t) => `- ${t}`).join("\n")}

上記と重複しない新しいテーマで、JSONで出力してください。`;
}

const SCHEMA = {
  type: "object",
  additionalProperties: false,
  properties: {
    slug: { type: "string" },
    title: { type: "string" },
    category: { type: "string", enum: CATEGORIES },
    readTime: { type: "string" },
    metaDescription: { type: "string" },
    content: { type: "string" },
  },
  required: ["slug", "title", "category", "readTime", "metaDescription", "content"],
};

function parseJson(text) {
  try {
    return JSON.parse(text);
  } catch {
    const start = text.indexOf("{");
    const end = text.lastIndexOf("}");
    if (start !== -1 && end !== -1) return JSON.parse(text.slice(start, end + 1));
    throw new Error("Could not parse JSON from model response");
  }
}

function escapeTemplate(s) {
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

function buildPostObject(post, thumbnailVar, date) {
  const content = escapeTemplate(post.content.trim());
  return `  {
    slug: ${JSON.stringify(post.slug)},
    title: ${JSON.stringify(post.title)},
    date: ${JSON.stringify(date)},
    category: ${JSON.stringify(post.category)},
    readTime: ${JSON.stringify(post.readTime)},
    thumbnail: ${thumbnailVar},
    metaDescription:
      ${JSON.stringify(post.metaDescription)},
    content: \`
${content}
    \`,
  },
`;
}

function insertPost(src, objectLiteral) {
  const anchor = "export const blogPosts: BlogPost[] = [\n";
  const idx = src.indexOf(anchor);
  if (idx === -1) throw new Error("Could not find blogPosts array anchor");
  const insertAt = idx + anchor.length;
  return src.slice(0, insertAt) + objectLiteral + src.slice(insertAt);
}


async function main() {
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error("ANTHROPIC_API_KEY is not set. Aborting.");
    process.exit(1);
  }

  const src = readPosts();
  const slugs = new Set(existingSlugs(src));
  const titles = existingTitles(src);
  const date = today();

  const client = new Anthropic();
  const response = await client.messages.create({
    model: MODEL,
    max_tokens: 8000,
    thinking: { type: "adaptive" },
    output_config: { format: { type: "json_schema", schema: SCHEMA } },
    messages: [{ role: "user", content: buildPrompt(titles) }],
  });

  const textBlock = response.content.find((b) => b.type === "text");
  if (!textBlock) throw new Error("No text block in model response");

  const post = parseJson(textBlock.text);

  // Normalise the slug and guarantee uniqueness.
  post.slug = String(post.slug)
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/^-+|-+$/g, "");
  if (!post.slug) throw new Error("Model returned an empty slug");

  if (slugs.has(post.slug)) {
    console.log(`Slug "${post.slug}" already exists. Skipping to avoid a duplicate.`);
    process.exit(0);
  }

  // Generate a unique, on-brand header image for this post (Cloudflare AI photo
  // when credentials are set, otherwise a design card).
  await generateBlogImage(post.slug, post.category, ASSETS_DIR, { title: post.title });
  const thumbnailVar = importVarName(post.slug);
  const importLine = `import ${thumbnailVar} from "@/assets/blog/${post.slug}.webp";\n`;

  const objectLiteral = buildPostObject(post, thumbnailVar, date);
  let updated = addThumbnailImport(src, importLine);
  updated = insertPost(updated, objectLiteral);
  fs.writeFileSync(POSTS_FILE, updated);
  writeSitemap();

  console.log(`Created blog post: ${post.slug}`);
  console.log(`Title: ${post.title}`);
  // Expose values for the workflow (PR title/body).
  if (process.env.GITHUB_OUTPUT) {
    fs.appendFileSync(
      process.env.GITHUB_OUTPUT,
      `slug=${post.slug}\ntitle=${post.title}\ncreated=true\n`,
    );
  }
}

export { buildPostObject, insertPost, parseJson, escapeTemplate, importVarName, addThumbnailImport };

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
