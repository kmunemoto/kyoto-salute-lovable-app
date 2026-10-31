// いったん非表示にしたいトレーナーを nameRoman で入れる（例: "Yonetomi Yoshiko"）。外すと、また表示される。
// ホームのトレーナー紹介（TrainerSection）と、マシンピラティス体験のページの「担当トレーナー」の両方に効く。
// 表示が1人になるときは英語の見出し（translations の en.trainer.title）を「Your Trainer」に、2人以上なら「Our Trainers」にする。
export const HIDDEN_TRAINERS = new Set<string>([]);
