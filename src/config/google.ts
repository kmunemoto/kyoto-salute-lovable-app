// Google Business Profile (Googleマップ店舗ページ) 連携の設定。
//
// ★ オーナー様へ：下の2つを実際のリンクに置き換えると、口コミ導線が最適化されます。
//   - GOOGLE_MAPS_URL   : 「パーソナルジム Salute御所南」でGoogleマップ検索して開く店舗ページのURL
//   - GOOGLE_REVIEW_URL : 口コミ投稿用リンク（GBP管理画面「クチコミを増やす」の g.page/r/... など）
// 未設定の場合はGoogleマップのSalute御所南検索結果にフォールバックします（店名が固有なので基本その店舗が開きます）。

export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("パーソナルジム Salute御所南 京都市中京区");

// 口コミ投稿リンク（未設定なら店舗ページにフォールバック）。
export const GOOGLE_REVIEW_URL = "";

// 口コミを書いてもらうときに使うリンク（投稿リンク優先、無ければ店舗ページ）。
export const reviewUrl = (): string => GOOGLE_REVIEW_URL || GOOGLE_MAPS_URL;
