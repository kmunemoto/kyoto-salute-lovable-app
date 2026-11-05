import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { PRERENDER_PAGES } from "./src/lib/seo-pages";
import { pageFileName, rewriteHead } from "./src/lib/prerender-head";

// ビルドした index.html をもとに、ページ用の HTML（例：pilates-trial.html）を書き出す。
// <head> のタイトル・説明文・共有画像だけをそのページのものにする（画面の中身は、これまでどおり React で表示する）。
// LINE・X などで /pilates-trial を共有したとき、ホームではなくマシンピラティス体験のタイトルと写真が出るようにするため。
// 🔴 いまの公開先（Lovable のサーバー）では、この HTML は /pilates-trial では使われない（2026-11-05 に本番で確認）。
//   /pilates-trial にはホームの index.html が返り、書き出した HTML は /pilates-trial.html でしか返らない。
//   書き換えルール（_redirects に「/pilates-trial /pilates-trial.html 200」）も試したが効かず、/_redirects がただのファイルとして返った（#130 で試して戻した）。
//   なので検索エンジンは、JavaScript を動かしたあとの <head>（ページの Helmet）を読む。LINE・X の共有ではホームのタイトルと写真が出る。
//   ページごとの HTML を返せる公開先（Netlify・Cloudflare Pages など）に移したときに効くよう、書き出しは残してある（害はない）。
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
