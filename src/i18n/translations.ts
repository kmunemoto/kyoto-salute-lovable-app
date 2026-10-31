export type Lang = "ja" | "en" | "zh" | "zhTW" | "ko";

export const LANGS: { code: Lang; label: string }[] = [
  { code: "ja", label: "日本語" },
  { code: "en", label: "English" },
  { code: "zh", label: "简体中文" },
  { code: "zhTW", label: "繁體中文" },
  { code: "ko", label: "한국어" },
];

// トレーナー1人分のプロフィール（トレーナー紹介に、members の順に並ぶ）
export type TrainerProfile = { name: string; nameRoman: string; role: string; qual: string; career: string; message: string; greetingParagraphs: string[] };

type Dict = {
  meta: { title: string; description: string };
  nav: { features: string; pilates: string; trainer: string; voice: string; plan: string; faq: string; access: string; consultation: string; blog: string };
  header: { ctaBtn: string };
  hero: { kicker: string; title1: string; titleAccent: string; sub: string; desc: string; seoNote?: string; cta1: string; cta2: string };
  concern: { kicker: string; title: string; items: string[]; footer: string };
  features: { kicker: string; title: string; items: { title: string; description: string }[]; note: string; cta: string; wearRentalTag?: string };
  goals: { kicker: string; title: string; sub: string; items: { title: string; description: string }[]; note: string };
  pilates: { kicker: string; title: string; lead: string; points: { title: string; description: string }[]; imageAlt: string; trialStart: string; trialNote: string; trialBtn: string };
  numbers: { kicker: string; title: string; items: { value: string; label: string }[] };
  trainer: { kicker: string; title: string; qualLabel: string; careerLabel: string; messageLabel: string; greetingLabel: string; members: TrainerProfile[] };
  voice: { kicker: string; title: string; googleReviews: string; changesTitle: string; voiceTitle: string; disclaimer: string; dietLabel: string; bodymakeLabel: string; dietResult: string; bodymakeResult: string; testimonials: { label: string; comment: string }[]; fromGoogle: string };
  pricing: { kicker: string; title: string; freeNote: string; sub: string; popular: string; perMonth: string; dropInUnit: string; dropInCta: string; description: string; plans: { name: string; price: string; perSession: string; description: string; features: string[] }[]; dropIn: { name: string; price: string; perSession: string; description: string; features: string[] }; cta: string };
  flow: { kicker: string; title: string; steps: { title: string; description: string; imageAlt: string }[]; footer: string; bookText: string; bookLinkLabel: string };
  cta: { kicker: string; title: string; paragraphs: string[]; bullets: string[]; webBtn: string; lineBtn: string; pilatesLink: string };
  faq: { kicker: string; title: string; items: { question: string; answer: string }[] };
  access: { kicker: string; title: string; intro: string; addressLabel: string; addressLines: string[]; stationLabel: string; stations: string[]; hoursLabel: string; hoursText: string; hoursSub: string; contactLabel: string; contactText: string; note: string; sponsorsLabel: string };
  footer: { blog: string; app: string; line: string; instagram: string; terms: string; privacy: string; tokusho: string; copyright: string; address: string };
  mobileCta: string;
  languageLabel: string;
};

export const translations: Record<Lang, Dict> = {
  ja: {
    meta: { title: "御所南のパーソナルジム Salute｜中京区・丸太町駅徒歩8分｜体験トレーニング受付中", description: "御所南・中京区の完全個室パーソナルジム Salute御所南。丸太町駅徒歩8分。栄養士トレーナーが、ダイエット・ボディメイク・姿勢改善をマンツーマンで指導。1回¥4,750〜・入会金¥0。体験¥3,000（体験当日のご入会で¥0）。" },
    nav: { features: "特徴", pilates: "ピラティス", trainer: "トレーナー", voice: "お客様の声", plan: "料金プラン", faq: "よくあるご質問", access: "アクセス", consultation: "体験トレーニング", blog: "ブログ" },
    header: { ctaBtn: "体験トレーニング受付中" },
    hero: { kicker: "京都市中京区・御所南で安いパーソナルジム Salute御所南｜体験トレーニング受付中", title1: "運動が続かなかったあなたへ。", titleAccent: "御所南の完全マンツーマンジム。", sub: "過去の自分を超える、史上最高のカラダで充実した人生を", desc: "栄養士資格を持つトレーナーが、あなたのペースに合わせて丁寧にサポート。¥4,750～の通いやすい価格で、入会金・レンタル費用もすべて無料です。", seoNote: "烏丸丸太町・御所南エリアで安いパーソナルジムをお探しの方へ。Salute御所南は丸太町駅から徒歩8分、1回¥4,750～・入会金¥0で通えるパーソナルジムです。体験トレーニングを実施中（体験料¥3,000・体験当日のご入会で¥0）。", cta1: "まずは体験してみる", cta2: "Salute御所南の特徴を見る" },
    concern: { kicker: "Concern", title: "こんなお悩みありませんか？", items: ["ジムに通ったけど続かなかった", "何をすればいいかわからない", "食事制限がつらくて挫折した", "大手ジムは人目が気になる"], footer: "Salute御所南は、こうしたお悩みを解決するために生まれたパーソナルジムです。" },
    features: { kicker: "Features", title: "Salute御所南が選ばれる理由", items: [
      { title: "あなただけの空間で、集中できる", description: "他のお客様と顔を合わせることはありません。周りの目を気にせず、トレーナーと二人だけの空間でトレーニングに集中できます。" },
      { title: "体の変化が「見える」から、続けられる", description: "専用アプリでトレーニング記録や体の変化を自動で記録。数字やグラフで成長を実感できるから、モチベーションが続きます。" },
      { title: "食事の悩みも、一緒に解決できる", description: "栄養士資格を持つトレーナーが、トレーニングだけでなく食事面もサポート。極端な食事制限は行いません。" },
      { title: "続けられる価格だから、体が変わる", description: "1回¥4,750〜、入会金¥0。ウェア・シューズ・タオル・お水もすべて無料です。続けやすい料金設定です。" },
    ], note: "すべてのプランで、完全マンツーマンの指導と、お客様一人ひとりに合わせたオーダーメイドのトレーニングメニューをご提供しています。", cta: "まずは体験してみる", wearRentalTag: "ウェア・シューズ無料レンタル" },
    goals: { kicker: "Goal", title: "目的別トレーニング", sub: "ダイエットはもちろん、ボディメイクや姿勢改善にも。お一人おひとりの目的に合わせて、トレーニングの内容を変えていきます。", items: [
      { title: "ダイエット", description: "無理な食事制限はしません。栄養士トレーナーがトレーニングと食事の両面からサポートし、体重だけでなく見た目の変化も目指します。" },
      { title: "ボディメイク", description: "筋肉をつけながら体脂肪を落とし、メリハリのある体へ。フィジーク大会への出場経験を持つトレーナーが、なりたい体に合わせてメニューを組み立てます。" },
      { title: "姿勢改善", description: "猫背・巻き肩・反り腰など、姿勢のクセを確認。姿勢を支える筋肉のトレーニングとストレッチを組み合わせて、きれいな姿勢を目指します。ご入会後は、マシンピラティスもお選びいただけます。" },
    ], note: "目的が決まっていなくても大丈夫です。体験トレーニングのカウンセリングで、一緒に目標を決めましょう。" },
    pilates: { kicker: "Pilates", title: "マシンピラティスも\n選べます", lead: "パーソナルトレーニングと\nパーソナルマシンピラティス、\nどちらも選べます。\n\n追加料金はかかりません。", points: [
      { title: "呼吸と体幹を意識して", description: "リフォーマーというマシンで、呼吸に合わせてゆっくり動きます。体の奥の筋肉（インナーマッスル）を意識しながら、体幹や姿勢づくりを目指します。" },
      { title: "1対1だから始めやすい", description: "トレーナーがバネの強さで負荷を調整し、動きを確認しながら進めます。体が硬い方や運動が久しぶりの方も、ご自分のペースで取り組めます。" },
      { title: "トレーニングと使い分けて", description: "しっかり鍛えたい日はトレーニング、体の使い方を見直したい日はマシンピラティス。別のスタジオに通わず、1回ごとに選べます。" },
    ], imageAlt: "Salute御所南のスタジオで、リフォーマーを使ってマシンピラティスをする女性", trialStart: "体験は11月25日（水）スタート・予約受付中", trialNote: "マシンピラティスの体験（60分）も受け付けています。体験料は¥3,000、体験当日のご入会で¥0です。日時・空き状況は予約ページでご確認ください。", trialBtn: "マシンピラティス体験を予約する" },
    numbers: { kicker: "Numbers", title: "数字で見るSalute御所南", items: [
      { value: "¥0", label: "入会金・事務手数料" }, { value: "¥4,750〜", label: "1回あたりの料金" }, { value: "5.0", label: "Google口コミ評価" }, { value: "140組+", label: "月間指導実績" },
    ] },
    trainer: { kicker: "Trainer", title: "トレーナー紹介", qualLabel: "保有資格", careerLabel: "経歴", messageLabel: "メッセージ", greetingLabel: "トレーナーからのご挨拶", members: [
      { name: "宗本 寛太", nameRoman: "Munemoto Kanta", role: "Salute御所南 代表トレーナー", qual: "栄養士", career: "四条烏丸のパーソナルジムにて店長として勤務。月140組以上の指導経験を積み、2024年11月より「パーソナルジムSalute御所南」のトレーナーに就任。また、フィジーク大会への出場経験を持ち、減量から体づくりまでのプロセスを自身の体で経験。その実体験を、運動が初めての方一人ひとりに合わせた指導に活かしている。", message: "「運動が苦手な方、ジムが初めての方もご安心ください。皆様の目標に向けて全力でサポートさせていただきます！」", greetingParagraphs: [
        "これまで多くのお客様のダイエット指導を通じて、共通する2つの悩みに向き合ってきました。それは、「自分に合ったダイエット法がわからない」、そして「運動が続かない」という問題です。",
        "自己流のダイエット法に挑戦し、一時的に体重を落とせても、無理な食事制限や誤った運動方法で代謝が低下し、停滞期に突入。結果としてリバウンドを繰り返し、以前よりも体重が増えてしまう…。これは多くの方が経験する悪循環です。さらに、体重は減ったものの見た目に大きな変化が現れないと感じる方も少なくありません。",
        "Salute御所南では、そうした悩みを根本から解決するために、お客様一人ひとりのライフスタイルに寄り添った持続可能なダイエットプランと結果につながる運動習慣のサポートを提供しています。",
        "健康的に、そして美しく変わるための第一歩を、一緒に踏み出しましょう。",
      ] },
      { name: "米富 佳子", nameRoman: "Yonetomi Yoshiko", role: "マシンピラティス担当トレーナー", qual: "PYLA認定インストラクター（マシンピラティス）\n全米ヨガアライアンス認定 RYT200", career: "2023年よりヨガインストラクターとして、スタジオや体育館、オンラインなどで初心者からシニアまで幅広い方々を指導。2025年からはマシンピラティスインストラクターとしても活動。プライベートレッスンでの指導経験も持つ。", message: "「完璧を目指さなくても大丈夫です。皆様と同じ目線で、楽しみながら一緒に体を動かしていきましょう！」", greetingParagraphs: [
        "マシンピラティスの指導では、解剖学をもとに「体の土台を整えること」を大切にしています。同じ動きでも、どこを意識するかで体の反応は大きく変わります。「どこを使っているのか」「どう動くと負担が少ないのか」を丁寧にお伝えし、運動が苦手な方にも、狙ったところに効いている感覚をつかんでいただけるよう心がけています。",
        "私自身、もともと運動は得意ではありませんでした。年齢とともに体の衰えを感じてヨガを始め、マシンピラティスを取り入れるうちに、歩くことや走ることも楽しめるようになりました。",
        "だからこそ、「もう無理」「今さら」と感じている方にも、「まだまだできる」ということをお伝えしたいと思っています。お一人おひとりのペースを大切にしながら、ご自分の体を知るお手伝いができればうれしいです。",
      ] },
    ] },
    voice: { kicker: "Voice", title: "お客様の声", googleReviews: "Google口コミ 17件", changesTitle: "お客様の変化", voiceTitle: "通っているお客様の声", disclaimer: "※効果には個人差があります", dietLabel: "30代女性・ダイエット", bodymakeLabel: "40代男性・ボディメイク", dietResult: "体重 -4.8kg　体脂肪率 -3.2%", bodymakeResult: "体重 +1.5kg（筋肉増加）　体脂肪率 -4.1%", testimonials: [
      { label: "30代女性・会社員", comment: "的確にトレーナーさんに指導していただけるところがパーソナルトレーニングならではの良いところで、続けやすい料金と回数設定なので初心者でも始めやすいです。" },
      { label: "40代男性・デスクワーク", comment: "通い始めて4か月ほどになります。毎回同じトレーニングではなく少しずつ変えて調整してもらえるので毎回効果を感じています。" },
      { label: "30代女性・会社員", comment: "筋トレ初心者ですが、楽しく通っています。ウェア・シューズ等無料レンタルなので手ぶらで通え、前後の予定があっても通いやすいです。" },
    ], fromGoogle: "Google口コミより" },
    pricing: { kicker: "Plan", title: "料金プラン", freeNote: "入会金・事務手数料 ¥0", sub: "3つのプランからお客様の目標に合わせてお選びいただけます。", popular: "おすすめ", perMonth: "（税込）/月", dropInUnit: "（税込）/回", dropInCta: "都度払いで予約する", description: "お客様の目標やライフスタイルに合わせて、3つのプランからお選びいただけます。入会金・事務手数料は¥0。すべてのプランで完全マンツーマン指導・ウェア無料レンタル付きです。", plans: [
      { name: "月4回プラン", price: "¥22,000", perSession: "1回あたり ¥5,500", description: "健康維持や運動不足解消にオススメ", features: ["1セッション50分＋ストレッチ10分", "月4回まで利用可能", "マシンピラティス（50分）も選べる", "完全手ぶらOK"] },
      { name: "月6回プラン", price: "¥30,000", perSession: "1回あたり ¥5,000", description: "週1回以上トレーニングしたい方にオススメ", features: ["1セッション50分＋ストレッチ10分", "月6回まで利用可能", "マシンピラティス（50分）も選べる", "完全手ぶらOK"] },
      { name: "月8回プラン", price: "¥38,000", perSession: "1回あたり ¥4,750", description: "ダイエットやボディメイクにオススメ", features: ["1セッション50分＋ストレッチ10分", "月8回まで利用可能", "マシンピラティス（50分）も選べる", "完全手ぶらOK"] },
    ], dropIn: { name: "単発プラン（ビジター・観光客向け）", price: "¥8,000", perSession: "1回", description: "会員登録不要・手ぶらOK", features: ["1セッション50分", "会員登録不要", "ウェア・シューズ無料レンタル", "手ぶらOK"] }, cta: "まずは体験してみる" },
    flow: { kicker: "Flow", title: "体験トレーニングの流れ", steps: [
      { title: "WEBで予約", description: "からご希望の日時を選んで送信。最短30秒で予約完了です。", imageAlt: "スマートフォンで体験トレーニングを予約している様子" },
      { title: "カウンセリング＋トレーニング", description: "カウンセリングで目標やお悩みをヒアリングした後、50分のパーソナルトレーニングを体験。手ぶらでOK。", imageAlt: "トレーナーがタブレットを見せながらカウンセリングをしている様子" },
    ], footer: "ウェア・シューズ・タオル・お水は無料でご用意しています。", bookText: "", bookLinkLabel: "予約フォーム" },
    cta: { kicker: "Consultation", title: "体験トレーニングのご案内", paragraphs: ["まずは体験トレーニングでお試しください。体験料は¥3,000、体験当日のご入会で¥0です。", "ご入会前の様々な不安は、体験トレーニングで解消できます。", "ジムの雰囲気やトレーニングの内容を、ぜひ一度ご体感ください。"], bullets: ["運動が苦手で不安…", "トレーナーはどんな人だろう…"], webBtn: "WEBから体験を予約", lineBtn: "LINEから予約", pilatesLink: "マシンピラティス体験のご予約はこちら" },
    faq: { kicker: "Q&A", title: "よくある質問", items: [
      { question: "体験トレーニングではどんなことをしますか？", answer: "カウンセリングで目標やお悩みをお聞きした後、実際の50分間のパーソナルトレーニングを体験していただきます。ウェアとシューズは無料レンタルがありますので、手ぶらでお越しください。" },
      { question: "体験トレーニングの料金はいくらですか？", answer: "体験トレーニングの料金は¥3,000です。体験当日にご入会いただいた場合は、体験料は¥0（無料）となります。体験当日にご入会されない場合は、¥3,000を頂戴します。" },
      { question: "マシンピラティスは選べますか？", answer: "はい。ご入会後は、月額プランの1回ごとに、パーソナルトレーニングとマシンピラティスのどちらかを選べます。マシンピラティスも1回50分で、追加料金はかかりません。ご入会前に、マシンピラティスの体験（60分）を受けていただくこともできます。体験料は¥3,000で、体験当日にご入会いただいた場合は¥0です。" },
      { question: "運動経験がないのですが、大丈夫でしょうか？", answer: "もちろん大丈夫です！来店されるほとんどの方が初めての方ばかりです。一人一人の運動経験や体力・目的にあったトレーニングをトレーナーが丁寧に指導いたします。" },
      { question: "持ち物はありますか？", answer: "ウェアや靴に加えてお水もご用意しておりますので、手ぶらでお気軽にお越しいただけます。" },
      { question: "プランの有効期限はどうなっていますか？", answer: "プランの有効期間は、その月の1回目のトレーニング日から起算して1ヶ月間となります。" },
      { question: "最低契約期間はありますか？", answer: "契約期間に縛りはございません。最低1ヶ月から始められます。" },
      { question: "料金以外にかかる費用はありますか？", answer: "月額プランの料金以外に、必ずかかる費用はありません。入会金・事務手数料は¥0、ウェア・シューズ・タオル・お水もすべて無料レンタルです。" },
      { question: "最寄り駅はどこですか？", answer: "地下鉄「丸太町」駅から徒歩8分です。京阪「神宮丸太町」駅からも徒歩8分でお越しいただけます。" },
      { question: "予約のキャンセルや変更はできますか？", answer: "予約の変更・キャンセルは、専用アプリからいつでもお手続きいただけます。日時の変更は、空き枠があれば当日でも可能です（セッションは消費されません）。キャンセル料はかかりませんが、当日のキャンセルは1回分のセッションを消費した扱いとなります。" },
    ] },
    access: { kicker: "Access", title: "アクセス", intro: "烏丸丸太町エリア、丸太町駅から徒歩8分。地下鉄「丸太町」駅の4番出口を出て東へ。丸太町通り沿いにあるプラザ御所南の2階です。京阪「神宮丸太町」駅からも徒歩8分でお越しいただけます。", addressLabel: "住所", addressLines: ["〒604-0981", "京都市中京区毘沙門町533-1 プラザ御所南 2階"], stationLabel: "最寄駅", stations: ["京都市バス「裁判所前」バス停 徒歩3分", "京都市営地下鉄「丸太町」駅 徒歩8分", "京阪「神宮丸太町」駅 徒歩8分", "京都市営地下鉄「京都市役所前」駅 徒歩10分"], hoursLabel: "営業時間", hoursText: "10:00〜22:00（完全予約制）", hoursSub: "不定休 / 営業時間外もご予約を承れる場合がございます", contactLabel: "お問い合わせ", contactText: "ご質問やご相談は公式LINEまたはInstagramのDMよりお受けしております。", note: "※自転車でお越しの際は、ビル1階の階段横スペースにお停めください。 ※駐車場は周辺コインパーキングをご利用ください。", sponsorsLabel: "協賛企業" },
    footer: { blog: "ブログ", app: "公式アプリ", line: "LINE", instagram: "Instagram", terms: "利用規約", privacy: "プライバシーポリシー", tokusho: "特定商取引法に基づく表記", copyright: "パーソナルジム Salute御所南", address: "京都市中京区毘沙門町533-1 プラザ御所南 2階" },
    mobileCta: "LINEで体験を予約 →",
    languageLabel: "言語",
  },

  en: {
    meta: { title: "Personal Training Gym in Kyoto Goshominami | Salute", description: "Salute is a personal training gym in Goshominami, Kyoto. Trial sessions (¥3,000, waived if you join on the day) and drop-in personal training for travelers are available. No membership required for drop-in sessions. 8 min from Marutamachi Station." },
    nav: { features: "Features", pilates: "Pilates", trainer: "Trainer", voice: "Reviews", plan: "Pricing", faq: "FAQ", access: "Access", consultation: "Trial Session", blog: "Blog" },
    header: { ctaBtn: "Book a Trial Session" },
    hero: { kicker: "Personal Training Gym in Goshominami, Kyoto | Trial Session ¥3,000 — Waived If You Join That Day", title1: "Struggling to stay on track on your own?", titleAccent: "Your private 1-on-1 studio in Goshominami.", sub: "Build the strongest version of yourself, one session at a time", desc: "A certified nutritionist trainer guides you at your own pace. Approachable pricing from ¥4,750 per session, with no enrollment fee — sportswear, shoes, towels and water are all provided.", cta1: "Book a Trial Session", cta2: "See Our Features" },
    concern: { kicker: "Concern", title: "Sound familiar?", items: ["Couldn't stick with a gym routine", "Not sure where to start", "Gave up on strict diets", "Felt self-conscious at big gyms"], footer: "Salute Goshominami was created to help you solve these challenges." },
    features: { kicker: "Features", title: "Why Choose Salute", items: [
      { title: "A private space, just for you", description: "No other clients around. Train one-on-one with your trainer in a fully private studio — ideal for beginners who'd rather not work out in front of others." },
      { title: "See your progress clearly", description: "Our app automatically tracks your sessions and body changes. Clear graphs and monthly reports help you stay motivated." },
      { title: "Nutrition guidance included", description: "Your trainer is a certified nutritionist who supports both your workouts and your eating habits. No extreme diets — just practical advice that fits real life." },
      { title: "Easy to keep going", description: "From ¥4,750 per session. No enrollment fee. Sportswear, shoes, towels and water are all provided — so it's easy to start and easy to keep coming back." },
    ], note: "Every plan includes fully 1-on-1 coaching with a training program tailored to your goals.", cta: "Book a Trial Session", wearRentalTag: "Free wear & shoe rental" },
    goals: { kicker: "Goal", title: "Training for Your Goal", sub: "Weight loss, body shaping, or better posture — we adjust your training to fit your goal.", items: [
      { title: "Weight Loss", description: "No extreme dieting. A trainer qualified as a nutritionist supports you through both training and nutrition, aiming for visible changes — not just a lower number on the scale." },
      { title: "Body Shaping", description: "Build muscle while losing body fat for a toned, defined body. A trainer with physique competition experience designs your program around the body you want." },
      { title: "Posture Improvement", description: "We check posture habits such as a rounded back, rounded shoulders, or an arched lower back, then combine training for the muscles that support good posture with stretching. After joining, you can also choose machine Pilates." },
    ], note: "Not sure about your goal yet? No problem — we'll set one together during the counseling in your trial session." },
    pilates: { kicker: "Pilates", title: "Machine Pilates Is Also Available", lead: "You can choose either personal training or 1-on-1 machine Pilates, with no extra fee.", points: [
      { title: "Focus on your breath and core", description: "On a machine called a reformer, you move slowly in time with your breathing. Staying aware of your deep muscles, you work toward a strong core and good posture." },
      { title: "Easy to start with 1-on-1 guidance", description: "Your trainer adjusts the load by changing the reformer's spring tension and checks your form as you go. Even if you're not very flexible or haven't exercised in a while, you can work at your own pace." },
      { title: "Switch between training and Pilates", description: "Choose personal training on days you want a solid workout, and machine Pilates on days you want to rethink how you move. No need to go to a separate studio — you decide session by session." },
    ], imageAlt: "A woman doing machine Pilates on a reformer at the Salute Goshominami studio", trialStart: "Trials start Wed, Nov 25 — booking now open", trialNote: "Machine Pilates trial sessions (60 minutes) are also available. The trial fee is ¥3,000, waived if you join on the day. Please check the booking page for open dates and times.", trialBtn: "Book a Machine Pilates Trial" },
    numbers: { kicker: "Numbers", title: "Salute in Numbers", items: [
      { value: "¥0", label: "Enrollment Fee" }, { value: "¥4,750~", label: "Per Session" }, { value: "5.0", label: "Google Rating" }, { value: "140+", label: "Monthly Clients" },
    ] },
    trainer: { kicker: "Trainer", title: "Our Trainers", qualLabel: "Qualifications", careerLabel: "Career", messageLabel: "Message", greetingLabel: "A Word from Your Trainer", members: [
      { name: "Kanta Munemoto", nameRoman: "Munemoto Kanta", role: "Head Trainer, Salute Goshominami", qual: "Certified Nutritionist", career: "Former manager at a personal gym in Shijo-Karasuma, Kyoto, training 140+ clients per month. Joined Salute Goshominami as head trainer in November 2024. He has also competed in a physique competition, experiencing the full body-making process firsthand — from cutting to conditioning — and brings that experience to personalized guidance for every client, including those new to exercise.", message: "\"Even if you've never exercised before or this is your first time at a gym, don't worry. I'll fully support you toward your goal!\"", greetingParagraphs: [
        "Through years of supporting clients, I've heard two concerns repeatedly: \"I don't know what works for me\" and \"I can't keep it up.\"",
        "At Salute Goshominami, we solve these problems at the root — building training and eating habits that fit your lifestyle and that you can actually maintain.",
        "Let's take the first step together toward a healthier, stronger body.",
      ] },
      { name: "Yoshiko Yonetomi", nameRoman: "Yonetomi Yoshiko", role: "Machine Pilates Trainer", qual: "PYLA Certified Instructor (Machine Pilates)\nYoga Alliance RYT200", career: "Yoga instructor since 2023, teaching a wide range of people, from beginners to seniors, in settings such as studios, sports centers and online classes. Has also worked as a machine Pilates instructor since 2025. Experienced in teaching private lessons as well.", message: "\"You don't have to aim for perfection. I'll be right alongside you — let's have fun moving our bodies together!\"", greetingParagraphs: [
        "When I teach machine Pilates, I emphasize building a good foundation for the body, using anatomy as my guide. Even with the same movement, your body can respond very differently depending on where you focus your attention. I take care to explain which parts of the body you're using and how to move with less strain. I also try to help you get a feel for working the areas you're targeting, even if exercise doesn't come naturally to you.",
        "Exercise didn't come naturally to me, either. When I started to feel my body declining with age, I took up yoga. Then, as I added machine Pilates to my routine, I came to enjoy walking and running, too.",
        "That's why, even if you're thinking \"I can't do it anymore\" or \"It's too late now,\" I want you to know there's still plenty you can do. I'd be glad to help you get to know your body at your own pace.",
      ] },
    ] },
    voice: { kicker: "Voice", title: "Client Results & Reviews", googleReviews: "17 Google Reviews", changesTitle: "Client Transformations", voiceTitle: "What Our Clients Say", disclaimer: "*Results vary by individual", dietLabel: "Female, 30s — Weight loss", bodymakeLabel: "Male, 40s — Body shaping", dietResult: "Weight -4.8kg　Body Fat -3.2%", bodymakeResult: "Weight +1.5kg (muscle gain)　Body Fat -4.1%", testimonials: [
      { label: "Female, 30s — Office Worker", comment: "The trainer gives precise, personal guidance — exactly what makes 1-on-1 training worth it. The pricing and session counts make it easy to start, even as a beginner." },
      { label: "Male, 40s — Desk Job", comment: "I've been training here for about 4 months. The sessions are always adjusted, so I keep feeling real progress every time." },
      { label: "Female, 30s — Office Worker", comment: "I'm new to strength training but really enjoying it. Sportswear and shoes are provided, so I can come straight from work without bringing anything." },
    ], fromGoogle: "From Google Reviews" },
    pricing: { kicker: "Plan", title: "Pricing Plans", freeNote: "Enrollment fee ¥0", sub: "Pick the plan that matches your goal.", popular: "Popular", perMonth: "(tax incl.) / month", dropInUnit: "(tax incl.) / session", dropInCta: "Book a Drop-in", description: "Choose from 3 monthly plans to match your goals. No enrollment fee. Every plan includes 1-on-1 training with free sportswear, shoes, towels and water.", plans: [
      { name: "4 Sessions / Month", price: "¥22,000", perSession: "¥5,500 / session", description: "For staying healthy and active", features: ["50-minute session + 10-minute stretch", "Up to 4 sessions / month", "Machine Pilates (50 min) also available", "Just come as you are"] },
      { name: "6 Sessions / Month", price: "¥30,000", perSession: "¥5,000 / session", description: "For training once a week or more", features: ["50-minute session + 10-minute stretch", "Up to 6 sessions / month", "Machine Pilates (50 min) also available", "Just come as you are"] },
      { name: "8 Sessions / Month", price: "¥38,000", perSession: "¥4,750 / session", description: "For weight loss and body shaping", features: ["50-minute session + 10-minute stretch", "Up to 8 sessions / month", "Machine Pilates (50 min) also available", "Just come as you are"] },
    ], dropIn: { name: "Drop-in Personal Training (for travelers)", price: "¥8,000", perSession: "per session", description: "No membership required. All equipment provided. For travelers visiting Kyoto.", features: ["50-minute 1-on-1 session", "No membership required", "Training wear and shoes provided", "English-friendly support"] }, cta: "Book a Trial Session" },
    flow: { kicker: "Flow", title: "How It Works", steps: [
      { title: "Book Online", description: " Choose your preferred date and time — it takes about 30 seconds.", imageAlt: "Someone booking a trial session on a smartphone" },
      { title: "Consultation + Training", description: "After a short consultation, enjoy a 50-minute personal training session. Just come as you are.", imageAlt: "A trainer going over a tablet with a client during a counseling session" },
    ], footer: "Sportswear, shoes, towels and water are all provided free of charge.", bookText: "Use the ", bookLinkLabel: "booking form" },
    cta: { kicker: "Consultation", title: "Trial Session", paragraphs: ["Try a trial session before you commit — ¥3,000, waived if you join on the day.", "Any questions or concerns before signing up can be answered during the trial.", "Get a real feel for the training and the studio atmosphere."], bullets: ["Worried you're not fit enough?", "Curious what the trainer is like?"], webBtn: "Book a Trial Session", lineBtn: "Book via LINE", pilatesLink: "For a machine Pilates trial, book here" },
    faq: { kicker: "Q&A", title: "FAQ", items: [
      { question: "What happens during the trial session?", answer: "After a short consultation, you'll experience a real 50-minute personal training session. Sportswear, shoes, towels and water are all provided — just come as you are." },
      { question: "How much is the trial session?", answer: "The trial session is ¥3,000. If you sign up for a membership on the day of your trial, the fee is waived (¥0). If you decide not to join on the day, the ¥3,000 fee applies." },
      { question: "Can I choose machine Pilates?", answer: "Yes. After joining, you can choose either personal training or machine Pilates for each session of your monthly plan. Machine Pilates sessions are also 50 minutes, at no extra cost. Machine Pilates trial sessions (60 minutes) are available as well. The trial fee is ¥3,000, waived if you join on the day." },
      { question: "I have no exercise experience. Is that OK?", answer: "Absolutely. Most of our clients had never trained before. Your trainer will guide you carefully based on your fitness level and goals." },
      { question: "What should I bring?", answer: "Nothing. Sportswear, shoes, towels and water are all provided free of charge." },
      { question: "Do you offer drop-in personal training for travelers?", answer: "Yes — our drop-in plan is ¥8,000 per session. No membership required, all training wear and equipment provided. You can book directly via our website or Instagram DM." },
      { question: "Is English-friendly support available?", answer: "Yes. Your trainer can guide you through the workout in basic English, and we use translation tools for more detailed conversations." },
      { question: "Is there a minimum contract?", answer: "No. There's no minimum term — you can start with a single month." },
      { question: "Any extra costs?", answer: "There are no compulsory costs beyond your plan. The enrollment fee is ¥0, and sportswear, shoes, towels and water are all free." },
      { question: "Nearest station?", answer: "8 min on foot from Marutamachi Station (Karasuma Line). Also 8 min from Keihan Jingu-Marutamachi Station." },
      { question: "Can I change or cancel a reservation?", answer: "You can change or cancel your reservation anytime through our app. Same-day changes to another time are possible if a slot is available, and your session is not used up. There is no cancellation fee, but a same-day cancellation counts as one used session." },
    ] },
    access: { kicker: "Access", title: "Access", intro: "8 minutes on foot from Marutamachi Station. Take Exit 4 and walk east along Marutamachi-dori. We're on the 2nd floor of Plaza Goshominami. Also 8 minutes from Keihan Jingu-Marutamachi Station.", addressLabel: "Address", addressLines: ["604-0981", "Plaza Goshominami 2F, 533-1 Bishamoncho, Nakagyo-ku, Kyoto"], stationLabel: "Nearest Stations", stations: ["Kyoto City Bus 'Saibansho-mae' — 3 min walk", "Karasuma Subway Line 'Marutamachi' — 8 min walk", "Keihan 'Jingu-Marutamachi' — 8 min walk", "Karasuma Subway Line 'Kyoto Shiyakusho-mae' — 10 min walk"], hoursLabel: "Hours", hoursText: "10:00 – 22:00 (by reservation only)", hoursSub: "Irregular holidays / sessions outside regular hours may also be available on request", contactLabel: "Contact", contactText: "Questions and inquiries are handled via our official LINE or Instagram DM.", note: "* Bicycle parking is available beside the stairs on the 1st floor of the building. * For cars, please use nearby coin parking.", sponsorsLabel: "Sponsors" },
    footer: { blog: "Blog", app: "Official App", line: "LINE", instagram: "Instagram", terms: "Terms", privacy: "Privacy Policy", tokusho: "Specified Commercial Transactions Act", copyright: "Personal Training Gym Salute Goshominami", address: "Plaza Goshominami 2F, 533-1 Bishamoncho, Nakagyo-ku, Kyoto" },
    mobileCta: "Book a Trial Session →",
    languageLabel: "Language",
  },

  zh: {
    meta: { title: "京都御所南私人教练健身房 | Salute", description: "Salute 是位于京都御所南的私人教练健身房。提供体验课程（3,000日元，当天入会则免费），也支持面向游客的单次训练，无需会员注册。距离丸太町站步行8分钟。" },
    nav: { features: "特点", pilates: "普拉提", trainer: "教练", voice: "客户评价", plan: "价格方案", faq: "常见问题", access: "交通指南", consultation: "体验课程", blog: "博客" },
    header: { ctaBtn: "预约体验课程" },
    hero: { kicker: "京都御所南的私人教练健身房 Salute｜体验课程3,000日元（当天入会免费）", title1: "一个人运动总是难以坚持？", titleAccent: "御所南的一对一私人教练健身房。", sub: "超越过去的自己，遇见更好的体态与状态", desc: "拥有营养师资格的教练，按照您的节奏耐心指导。每次4,750日元起，无入会费，运动服・鞋・毛巾・水均免费提供，轻松开始、轻松坚持。", cta1: "预约体验课程", cta2: "查看健身房特色" },
    concern: { kicker: "Concern", title: "您是否有这些困扰？", items: ["办了健身房却很难坚持", "不知道从哪里开始", "极端节食让人难以坚持", "在大型健身房在意别人的目光"], footer: "Salute御所南正是为了解决这些困扰而设的私人教练健身房。" },
    features: { kicker: "Features", title: "选择Salute的理由", items: [
      { title: "完全私密的训练空间", description: "不会与其他会员碰面。在完全私密的空间里，与教练进行一对一训练，初学者也能安心练习。" },
      { title: "用数字看见自己的进步", description: "专用APP自动记录每次训练与身体变化，图表与月度报告帮助您持续保持动力。" },
      { title: "饮食方面也获得专业建议", description: "教练同时具备营养师资格，不仅指导训练，也协助您调整饮食。不会要求极端节食，建议贴近日常生活。" },
      { title: "容易坚持的价格", description: "每次4,750日元起，入会费0日元，运动服・鞋・毛巾・水全部免费。负担较小、容易坚持的价格，让您轻松开始并长期坚持。" },
    ], note: "所有方案均为一对一指导，并根据每位客人量身定制训练内容。", cta: "预约体验课程", wearRentalTag: "免费租借运动服和鞋子" },
    goals: { kicker: "Goal", title: "根据目的定制训练", sub: "减脂、塑形、改善体态——我们会根据您的目的调整训练内容。", items: [
      { title: "减脂", description: "不进行极端节食。拥有营养师资格的教练从训练和饮食两方面为您提供支持，不只看体重，也追求外形上的变化。" },
      { title: "塑形", description: "在增加肌肉的同时减少体脂，打造线条分明的身材。拥有健体比赛参赛经验的教练，会根据您理想的身材安排训练内容。" },
      { title: "体态改善", description: "先确认驼背、圆肩、骨盆前倾等体态习惯，再结合支撑良好体态的肌肉训练与拉伸，以挺拔的体态为目标。入会后也可以选择器械普拉提。" },
    ], note: "还没有明确的目标也没关系。在体验课程的咨询中，我们会和您一起制定目标。" },
    pilates: { kicker: "Pilates", title: "也可以选择器械普拉提", lead: "私人训练和私人器械普拉提，\n两种都可以选择，\n无需额外费用。", points: [
      { title: "专注呼吸・感受核心", description: "在名为核心床的器械上，配合呼吸缓慢地活动身体。有意识地调动深层肌群，以强化核心、塑造体态为目标。" },
      { title: "一对一指导，容易上手", description: "教练会通过弹簧的强弱来调整负荷，并在课程中留意您的动作。身体僵硬或很久没运动的人，也能按照自己的节奏练习。" },
      { title: "训练与普拉提按需切换", description: "想好好锻炼的日子选私人训练，想重新审视自己如何使用身体的日子选器械普拉提。无需另去其他工作室，每次课程都可以选择。" },
    ], imageAlt: "在Salute御所南工作室使用核心床进行器械普拉提的女性", trialStart: "体验课程11月25日（周三）开始，现已开放预约", trialNote: "也可以预约器械普拉提体验课程（60分钟）。体验费用3,000日元，当天入会则免费。可预约的日期和时间请在预约页面查看。", trialBtn: "预约器械普拉提体验" },
    numbers: { kicker: "Numbers", title: "数字了解Salute", items: [
      { value: "¥0", label: "入会费" }, { value: "¥4,750~", label: "每次费用" }, { value: "5.0", label: "Google评价" }, { value: "140组+", label: "月指导数" },
    ] },
    trainer: { kicker: "Trainer", title: "教练介绍", qualLabel: "资格", careerLabel: "经历", messageLabel: "留言", greetingLabel: "教练寄语", members: [
      { name: "宗本 寛太", nameRoman: "Munemoto Kanta", role: "Salute御所南 主教练", qual: "营养师", career: "曾在四条乌丸的私人教练健身房担任店长，月指导140组以上客户。2024年11月起担任Salute御所南主教练。此外，他还拥有健体比赛的参赛经验，亲身经历了从减脂到塑形的完整过程，并将这份经验运用于针对每位客户（包括运动初学者）的个性化指导。", message: "「不擅长运动的朋友、第一次来健身房的朋友，都可以放心。我会全力支持您达成目标！」", greetingParagraphs: [
        "在长期指导客户的过程中，我经常听到两个共同的困扰：「不知道哪种方法适合自己」、「无法长期坚持」。",
        "在Salute御所南，我们会结合每位客户的生活方式，提供能够长期坚持的训练计划，以及合理可行的饮食建议。",
        "让我们一起迈出健康改变身体的第一步。",
      ] },
      { name: "米富 佳子", nameRoman: "Yonetomi Yoshiko", role: "器械普拉提教练", qual: "PYLA认证教练（器械普拉提）\n美国瑜伽联盟认证 RYT200", career: "2023年起担任瑜伽教练，在瑜伽馆、体育馆及线上等不同场景中，指导从初学者到长者的各类学员。2025年起，同时担任器械普拉提教练。此外，还拥有私人课程的指导经验。", message: "「不追求完美也没关系。我会站在和大家一样的视角，让我们一起开开心心地活动身体吧！」", greetingParagraphs: [
        "指导器械普拉提时，我以解剖学为依据，注重「打好身体的基础」。即使是同样的动作，把意识放在不同的地方，身体的反应也会大不一样。我会细致地讲解「正在用的是哪个部位」「怎样动负担更小」，力求让不擅长运动的朋友也能找到练到目标部位的感觉。",
        "我自己原本也不擅长运动。随着年龄增长，我感到身体渐渐不如从前，于是开始练习瑜伽。后来又把器械普拉提加入练习中，慢慢地，也能享受走路和跑步的乐趣了。",
        "正因如此，我希望让那些觉得「已经不行了」「现在开始太晚了」的朋友也知道「能做的还有很多」。如果能在尊重每个人节奏的同时，帮助大家了解自己的身体，我会很开心。",
      ] },
    ] },
    voice: { kicker: "Voice", title: "客户的变化与评价", googleReviews: "Google评价 17条", changesTitle: "客户的变化", voiceTitle: "客户的评价", disclaimer: "※效果因人而异", dietLabel: "30多岁女性・减脂", bodymakeLabel: "40多岁男性・塑形", dietResult: "体重 -4.8kg　体脂肪率 -3.2%", bodymakeResult: "体重 +1.5kg（肌肉增加）　体脂肪率 -4.1%", testimonials: [
      { label: "30多岁女性・上班族", comment: "教练能根据我的情况给出精准建议，这正是一对一训练的优势。价格和次数也都很合理，作为新手也很容易开始。" },
      { label: "40多岁男性・办公室工作", comment: "已经训练4个月左右。每次训练内容都会有调整，每次都能感受到进步。" },
      { label: "30多岁女性・上班族", comment: "我是健身新手，但每次都很开心。运动服和鞋子都免费提供，可以空手前来非常方便。" },
    ], fromGoogle: "来自Google评价" },
    pricing: { kicker: "Plan", title: "价格方案", freeNote: "入会费・手续费 ¥0", sub: "请根据您的目标选择方案。", popular: "推荐", perMonth: "(含税)/月", dropInUnit: "(含税)/次", dropInCta: "预约单次训练", description: "可根据您的目标，从3个月度方案中选择。入会费・手续费0日元。所有方案均为一对一指导，运动服・鞋・毛巾・水免费提供。", plans: [
      { name: "月4次方案", price: "¥22,000", perSession: "每次 ¥5,500", description: "适合维持健康与日常运动", features: ["每次50分钟＋拉伸10分钟", "每月最多4次", "也可选择器械普拉提（50分钟）", "空手前来即可"] },
      { name: "月6次方案", price: "¥30,000", perSession: "每次 ¥5,000", description: "适合每周训练1次以上", features: ["每次50分钟＋拉伸10分钟", "每月最多6次", "也可选择器械普拉提（50分钟）", "空手前来即可"] },
      { name: "月8次方案", price: "¥38,000", perSession: "每次 ¥4,750", description: "适合减脂与塑形", features: ["每次50分钟＋拉伸10分钟", "每月最多8次", "也可选择器械普拉提（50分钟）", "空手前来即可"] },
    ], dropIn: { name: "单次训练（适合来京都旅行的游客）", price: "¥8,000", perSession: "1次", description: "无需会员注册，全套装备免费提供，适合来京都旅行的游客。", features: ["50分钟一对一训练", "无需会员注册", "运动服・鞋免费提供", "可支持简单英语沟通"] }, cta: "预约体验课程" },
    flow: { kicker: "Flow", title: "体验课程流程", steps: [
      { title: "在线预约", description: "请从预约表单选择希望的日期与时间，约30秒即可完成。", imageAlt: "正在用手机预约体验课程" },
      { title: "咨询 + 训练", description: "进行简短咨询后，体验50分钟的私人教练训练。空手前来即可。", imageAlt: "教练一边展示平板电脑一边进行咨询" },
    ], footer: "运动服・运动鞋・毛巾・饮用水均免费提供。", bookText: "通过", bookLinkLabel: "预约表单" },
    cta: { kicker: "Consultation", title: "体验课程", paragraphs: ["欢迎先来体验一次。体验费用3,000日元，当天入会则免费。", "入会前的各种疑问都可以在体验课程中得到解答。", "亲身感受训练内容与健身房的氛围。"], bullets: ["担心自己不擅长运动…", "想了解教练是什么样的…"], webBtn: "在线预约体验课程", lineBtn: "通过LINE预约", pilatesLink: "器械普拉提体验请点此预约" },
    faq: { kicker: "Q&A", title: "常见问题", items: [
      { question: "体验课程都做些什么？", answer: "进行简短咨询后，体验50分钟的真实私人训练课程。运动服与鞋子免费提供，空手前来即可。" },
      { question: "体验课程的费用是多少？", answer: "体验课程费用为3,000日元。若您在体验当天办理入会，体验费用即为0日元（免费）。若当天未入会，则需支付3,000日元。" },
      { question: "可以选择器械普拉提吗？", answer: "可以。入会后，月度方案的每次课程都可以选择私人训练或器械普拉提。器械普拉提同样为每次50分钟，无需额外费用。另外，也可以预约器械普拉提体验课程（60分钟）。体验费用为3,000日元，若在体验当天入会则免费。" },
      { question: "没有运动经验也可以吗？", answer: "完全没问题。我们的大部分客户都是初学者，教练会根据您的体力与目标耐心指导。" },
      { question: "需要带什么吗？", answer: "无需准备任何物品。运动服・鞋・毛巾・饮用水全部免费提供。" },
      { question: "游客可以单次体验吗？", answer: "可以。单次训练每次8,000日元，无需会员注册，运动服与器材全部免费提供。可通过网站或Instagram DM预约。" },
      { question: "可以用英语或中文沟通吗？", answer: "教练可以使用简单的英语进行训练沟通，复杂内容会借助翻译工具，方便外国游客使用。" },
      { question: "有最低合约期限吗？", answer: "没有合约期限限制，最少1个月即可开始。" },
      { question: "除了套餐费用还有其他费用吗？", answer: "套餐费用之外没有必须支付的费用。入会费・手续费0日元，运动服・鞋・毛巾・饮用水全部免费。" },
      { question: "最近的车站是哪里？", answer: "地铁「丸太町」站步行8分钟。京阪「神宫丸太町」站步行也是8分钟。" },
      { question: "可以更改或取消预约吗？", answer: "预约的更改与取消可随时通过专用APP办理。只要有空档，当天也可以更改日期和时间（不消耗课程次数）。不收取取消费用，但当天取消将视为消耗1次课程。" },
    ] },
    access: { kicker: "Access", title: "交通指南", intro: "从地铁丸太町站步行8分钟。4号出口出来后沿丸太町通向东直走，位于Plaza御所南2楼。京阪神宫丸太町站步行同样8分钟。", addressLabel: "地址", addressLines: ["〒604-0981", "京都市中京区毘沙門町533-1 Plaza御所南 2楼"], stationLabel: "最近车站", stations: ["京都市巴士「裁判所前」步行3分钟", "京都市营地铁「丸太町」站 步行8分钟", "京阪「神宫丸太町」站 步行8分钟", "京都市营地铁「京都市役所前」站 步行10分钟"], hoursLabel: "营业时间", hoursText: "10:00〜22:00（完全预约制）", hoursSub: "不定休 / 营业时间外也可能接受预约", contactLabel: "联系方式", contactText: "请通过官方LINE或Instagram DM咨询。", note: "※骑自行车的客人请停在大楼1楼楼梯旁。 ※停车请使用周边收费停车场。", sponsorsLabel: "赞助企业" },
    footer: { blog: "博客", app: "官方APP", line: "LINE", instagram: "Instagram", terms: "使用条款", privacy: "隐私政策", tokusho: "特定商交易法表示", copyright: "私人教练健身房 Salute御所南", address: "京都市中京区毘沙門町533-1 Plaza御所南 2楼" },
    mobileCta: "预约体验课程 →",
    languageLabel: "语言",
  },

  zhTW: {
    meta: { title: "京都御所南私人教練健身房 | Salute", description: "Salute 是位於京都御所南的私人教練健身房。提供體驗課程（3,000日圓，當天入會則免費），也支援針對遊客的單次訓練，無需加入會員。距離丸太町站步行8分鐘。" },
    nav: { features: "特色", pilates: "皮拉提斯", trainer: "教練", voice: "顧客評價", plan: "價格方案", faq: "常見問題", access: "交通指南", consultation: "體驗課程", blog: "部落格" },
    header: { ctaBtn: "預約體驗課程" },
    hero: { kicker: "京都御所南的私人教練健身房 Salute｜體驗課程3,000日圓（當天入會免費）", title1: "一個人運動總是難以堅持？", titleAccent: "御所南的一對一私人教練健身房。", sub: "超越過去的自己，遇見更好的體態與狀態", desc: "擁有營養師資格的教練，依照您的步調耐心指導。每次4,750日圓起，無入會費，運動服・鞋・毛巾・水皆免費提供，輕鬆開始、輕鬆堅持。", cta1: "預約體驗課程", cta2: "查看健身房特色" },
    concern: { kicker: "Concern", title: "您是否有這些困擾？", items: ["辦了健身房卻很難堅持", "不知道該從哪裡開始", "極端節食讓人難以堅持", "在大型健身房在意他人的目光"], footer: "Salute御所南正是為了解決這些困擾而設立的私人教練健身房。" },
    features: { kicker: "Features", title: "選擇Salute的理由", items: [
      { title: "完全私密的訓練空間", description: "不會與其他會員碰面。在完全私密的空間裡，與教練進行一對一訓練，初學者也能安心練習。" },
      { title: "用數字看見自己的進步", description: "專用APP自動記錄每次訓練與身體變化，圖表與每月報告幫助您持續保持動力。" },
      { title: "飲食方面也能獲得專業建議", description: "教練同時具備營養師資格，不僅指導訓練，也協助您調整飲食。不會要求極端節食，建議貼近日常生活。" },
      { title: "容易堅持的價格", description: "每次4,750日圓起，入會費0日圓，運動服・鞋・毛巾・水全部免費。負擔較小、容易堅持的價格，讓您輕鬆開始並長期堅持。" },
    ], note: "所有方案皆為一對一指導，並依照每位顧客量身打造訓練內容。", cta: "預約體驗課程", wearRentalTag: "免費租借運動服與鞋子" },
    goals: { kicker: "Goal", title: "依照目的量身打造的訓練", sub: "減脂、體態雕塑、姿勢改善——我們會依照您的目的調整訓練內容。", items: [
      { title: "減脂", description: "不進行極端節食。具備營養師資格的教練從訓練與飲食兩方面提供支援，不只看體重，也追求外型上的變化。" },
      { title: "體態雕塑", description: "在增加肌肉的同時減少體脂肪，打造線條分明的身材。擁有健體比賽參賽經驗的教練，會依照您理想中的身材規劃訓練內容。" },
      { title: "姿勢改善", description: "先確認駝背、圓肩、骨盆前傾等姿勢習慣，再結合支撐良好姿勢的肌肉訓練與伸展，以端正的姿勢為目標。入會後也可以選擇器械皮拉提斯。" },
    ], note: "還沒有明確的目標也沒關係。在體驗課程的諮詢中，我們會與您一起訂定目標。" },
    pilates: { kicker: "Pilates", title: "也可以選擇\n器械皮拉提斯", lead: "私人訓練和私人器械皮拉提斯，\n兩種都可以選擇，\n不需額外費用。", points: [
      { title: "專注呼吸與核心", description: "在核心床（Reformer）上，配合呼吸緩慢地活動身體。有意識地運用身體深層的肌群，以鍛鍊核心、建立良好姿勢為目標。" },
      { title: "一對一，容易開始", description: "教練會調整彈簧的強度來改變負荷，並在過程中確認您的動作。身體較僵硬或很久沒運動的人，也能依照自己的步調練習。" },
      { title: "依目的選擇訓練或皮拉提斯", description: "想好好鍛鍊的日子就選私人訓練，想重新檢視身體使用方式的日子就選器械皮拉提斯。不需另外到其他工作室上課，每次課程都能選擇。" },
    ], imageAlt: "在Salute御所南工作室使用核心床進行器械皮拉提斯的女性", trialStart: "體驗課程11月25日（週三）開始，現已開放預約", trialNote: "也可以預約器械皮拉提斯體驗課程（60分鐘）。體驗費用3,000日圓，當天入會則免費。可預約的日期與時間請至預約頁面確認。", trialBtn: "預約器械皮拉提斯體驗" },
    numbers: { kicker: "Numbers", title: "從數字了解Salute", items: [
      { value: "¥0", label: "入會費" }, { value: "¥4,750~", label: "每次費用" }, { value: "5.0", label: "Google評價" }, { value: "140組+", label: "每月指導數" },
    ] },
    trainer: { kicker: "Trainer", title: "教練介紹", qualLabel: "資格", careerLabel: "經歷", messageLabel: "留言", greetingLabel: "教練寄語", members: [
      { name: "宗本 寛太", nameRoman: "Munemoto Kanta", role: "Salute御所南 主教練", qual: "營養師", career: "曾在四條烏丸的私人教練健身房擔任店長，每月指導140組以上顧客。2024年11月起擔任Salute御所南主教練。此外，他也擁有健體比賽的參賽經驗，親身經歷了從減脂到體態雕塑的完整過程，並將這份經驗運用於針對每位顧客（包含運動初學者）的客製化指導。", message: "「不擅長運動的朋友、第一次來健身房的朋友，都可以放心。我會全力支持您達成目標！」", greetingParagraphs: [
        "在長期指導顧客的過程中，我經常聽到兩個共同的困擾：「不知道哪種方法適合自己」、「無法長期堅持」。",
        "在Salute御所南，我們會結合每位顧客的生活方式，提供能夠長期堅持的訓練計畫，以及合理可行的飲食建議。",
        "讓我們一起邁出健康改變身體的第一步。",
      ] },
      { name: "米富 佳子", nameRoman: "Yonetomi Yoshiko", role: "器械皮拉提斯教練", qual: "PYLA認證講師（器械皮拉提斯）\n美國瑜伽聯盟認證 RYT200", career: "2023年起擔任瑜伽講師，於工作室、體育館及線上等場合授課，指導對象廣泛，從初學者到銀髮族皆有。2025年起也擔任器械皮拉提斯講師。此外，也具備私人課程的指導經驗。", message: "「不用追求完美也沒關係。讓我和大家站在同樣的立場，一起開心地活動身體吧！」", greetingParagraphs: [
        "我在指導器械皮拉提斯時，會以解剖學為基礎，重視「打好身體的根基」。即使是同樣的動作，只要注意力放在不同的地方，身體的反應就會大不相同。我會仔細說明「現在用到的是哪個部位」、「怎麼動負擔比較小」，努力讓不擅長運動的人，也能抓到「有練到目標部位」的感覺。",
        "其實我自己原本並不擅長運動。隨著年齡增長，感覺身體不如從前，於是開始練瑜伽；後來又加入器械皮拉提斯的練習，慢慢地，走路和跑步也成了一種享受。",
        "正因如此，我也想告訴那些覺得「已經不行了」、「現在才開始太晚了」的人：「能做到的事還有很多」。在尊重每個人步調的同時，如果能幫助大家認識自己的身體，我會很開心。",
      ] },
    ] },
    voice: { kicker: "Voice", title: "顧客的變化與評價", googleReviews: "Google評價 17則", changesTitle: "顧客的變化", voiceTitle: "顧客的評價", disclaimer: "※效果因人而異", dietLabel: "30多歲女性・減脂", bodymakeLabel: "40多歲男性・體態雕塑", dietResult: "體重 -4.8kg　體脂肪率 -3.2%", bodymakeResult: "體重 +1.5kg（肌肉增加）　體脂肪率 -4.1%", testimonials: [
      { label: "30多歲女性・上班族", comment: "教練能依照我的情況給出精準建議，這正是一對一訓練的優勢。價格與次數也都很合理，作為新手也很容易開始。" },
      { label: "40多歲男性・辦公室工作", comment: "已經訓練4個月左右。每次訓練內容都會有調整，每次都能感受到進步。" },
      { label: "30多歲女性・上班族", comment: "我是健身新手，但每次都很開心。運動服與鞋子都免費提供，可以空手前來非常方便。" },
    ], fromGoogle: "來自Google評價" },
    pricing: { kicker: "Plan", title: "價格方案", freeNote: "入會費・手續費 ¥0", sub: "請依照您的目標選擇方案。", popular: "推薦", perMonth: "(含稅)/月", dropInUnit: "(含稅)/次", dropInCta: "預約單次訓練", description: "可依照您的目標，從3個月度方案中選擇。入會費・手續費0日圓。所有方案皆為一對一指導，運動服・鞋・毛巾・水免費提供。", plans: [
      { name: "月4次方案", price: "¥22,000", perSession: "每次 ¥5,500", description: "適合維持健康與日常運動", features: ["每次50分鐘＋伸展10分鐘", "每月最多4次", "也可選擇器械皮拉提斯（50分鐘）", "空手前來即可"] },
      { name: "月6次方案", price: "¥30,000", perSession: "每次 ¥5,000", description: "適合每週訓練1次以上", features: ["每次50分鐘＋伸展10分鐘", "每月最多6次", "也可選擇器械皮拉提斯（50分鐘）", "空手前來即可"] },
      { name: "月8次方案", price: "¥38,000", perSession: "每次 ¥4,750", description: "適合減脂與體態雕塑", features: ["每次50分鐘＋伸展10分鐘", "每月最多8次", "也可選擇器械皮拉提斯（50分鐘）", "空手前來即可"] },
    ], dropIn: { name: "單次訓練（適合來京都旅行的遊客）", price: "¥8,000", perSession: "1次", description: "無需加入會員，全套裝備免費提供，適合來京都旅行的遊客。", features: ["50分鐘一對一訓練", "無需加入會員", "運動服・鞋免費提供", "可提供簡單英語溝通"] }, cta: "預約體驗課程" },
    flow: { kicker: "Flow", title: "體驗課程流程", steps: [
      { title: "線上預約", description: "請從預約表單選擇希望的日期與時間，約30秒即可完成。", imageAlt: "正在用手機預約體驗課程" },
      { title: "諮詢 + 訓練", description: "進行簡短諮詢後，體驗50分鐘的私人教練訓練。空手前來即可。", imageAlt: "教練一邊展示平板電腦一邊進行諮詢" },
    ], footer: "運動服・運動鞋・毛巾・飲用水皆免費提供。", bookText: "透過", bookLinkLabel: "預約表單" },
    cta: { kicker: "Consultation", title: "體驗課程", paragraphs: ["歡迎先來體驗一次。體驗費用3,000日圓，當天入會則免費。", "入會前的各種疑問都可以在體驗課程中得到解答。", "親身感受訓練內容與健身房的氛圍。"], bullets: ["擔心自己不擅長運動…", "想了解教練是什麼樣的人…"], webBtn: "線上預約體驗課程", lineBtn: "透過LINE預約", pilatesLink: "器械皮拉提斯體驗請點此預約" },
    faq: { kicker: "Q&A", title: "常見問題", items: [
      { question: "體驗課程會進行哪些內容？", answer: "進行簡短諮詢後，體驗50分鐘的真實私人訓練課程。運動服與鞋子免費提供，空手前來即可。" },
      { question: "體驗課程的費用是多少？", answer: "體驗課程費用為3,000日圓。若您於體驗當天辦理入會，體驗費用即為0日圓（免費）。若當天未入會，則需支付3,000日圓。" },
      { question: "可以選擇器械皮拉提斯嗎？", answer: "可以。入會後，月度方案的每次課程都可以選擇私人訓練或器械皮拉提斯。器械皮拉提斯同樣為每次50分鐘，不需額外費用。另外，也可以預約器械皮拉提斯體驗課程（60分鐘）。體驗費用3,000日圓，當天入會則免費。" },
      { question: "沒有運動經驗也可以嗎？", answer: "完全沒問題。我們大部分的顧客都是初學者，教練會依照您的體力與目標耐心指導。" },
      { question: "需要帶什麼東西嗎？", answer: "無需準備任何物品。運動服・鞋・毛巾・飲用水全部免費提供。" },
      { question: "遊客可以單次體驗嗎？", answer: "可以。單次訓練每次8,000日圓，無需加入會員，運動服與器材全部免費提供。可透過網站或Instagram私訊預約。" },
      { question: "可以用英語或中文溝通嗎？", answer: "教練可以使用簡單的英語進行訓練溝通，較複雜的內容會藉助翻譯工具，方便外國遊客使用。" },
      { question: "有最低合約期限嗎？", answer: "沒有合約期限限制，最少1個月即可開始。" },
      { question: "除了方案費用之外還有其他費用嗎？", answer: "方案費用之外沒有必須支付的費用。入會費・手續費0日圓，運動服・鞋・毛巾・飲用水全部免費。" },
      { question: "最近的車站是哪裡？", answer: "地鐵「丸太町」站步行8分鐘。京阪「神宮丸太町」站步行也是8分鐘。" },
      { question: "可以更改或取消預約嗎？", answer: "預約的更改與取消可隨時透過專用APP辦理。只要有空檔，當天也可以更改日期與時間（不消耗課程次數）。不收取取消費用，但當天取消將視為消耗1次課程。" },
    ] },
    access: { kicker: "Access", title: "交通指南", intro: "從地鐵丸太町站步行8分鐘。從4號出口出來後沿丸太町通往東直走，位於Plaza御所南2樓。京阪神宮丸太町站步行同樣8分鐘。", addressLabel: "地址", addressLines: ["〒604-0981", "京都市中京區毘沙門町533-1 Plaza御所南 2樓"], stationLabel: "最近車站", stations: ["京都市公車「裁判所前」步行3分鐘", "京都市營地鐵「丸太町」站 步行8分鐘", "京阪「神宮丸太町」站 步行8分鐘", "京都市營地鐵「京都市役所前」站 步行10分鐘"], hoursLabel: "營業時間", hoursText: "10:00〜22:00（完全預約制）", hoursSub: "不定期公休 / 營業時間外也可能接受預約", contactLabel: "聯絡方式", contactText: "請透過官方LINE或Instagram私訊洽詢。", note: "※騎腳踏車的顧客請停在大樓1樓樓梯旁。 ※停車請使用周邊收費停車場。", sponsorsLabel: "贊助企業" },
    footer: { blog: "部落格", app: "官方APP", line: "LINE", instagram: "Instagram", terms: "使用條款", privacy: "隱私權政策", tokusho: "特定商業交易法標示", copyright: "私人教練健身房 Salute御所南", address: "京都市中京區毘沙門町533-1 Plaza御所南 2樓" },
    mobileCta: "預約體驗課程 →",
    languageLabel: "語言",
  },

  ko: {
    meta: { title: "교토 고쇼미나미 퍼스널 트레이닝 짐 | Salute", description: "Salute는 교토 고쇼미나미에 위치한 퍼스널 트레이닝 짐입니다. 체험 세션(¥3,000, 당일 등록 시 무료)과 여행객을 위한 1회 이용 트레이닝을 제공합니다. 1회 이용 시 회원가입은 필요하지 않습니다. 마루타마치역에서 도보 8분." },
    nav: { features: "특징", pilates: "필라테스", trainer: "트레이너", voice: "고객 후기", plan: "요금제", faq: "자주 묻는 질문", access: "오시는 길", consultation: "체험 세션", blog: "블로그" },
    header: { ctaBtn: "체험 예약" },
    hero: { kicker: "교토 고쇼미나미의 퍼스널 트레이닝 짐 Salute｜체험 세션 ¥3,000 (당일 등록 시 무료)", title1: "혼자서는 운동을 꾸준히 이어가기 어려우셨나요?", titleAccent: "고쇼미나미의 1:1 퍼스널 트레이닝 짐.", sub: "과거의 나를 넘어, 인생 최고의 컨디션으로", desc: "영양사 자격을 가진 트레이너가 회원님의 페이스에 맞춰 꼼꼼하게 서포트합니다. 1회 ¥4,750부터, 입회비 없이 시작할 수 있고 운동복・신발・수건・물도 모두 무료로 제공합니다.", cta1: "체험 예약", cta2: "특징 자세히 보기" },
    concern: { kicker: "Concern", title: "이런 고민, 있으신가요?", items: ["헬스장은 다녔지만 꾸준히 다니지 못했다", "무엇부터 시작해야 할지 모르겠다", "심한 식단 조절은 너무 힘들어서 포기했다", "대형 헬스장은 남의 시선이 신경 쓰인다"], footer: "Salute 고쇼미나미는 이러한 고민을 해결하기 위해 만들어진 퍼스널 트레이닝 짐입니다." },
    features: { kicker: "Features", title: "Salute가 선택받는 이유", items: [
      { title: "오롯이 나만을 위한 공간에서 집중", description: "다른 회원과 마주치지 않는 완전 프라이빗 공간에서 트레이너와 1:1로 트레이닝합니다. 초보자도 부담 없이 시작할 수 있습니다." },
      { title: "숫자로 변화를 확인", description: "전용 앱이 트레이닝 기록과 신체 변화를 자동으로 기록합니다. 그래프와 월간 리포트로 성장을 실감하며 동기를 유지할 수 있습니다." },
      { title: "식사 관리도 함께 서포트", description: "영양사 자격을 가진 트레이너가 운동뿐 아니라 식사도 함께 코칭합니다. 극단적인 식단 대신 일상에서 실천 가능한 방법을 제안합니다." },
      { title: "꾸준히 다니기 좋은 가격", description: "1회 ¥4,750부터, 입회비 없음. 운동복・신발・수건・물 모두 무료. 시작하기도 쉽고, 꾸준히 다니기에도 부담이 적습니다." },
    ], note: "모든 플랜은 완전 1:1 지도이며, 회원님 한 분 한 분의 목표에 맞춘 맞춤형 트레이닝 메뉴를 제공합니다.", cta: "체험 예약", wearRentalTag: "운동복·신발 무료 대여" },
    goals: { kicker: "Goal", title: "목적에 맞춘 트레이닝", sub: "다이어트는 물론 바디 메이킹, 자세 교정까지. 목적에 맞춰 트레이닝 내용을 조정합니다.", items: [
      { title: "다이어트", description: "무리한 식단 제한은 하지 않습니다. 영양사 자격을 가진 트레이너가 운동과 식사 양면에서 도와드리며, 체중뿐 아니라 눈에 보이는 변화를 목표로 합니다." },
      { title: "바디 메이킹", description: "근육을 키우면서 체지방을 줄여 탄탄한 몸으로. 피지크 대회 출전 경험이 있는 트레이너가 원하는 몸에 맞춰 프로그램을 구성합니다." },
      { title: "자세 교정", description: "굽은 등, 라운드 숄더, 골반 전방 경사 등 자세 습관을 확인한 뒤, 자세를 받쳐 주는 근육 트레이닝과 스트레칭을 조합해 곧은 자세를 목표로 합니다. 입회 후에는 머신 필라테스도 선택하실 수 있습니다." },
    ], note: "아직 목표가 정해지지 않으셨어도 괜찮습니다. 체험 세션 상담에서 함께 목표를 정해 보세요." },
    pilates: { kicker: "Pilates", title: "머신 필라테스도 선택할 수 있습니다", lead: "퍼스널 트레이닝과 퍼스널 머신 필라테스, 둘 다 선택하실 수 있습니다. 추가 요금은 없습니다.", points: [
      { title: "호흡과 코어에 집중", description: "리포머라는 머신 위에서 호흡에 맞춰 천천히 움직입니다. 몸 깊은 곳의 근육(속근육)을 의식하면서, 코어를 다지고 자세를 만들어 가는 것을 목표로 합니다." },
      { title: "1:1이라 시작하기 좋은 필라테스", description: "트레이너가 스프링 강도를 바꿔 부하를 조절하고, 동작을 확인하면서 진행합니다. 몸이 뻣뻣하거나 오랜만에 운동하시는 분도 자신의 페이스대로 하실 수 있습니다." },
      { title: "트레이닝과 필라테스, 목적에 맞게", description: "제대로 단련하고 싶은 날은 트레이닝, 몸 쓰는 법을 다시 살펴보고 싶은 날은 머신 필라테스. 다른 스튜디오에 다닐 필요 없이, 세션마다 선택하실 수 있습니다." },
    ], imageAlt: "Salute 고쇼미나미 스튜디오에서 리포머로 머신 필라테스를 하는 여성", trialStart: "체험은 11월 25일(수) 시작, 지금 예약 가능", trialNote: "머신 필라테스 체험(60분)도 예약하실 수 있습니다. 체험 요금은 ¥3,000이며, 당일 등록 시 무료입니다. 예약 가능한 날짜와 시간은 예약 페이지에서 확인해 주세요.", trialBtn: "머신 필라테스 체험 예약" },
    numbers: { kicker: "Numbers", title: "숫자로 보는 Salute", items: [
      { value: "¥0", label: "입회비" }, { value: "¥4,750~", label: "1회 요금" }, { value: "5.0", label: "Google 평점" }, { value: "140+", label: "월간 지도 실적" },
    ] },
    trainer: { kicker: "Trainer", title: "트레이너 소개", qualLabel: "자격", careerLabel: "경력", messageLabel: "메시지", greetingLabel: "트레이너 인사말", members: [
      { name: "宗本 寛太", nameRoman: "Munemoto Kanta", role: "Salute 고쇼미나미 대표 트레이너", qual: "영양사", career: "시조 카라스마의 퍼스널 트레이닝 짐에서 점장으로 근무. 월 140팀 이상 지도 경험. 2024년 11월부터 Salute 고쇼미나미 트레이너로 부임. 또한 피지크 대회 출전 경험이 있어 감량부터 몸만들기까지의 과정을 직접 경험했으며, 그 경험을 운동이 처음이신 분 한 분 한 분에게 맞춘 지도에 활용하고 있다.", message: "「운동이 익숙하지 않으신 분, 헬스장이 처음이신 분도 안심하세요. 여러분의 목표를 향해 전력으로 서포트해 드리겠습니다!」", greetingParagraphs: [
        "오랫동안 많은 고객의 다이어트를 지도해 오면서, 공통된 두 가지 고민을 자주 들어 왔습니다. 「나에게 맞는 방법을 모르겠다」, 그리고 「운동을 꾸준히 이어가기 어렵다」는 것입니다.",
        "Salute 고쇼미나미에서는 회원님 한 분 한 분의 라이프스타일에 맞춰, 무리 없이 지속할 수 있는 트레이닝과 결과로 이어지는 식습관 개선을 함께 제안합니다.",
        "건강하고 멋진 몸을 만들기 위한 첫걸음을 함께 시작해 봅시다.",
      ] },
      { name: "米富 佳子", nameRoman: "Yonetomi Yoshiko", role: "머신 필라테스 담당 트레이너", qual: "PYLA 인증 강사(머신 필라테스)\n미국 요가 얼라이언스 인증 RYT200", career: "2023년부터 요가 강사로서 스튜디오, 체육관, 온라인 등에서 초보자부터 시니어까지 다양한 분들을 지도. 2025년부터는 머신 필라테스 강사로도 활동. 프라이빗 레슨 지도 경험도 있다.", message: "「완벽하게 하려고 하지 않으셔도 괜찮습니다. 여러분과 같은 눈높이에서 함께 즐겁게 몸을 움직여 봅시다!」", greetingParagraphs: [
        "머신 필라테스를 지도할 때는 해부학을 바탕으로 「몸의 토대를 다지는 것」을 중요하게 생각합니다. 같은 동작이라도 어디를 의식하느냐에 따라 몸의 반응은 크게 달라집니다. 「어디를 쓰고 있는지」, 「어떻게 움직이면 부담이 적은지」를 꼼꼼하게 알려 드리며, 운동에 자신이 없으신 분도 의도한 부위에 자극이 오는 감각을 익히실 수 있도록 신경 쓰고 있습니다.",
        "저 자신도 원래는 운동을 잘하는 편이 아니었습니다. 나이가 들면서 몸이 예전 같지 않다는 것을 느껴 요가를 시작했고, 머신 필라테스를 병행하다 보니 걷기와 달리기도 즐길 수 있게 되었습니다.",
        "그렇기에 「이제는 무리다」, 「이미 늦었다」라고 느끼고 계신 분께도 「아직 충분히 할 수 있다」는 것을 전해 드리고 싶습니다. 한 분 한 분의 페이스를 존중하면서, 자신의 몸을 알아 가시는 데 도움이 될 수 있다면 기쁘겠습니다.",
      ] },
    ] },
    voice: { kicker: "Voice", title: "고객의 변화와 후기", googleReviews: "Google 후기 17건", changesTitle: "고객의 변화", voiceTitle: "다니고 계신 고객의 후기", disclaimer: "※효과에는 개인차가 있습니다", dietLabel: "30대 여성・다이어트", bodymakeLabel: "40대 남성・바디 메이킹", dietResult: "체중 -4.8kg　체지방률 -3.2%", bodymakeResult: "체중 +1.5kg (근육 증가)　체지방률 -4.1%", testimonials: [
      { label: "30대 여성・회사원", comment: "저에게 맞춰 정확하게 지도해 주시는 점이 1:1 퍼스널 트레이닝의 장점이라고 느꼈습니다. 가격과 횟수도 부담이 적어 초보자도 시작하기 좋습니다." },
      { label: "40대 남성・사무직", comment: "다닌 지 4개월 정도 되었습니다. 매번 같은 운동만 하지 않고 조금씩 조정해 주셔서 매번 효과를 체감하고 있습니다." },
      { label: "30대 여성・회사원", comment: "근력 운동은 처음이지만 즐겁게 다니고 있어요. 운동복과 신발이 무료라 빈손으로 와도 되어 일정 사이에 들르기에도 편합니다." },
    ], fromGoogle: "Google 후기에서" },
    pricing: { kicker: "Plan", title: "요금 플랜", freeNote: "입회비・사무수수료 ¥0", sub: "목표에 맞춰 플랜을 선택해 주세요.", popular: "추천", perMonth: "(부가세 포함)/월", dropInUnit: "(부가세 포함)/회", dropInCta: "드롭인 예약하기", description: "목표에 맞춰 3가지 월간 플랜 중에서 선택하실 수 있습니다. 입회비・사무수수료 ¥0. 모든 플랜은 1:1 지도이며, 운동복・신발・수건・물이 무료로 제공됩니다.", plans: [
      { name: "월 4회 플랜", price: "¥22,000", perSession: "1회 ¥5,500", description: "건강 유지와 운동 부족 해소", features: ["1회 50분 + 스트레칭 10분", "월 최대 4회", "머신 필라테스(50분)도 선택 가능", "빈손으로 OK"] },
      { name: "월 6회 플랜", price: "¥30,000", perSession: "1회 ¥5,000", description: "주 1회 이상 트레이닝하고 싶은 분께", features: ["1회 50분 + 스트레칭 10분", "월 최대 6회", "머신 필라테스(50분)도 선택 가능", "빈손으로 OK"] },
      { name: "월 8회 플랜", price: "¥38,000", perSession: "1회 ¥4,750", description: "다이어트와 바디 메이킹에", features: ["1회 50분 + 스트레칭 10분", "월 최대 8회", "머신 필라테스(50분)도 선택 가능", "빈손으로 OK"] },
    ], dropIn: { name: "1회 이용 (교토 여행객용)", price: "¥8,000", perSession: "1회", description: "회원가입 없이 1회 이용 가능. 교토 여행 중에도 이용하기 좋습니다.", features: ["50분 1:1 트레이닝", "회원가입 불필요", "운동복・신발 무료 제공", "간단한 영어 응대 가능"] }, cta: "체험 예약" },
    flow: { kicker: "Flow", title: "체험 세션 안내", steps: [
      { title: "온라인 예약", description: "예약 폼에서 원하시는 날짜와 시간을 선택해 주세요. 약 30초면 예약이 완료됩니다.", imageAlt: "스마트폰으로 체험 세션을 예약하는 모습" },
      { title: "카운셀링 + 트레이닝", description: "간단한 상담 후, 50분간의 퍼스널 트레이닝을 체험하실 수 있습니다. 빈손으로 오시면 됩니다.", imageAlt: "트레이너가 태블릿을 보여 주며 상담하는 모습" },
    ], footer: "운동복・신발・수건・물은 무료로 준비되어 있습니다.", bookText: "", bookLinkLabel: "예약 폼" },
    cta: { kicker: "Consultation", title: "체험 세션 안내", paragraphs: ["먼저 가볍게 체험해 보세요. 체험 요금은 ¥3,000이며, 당일 등록 시 무료입니다.", "입회 전의 다양한 궁금증은 체험 세션에서 해소하실 수 있습니다.", "트레이닝 내용과 짐 분위기를 직접 느껴 보세요."], bullets: ["운동이 익숙하지 않아 걱정되시나요?", "트레이너가 어떤 사람인지 궁금하신가요?"], webBtn: "온라인으로 체험 예약", lineBtn: "LINE으로 예약", pilatesLink: "머신 필라테스 체험은 여기에서 예약하세요" },
    faq: { kicker: "Q&A", title: "자주 묻는 질문", items: [
      { question: "체험 세션에서는 무엇을 하나요?", answer: "간단한 상담 후 실제와 동일한 50분간의 퍼스널 트레이닝을 체험하실 수 있습니다. 운동복・신발・수건・물 모두 무료로 제공되므로 빈손으로 오시면 됩니다." },
      { question: "체험 세션 요금은 얼마인가요?", answer: "체험 세션 요금은 ¥3,000입니다. 체험 당일에 회원 등록을 하시면 체험료는 ¥0(무료)이 됩니다. 당일에 등록하지 않으실 경우에는 ¥3,000을 받고 있습니다." },
      { question: "머신 필라테스도 선택할 수 있나요?", answer: "네. 입회 후에는 월간 플랜의 매 회차마다 퍼스널 트레이닝과 머신 필라테스 중 하나를 선택하실 수 있습니다. 머신 필라테스도 1회 50분이며, 추가 요금은 없습니다. 머신 필라테스 체험(60분)도 예약하실 수 있습니다. 체험 요금은 ¥3,000이며, 당일 등록 시 무료입니다." },
      { question: "운동 경험이 없는데 괜찮나요?", answer: "물론입니다. 대부분의 고객이 처음 시작하시는 분들입니다. 체력과 목표에 맞춰 트레이너가 꼼꼼하게 지도합니다." },
      { question: "준비물이 필요한가요?", answer: "필요 없습니다. 운동복・신발・수건・물 모두 무료로 준비되어 있습니다." },
      { question: "여행 중에 1회만 이용할 수도 있나요?", answer: "네, 가능합니다. 1회 이용 요금은 ¥8,000이며 회원가입은 필요하지 않습니다. 운동복과 장비 모두 무료로 제공되며, 웹사이트 또는 Instagram DM으로 예약하실 수 있습니다." },
      { question: "영어로도 소통이 가능한가요?", answer: "트레이너는 기본적인 영어로 트레이닝을 진행할 수 있으며, 자세한 내용은 번역 도구를 활용해 안내해 드립니다. 외국인 관광객도 부담 없이 이용하실 수 있습니다." },
      { question: "최소 계약 기간이 있나요?", answer: "계약 기간 제약은 없으며, 1개월부터 시작하실 수 있습니다." },
      { question: "요금 외에 추가 비용이 있나요?", answer: "플랜 요금 외에 반드시 드는 비용은 없습니다. 입회비・사무수수료 ¥0, 운동복・신발・수건・물 모두 무료입니다." },
      { question: "가장 가까운 역은 어디인가요?", answer: "지하철 마루타마치역에서 도보 8분, 게이한 진구마루타마치역에서도 도보 8분입니다." },
      { question: "예약 변경이나 취소가 가능한가요?", answer: "예약 변경·취소는 전용 앱에서 언제든지 하실 수 있습니다. 빈 시간이 있으면 당일에도 일정 변경이 가능합니다(세션은 차감되지 않습니다). 취소 수수료는 없지만, 당일 취소는 세션 1회를 사용한 것으로 처리됩니다." },
    ] },
    access: { kicker: "Access", title: "오시는 길", intro: "지하철 마루타마치역에서 도보 8분. 4번 출구로 나와 마루타마치도리를 따라 동쪽으로 직진하시면, 플라자 고쇼미나미 2층에 위치해 있습니다. 게이한 진구마루타마치역에서도 도보 8분입니다.", addressLabel: "주소", addressLines: ["604-0981", "교토시 나카교구 비샤몬초 533-1 플라자 고쇼미나미 2층"], stationLabel: "가까운 역", stations: ["교토시버스 「사이반쇼마에」 도보 3분", "교토시영지하철 「마루타마치」 도보 8분", "게이한 「진구마루타마치」 도보 8분", "교토시영지하철 「교토시야쿠쇼마에」 도보 10분"], hoursLabel: "영업시간", hoursText: "10:00~22:00 (완전 예약제)", hoursSub: "부정기 휴무 / 영업시간 외에도 예약 가능한 경우가 있습니다", contactLabel: "문의", contactText: "공식 LINE 또는 Instagram DM으로 문의해 주세요.", note: "※자전거로 오시는 분은 건물 1층 계단 옆 공간에 세워주세요. ※주차장은 주변 코인 주차장을 이용해 주세요.", sponsorsLabel: "협찬 기업" },
    footer: { blog: "블로그", app: "공식 앱", line: "LINE", instagram: "Instagram", terms: "이용약관", privacy: "개인정보 처리방침", tokusho: "특정상거래법 표기", copyright: "퍼스널 트레이닝 짐 Salute 고쇼미나미", address: "교토시 나카교구 비샤몬초 533-1 플라자 고쇼미나미 2층" },
    mobileCta: "체험 예약 →",
    languageLabel: "언어",
  },
};

export const langBase = (lang: Lang): string => (lang === "ja" ? "" : `/${lang}`);
export const langHome = (lang: Lang): string => (lang === "ja" ? "/" : `/${lang}`);
export const langHash = (lang: Lang, hash: string): string => `${langBase(lang)}/${hash}`;
