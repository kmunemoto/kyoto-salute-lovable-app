// ブログ自動生成（週1回・レビューなしで公開）で、マシンピラティスの記事がオーナーの決まりに反していないかを確かめる。
// generate-blog-post.mjs が書き込む前に使い、反していれば公開しない。テスト（src/test/pilates-awareness.test.ts）も同じものを使う。

export const PILATES_CATEGORY = "マシンピラティス";

// 画面に出る文（タイトル・本文）では「パーソナル」を重ねず「1対1」と書く（「パーソナルピラティス」は metaDescription だけ）。
// 「パーソナルジム」「パーソナルトレーニング」は対象外
const VISIBLE_NG = /パーソナル[\s・･のな]*(?:マシン)?[\s・･]*ピラティス|パーソナル(?:レッスン|セッション)/;
// 効果をうたう言い方・最上級・手ぶらを勧める言い方・確認が取れていない資格・ピラティスの担当ではない「栄養士」
const CLAIM_NG = /手ぶら|PYLA|改善|治[らりるれろすしせっ療]|痩せ|痩身|(?<![増燃])やせ|矯正|肩こり|腰痛|効果|効[かきくけこ]|必ず(?!しも)|No\.?\s*1|ナンバーワン|日本一|京都一|絶対|最安|相場|無理なく|バネが動きを支え|栄養士/i;
// 曜日・時刻・時間帯（担当トレーナーのシフトで変わるので書かない）。開始日の「11月25日（水）」は先に除く
const SCHEDULE_NG = /\d{1,2}:\d{2}|\d{1,2}時(?!間)|[月火水木金土日]曜|\([月火水木金土日]\)|平日|土日|週末|祝日|午前|午後|夕方|夜|仕事帰り/;
// 体験ページ（/pilates-trial）へのリンク
const TRIAL_LINK = /<a\s[^>]*href="(?:https:\/\/kyoto-salute\.com)?\/pilates-trial\/?"[^>]*>/;

// 全角の数字・英字・括弧を半角にそろえ、開始日（2026年11月25日（水））を除く
const normalize = (text) => text.normalize("NFKC").replace(/(?:2026年)?11月25日\(水\)/g, "");

const matches = (re, text) => [...text.matchAll(new RegExp(re.source, `${re.flags}g`))].map((m) => m[0]);

/** マシンピラティスの記事で、決まりに反するところを返す（なければ空の配列） */
export function pilatesViolations(post) {
  if (post.category !== PILATES_CATEGORY) return [];
  const visible = normalize(`${post.title}\n${post.content}`);
  const all = normalize(`${post.title}\n${post.metaDescription}\n${post.content}`);
  const found = [...matches(VISIBLE_NG, visible), ...matches(CLAIM_NG, all), ...matches(SCHEDULE_NG, all)];
  if (!TRIAL_LINK.test(post.content)) found.push("体験ページ（/pilates-trial）へのリンクがない");
  return [...new Set(found)];
}
