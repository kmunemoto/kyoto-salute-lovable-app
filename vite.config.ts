import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { PRERENDER_PAGES } from "./src/lib/seo-pages";
import { pageFileName, redirectsFile, rewriteHead } from "./src/lib/prerender-head";

// ビルドした index.html をもとに、ページ用の HTML（例：pilates-trial.html）を書き出す。
// <head> のタイトル・説明文・共有画像だけをそのページのものにする（画面の中身は、これまでどおり React で表示する）。
// LINE・X などで /pilates-trial を共有したとき、ホームではなくマシンピラティス体験のタイトルと写真が出るようにするため。
// 🔴 公開先のサーバーは /pilates-trial に pilates-trial.html を自動では返さない（2026-11-05 に本番で確認）。
// なので書き換えルール（_redirects）も一緒に書き出す。ルールが効かないサーバーでも、これまでどおり index.html が返るだけ（害はない）。
const prerenderPageHeads = (): Plugin => ({
  name: "salute-prerender-page-heads",
  apply: "build",
  enforce: "post",
  generateBundle(_options, bundle) {
    const index = bundle["index.html"];
    if (!index || index.type !== "asset") return;
    const html = String(index.source);
    for (const page of PRERENDER_PAGES) {
      this.emitFile({ type: "asset", fileName: pageFileName(page), source: rewriteHead(html, page) });
    }
    this.emitFile({ type: "asset", fileName: "_redirects", source: redirectsFile(PRERENDER_PAGES) });
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger(), prerenderPageHeads()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
