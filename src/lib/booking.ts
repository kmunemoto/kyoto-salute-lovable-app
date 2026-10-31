// マシンピラティス体験の予約ページ。体験メニューに直接つながる URL なので、末尾まで変えずに使う
// （計測用に ?utm_source=… を付けるのは問題ない）。
// パーソナルトレーニングの体験は、これまでどおり各コンポーネントの https://app.kyoto-salute.com/trial を使う。
export const PILATES_TRIAL_URL =
  "https://app.kyoto-salute.com/trial/ceda19b0-d5e0-4928-ab2e-996a0b823af4/menu/8980f07c-987b-42f1-8c37-158f10eacb9f";

// ホームページ内の、マシンピラティス体験の案内ページ（日本語のみ）
export const PILATES_TRIAL_PAGE = "/pilates-trial";

// マシンピラティス体験は 2026年11月25日（水）から。その日までは「スタート」の日付を表示する（過ぎたら自動で消える）
const PILATES_TRIAL_START = new Date("2026-11-25T00:00:00+09:00");
export const isBeforePilatesTrialStart = (now: Date = new Date()) => now < PILATES_TRIAL_START;
