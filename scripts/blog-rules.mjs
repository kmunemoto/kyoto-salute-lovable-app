// ブログ自動生成（週1回・レビューなしで公開）で、マシンピラティスの記事がオーナーの決まりに反していないかを確かめる。
// generate-blog-post.mjs が書き込む前に使い、反していれば公開しない。テスト（src/test/pilates-awareness.test.ts）も同じものを使う。

export const PILATES_CATEGORY = "マシンピラティス";

// 画面に出る文（タイトル・本文）では「パーソナル」を重ねず「1対1」と書く（「パーソナルピラティス」は metaDescription だけ）
const VISIBLE_NG = /パーソナルピラティス|パーソナルレッスン/;
// 効果をうたう言い方・手ぶらを勧める言い方・確認が取れていない資格
const CLAIM_NG = /手ぶら|PYLA|改善|治る|治り|痩せ|矯正|効果|効く|必ず|No\.?1|最安|相場|無理なく|バネが動きを支え/;
// 曜日・時刻（担当トレーナーのシフトで変わるので書かない。開始日の「11月25日（水）」は対象外）
const SCHEDULE_NG = /\d{1,2}[:：]\d{2}|\d{1,2}時|[月火水木金土日]曜|夕方|夜|午後|毎週/;

/** マシンピラティスの記事で、決まりに反する言葉を返す（なければ空の配列） */
export function pilatesViolations(post) {
  if (post.category !== PILATES_CATEGORY) return [];
  const visible = `${post.title}\n${post.content}`;
  const all = `${post.title}\n${post.metaDescription}\n${post.content}`;
  const found = [];
  for (const [re, text] of [[VISIBLE_NG, visible], [CLAIM_NG, all], [SCHEDULE_NG, all]]) {
    const g = new RegExp(re.source, "g");
    for (const m of text.matchAll(g)) found.push(m[0]);
  }
  return [...new Set(found)];
}
