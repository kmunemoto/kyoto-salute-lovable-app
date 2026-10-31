// 検索結果と、LINE・X などで共有したときに出る、ページのタイトル・説明文・画像。
// ページの <Helmet> と、ビルドのときにページ用の HTML（例：dist/pilates-trial.html）を書き出す処理（vite.config.ts）の両方で使う。
// vite.config.ts からも読み込むので、このファイルでは「@/」で始まる import を使わない。
import { PILATES_TRIAL_PAGE } from "./booking";

export const SITE_URL = "https://kyoto-salute.com";

export type PageSeo = {
  /** サイト内のパス（例："/pilates-trial"） */
  path: string;
  title: string;
  description: string;
  /** 共有したときの画像（1200×630） */
  image: string;
};

// 「パーソナル」は検索向けのここ（タイトル・説明文）で使い、画面の文では「1対1」と書く
export const PILATES_TRIAL_SEO: PageSeo = {
  path: PILATES_TRIAL_PAGE,
  title: "京都・丸太町のパーソナルピラティス｜マシンピラティス体験｜Salute御所南",
  description:
    "京都・丸太町でパーソナルピラティスをお探しの方へ。Salute御所南の完全個室で、トレーナーと1対1のマシンピラティスを体験できます。男性の方も受けられます。カウンセリングを含めて60分、体験料¥3,000（体験当日のご入会で¥0）。丸太町駅から徒歩8分。",
  image: `${SITE_URL}/og-pilates.jpg`,
};

// ビルドのときに、ページ用の HTML を書き出すページ。
// LINE・X・Facebook などは JavaScript を動かさずにページを読むので、index.html のままだとホームのタイトルと写真が出てしまう。
export const PRERENDER_PAGES: PageSeo[] = [PILATES_TRIAL_SEO];
