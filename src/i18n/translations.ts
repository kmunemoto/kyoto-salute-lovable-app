export type Lang = "ja" | "en" | "zh" | "ko";

export const LANGS: { code: Lang; label: string }[] = [
  { code: "ja", label: "日本語" },
  { code: "en", label: "English" },
  { code: "zh", label: "中文" },
  { code: "ko", label: "한국어" },
];

type Dict = {
  meta: { title: string; description: string };
  nav: { features: string; trainer: string; voice: string; plan: string; faq: string; access: string; consultation: string; blog: string };
  header: { ctaBtn: string };
  hero: { kicker: string; title1: string; titleAccent: string; sub: string; desc: string; seoNote?: string; cta1: string; cta2: string };
  concern: { kicker: string; title: string; items: string[]; footer: string };
  features: { kicker: string; title: string; items: { title: string; description: string }[]; note: string; cta: string };
  numbers: { kicker: string; title: string; items: { value: string; label: string }[] };
  trainer: { kicker: string; title: string; name: string; nameRoman: string; role: string; qualLabel: string; qual: string; careerLabel: string; career: string; messageLabel: string; message: string; greetingLabel: string; greetingParagraphs: string[] };
  voice: { kicker: string; title: string; googleReviews: string; changesTitle: string; voiceTitle: string; disclaimer: string; dietLabel: string; bodymakeLabel: string; testimonials: { label: string; comment: string }[]; fromGoogle: string };
  pricing: { kicker: string; title: string; freeNote: string; sub: string; popular: string; perMonth: string; description: string; plans: { name: string; price: string; perSession: string; description: string; features: string[] }[]; dropIn: { name: string; price: string; perSession: string; description: string; features: string[] }; cta: string };
  flow: { kicker: string; title: string; steps: { title: string; description: string }[]; footer: string; bookText: string; bookLinkLabel: string };
  cta: { kicker: string; title: string; paragraphs: string[]; bullets: string[]; webBtn: string; lineBtn: string };
  faq: { kicker: string; title: string; items: { question: string; answer: string }[] };
  access: { kicker: string; title: string; intro: string; addressLabel: string; addressLines: string[]; stationLabel: string; stations: string[]; hoursLabel: string; hoursText: string; hoursSub: string; contactLabel: string; contactText: string; note: string; sponsorsLabel: string };
  footer: { blog: string; app: string; line: string; terms: string; privacy: string; tokusho: string; copyright: string; address: string; related: string };
  mobileCta: string;
  languageLabel: string;
};

export const translations: Record<Lang, Dict> = {
  ja: {
    meta: { title: "京都市中京区の安いパーソナルジムならSalute御所南｜無料体験実施中｜河原町丸太町", description: "京都市中京区・御所南のパーソナルジムSalute御所南。烏丸丸太町エリア、丸太町駅徒歩8分。無料体験実施中！1回¥4,000～・入会金¥0・手ぶらOK。栄養士トレーナーが完全マンツーマンで指導。" },
    nav: { features: "特徴", trainer: "トレーナー", voice: "お客様の声", plan: "料金プラン", faq: "よくあるご質問", access: "アクセス", consultation: "初回無料体験", blog: "ブログ" },
    header: { ctaBtn: "無料体験実施中" },
    hero: { kicker: "京都市中京区・御所南で安いパーソナルジム Salute御所南｜無料体験実施中", title1: "運動が続かなかったあなたへ。", titleAccent: "御所南の完全マンツーマンジム。", sub: "過去の自分を超える、史上最高のカラダで充実した人生を", desc: "栄養士資格を持つトレーナーが、あなたのペースに合わせて丁寧にサポート。¥4,000～の通いやすい価格で、入会金・レンタル費用もすべて無料です。", seoNote: "烏丸丸太町・御所南エリアで安いパーソナルジムをお探しの方へ。Salute御所南は丸太町駅から徒歩8分、1回¥4,000～・入会金¥0で通えるパーソナルジムです。無料体験トレーニングを実施中。", cta1: "まずは体験してみる", cta2: "Salute御所南の特徴を見る" },
    concern: { kicker: "Concern", title: "こんなお悩みありませんか？", items: ["ジムに通ったけど続かなかった", "何をすればいいかわからない", "食事制限がつらくて挫折した", "大手ジムは人目が気になる"], footer: "Salute御所南は、こうしたお悩みを解決するために生まれたパーソナルジムです。" },
    features: { kicker: "Features", title: "Salute御所南が選ばれる理由", items: [
      { title: "あなただけの空間で、集中できる", description: "他のお客様と顔を合わせることはありません。周りの目を気にせず、トレーナーと二人だけの空間でトレーニングに集中できます。" },
      { title: "体の変化が「見える」から、続けられる", description: "専用アプリでトレーニング記録や体の変化を自動で記録。数字やグラフで成長を実感できるから、モチベーションが続きます。" },
      { title: "食事の悩みも、一緒に解決できる", description: "栄養士資格を持つトレーナーが、トレーニングだけでなく食事面もサポート。極端な食事制限は行いません。" },
      { title: "続けられる価格だから、体が変わる", description: "1回¥4,000〜、入会金¥0。ウェア・シューズ・タオル・お水もすべて無料です。続けやすい料金設定です。" },
    ], note: "すべてのプランで、完全マンツーマンの指導と、お客様一人ひとりに合わせたオーダーメイドのトレーニングメニューをご提供しています。", cta: "まずは体験してみる" },
    numbers: { kicker: "Numbers", title: "数字で見るSalute御所南", items: [
      { value: "¥0", label: "入会金・事務手数料" }, { value: "¥4,000〜", label: "1回あたりの料金" }, { value: "5.0", label: "Google口コミ評価" }, { value: "140組+", label: "月間指導実績" },
    ] },
    trainer: { kicker: "Trainer", title: "トレーナー紹介", name: "宗本 寛太", nameRoman: "Munemoto Kanta", role: "Salute御所南 代表トレーナー", qualLabel: "保有資格", qual: "栄養士", careerLabel: "経歴", career: "四条烏丸のパーソナルジムにて店長として勤務。月140組以上の指導経験を積み、2024年11月より「パーソナルジムSalute御所南」のトレーナーに就任。", messageLabel: "メッセージ", message: "「運動が苦手な方、ジムが初めての方もご安心ください。皆様の目標に向けて全力でサポートさせていただきます！」", greetingLabel: "トレーナーからのご挨拶", greetingParagraphs: [
      "これまで多くのお客様のダイエット指導を通じて、共通する2つの悩みに向き合ってきました。それは、「自分に合ったダイエット法がわからない」、そして「運動が続かない」という問題です。",
      "自己流のダイエット法に挑戦し、一時的に体重を落とせても、無理な食事制限や誤った運動方法で代謝が低下し、停滞期に突入。結果としてリバウンドを繰り返し、以前よりも体重が増えてしまう…。これは多くの方が経験する悪循環です。さらに、体重は減ったものの見た目に大きな変化が現れないと感じる方も少なくありません。",
      "Salute御所南では、そうした悩みを根本から解決するために、お客様一人ひとりのライフスタイルに寄り添った持続可能なダイエットプランと結果につながる運動習慣のサポートを提供しています。",
      "健康的に、そして美しく変わるための第一歩を、一緒に踏み出しましょう。",
    ] },
    voice: { kicker: "Voice", title: "お客様の声", googleReviews: "Google口コミ 17件", changesTitle: "お客様の変化", voiceTitle: "通っているお客様の声", disclaimer: "※効果には個人差があります", dietLabel: "30代女性・ダイエット", bodymakeLabel: "40代男性・ボディメイク", testimonials: [
      { label: "30代女性・会社員", comment: "的確にトレーナーさんに指導していただけるところがパーソナルトレーニングならではの良いところで、続けやすい料金と回数設定なので初心者でも始めやすいです。" },
      { label: "40代男性・デスクワーク", comment: "通い始めて4か月ほどになります。毎回同じトレーニングではなく少しずつ変えて調整してもらえるので毎回効果を感じています。" },
      { label: "30代女性・会社員", comment: "筋トレ初心者ですが、楽しく通っています。ウェア・シューズ等無料レンタルなので手ぶらで通え、前後の予定があっても通いやすいです。" },
    ], fromGoogle: "Google口コミより" },
    pricing: { kicker: "Plan", title: "料金プラン", freeNote: "入会金・事務手数料 ¥0", sub: "4つのプランからお客様の目標に合わせてお選びいただけます。", popular: "おすすめ", perMonth: "（税込）/月", description: "お客様の目標やライフスタイルに合わせて、4つのプランからお選びいただけます。入会金・事務手数料は¥0。すべてのプランで完全マンツーマン指導・ウェア無料レンタル付きです。", plans: [
      { name: "月4回プラン", price: "¥20,000", perSession: "1回あたり ¥5,000", description: "健康維持や運動不足解消にオススメ", features: ["1セッション60分", "月4回まで利用可能", "完全手ぶらOK", "専用アプリ利用"] },
      { name: "月6回プラン", price: "¥28,500", perSession: "1回あたり ¥4,750", description: "週1回以上トレーニングしたい方にオススメ", features: ["1セッション60分", "月6回まで利用可能", "完全手ぶらOK", "専用アプリ利用"] },
      { name: "月8回プラン", price: "¥36,000", perSession: "1回あたり ¥4,500", description: "ダイエットやボディメイクにオススメ", features: ["1セッション60分", "月8回まで利用可能", "完全手ぶらOK", "専用アプリ利用", "食事アドバイス"] },
      { name: "月15回プラン", price: "¥60,000", perSession: "1回あたり ¥4,000", description: "本格的なダイエット・ボディメイクに", features: ["1セッション60分", "月15回まで利用可能", "完全手ぶらOK", "専用アプリ利用", "食事アドバイス"] },
    ], dropIn: { name: "単発プラン（ビジター・観光客向け）", price: "¥8,000", perSession: "1回", description: "会員登録不要・手ぶらOK", features: ["1セッション60分", "会員登録不要", "ウェア・シューズ無料レンタル", "手ぶらOK"] }, cta: "まずは体験してみる" },
    flow: { kicker: "Flow", title: "無料体験の流れ", steps: [
      { title: "WEBで予約", description: "からご希望の日時を選んで送信。最短30秒で予約完了です。" },
      { title: "カウンセリング＋トレーニング", description: "カウンセリングで目標やお悩みをヒアリングした後、パーソナルトレーニングを体験。カウンセリングからトレーニングまで合計60分です。手ぶらでOK。" },
    ], footer: "ウェア・シューズ・タオル・お水は無料でご用意しています。", bookText: "", bookLinkLabel: "予約フォーム" },
    cta: { kicker: "Consultation", title: "無料体験のご案内", paragraphs: ["無料体験で、まずはお試しください。", "ご入会前の様々な不安は、無料体験で解消できます。", "ジムの雰囲気やトレーニングの内容を、ぜひ一度ご体感ください。"], bullets: ["運動が苦手で不安…", "トレーナーはどんな人だろう…"], webBtn: "WEBから無料体験を予約", lineBtn: "LINEから予約" },
    faq: { kicker: "Q&A", title: "よくある質問", items: [
      { question: "無料体験ではどんなことをしますか？", answer: "カウンセリングで目標やお悩みをお聞きした後、実際の60分間のパーソナルトレーニングを体験していただきます。ウェアとシューズは無料レンタルがありますので、手ぶらでお越しください。" },
      { question: "運動経験がないのですが、大丈夫でしょうか？", answer: "もちろん大丈夫です！来店されるほとんどの方が初めての方ばかりです。一人一人の運動経験や体力・目的にあったトレーニングをトレーナーが丁寧に指導いたします。" },
      { question: "持ち物はありますか？", answer: "ウェアや靴に加えてお水もご用意しておりますので、手ぶらでお気軽にお越しいただけます。" },
      { question: "プランの有効期限はどうなっていますか？", answer: "プランの有効期間は、その月の1回目のトレーニング日から起算して1ヶ月間となります。" },
      { question: "最低契約期間はありますか？", answer: "契約期間に縛りはございません。最低1ヶ月から始められます。" },
      { question: "料金以外にかかる費用はありますか？", answer: "一切ありません。入会金・事務手数料は¥0、ウェア・シューズ・タオル・お水もすべて無料レンタルです。" },
      { question: "最寄り駅はどこですか？", answer: "地下鉄「丸太町」駅から徒歩8分です。京阪「神宮丸太町」駅からも徒歩8分でお越しいただけます。" },
    ] },
    access: { kicker: "Access", title: "アクセス", intro: "烏丸丸太町エリア、丸太町駅から徒歩8分。地下鉄「丸太町」駅の4番出口を出て北へ。丸太町通り沿いにあるプラザ御所南の2階です。京阪「神宮丸太町」駅からも徒歩8分でお越しいただけます。", addressLabel: "住所", addressLines: ["〒604-0981", "京都市中京区毘沙門町533-1 プラザ御所南 2階"], stationLabel: "最寄駅", stations: ["京都市バス「裁判所前」駅 徒歩3分", "京都市営地下鉄「丸太町」駅 徒歩8分", "京阪「神宮丸太町」駅 徒歩8分", "京都市営地下鉄「京都市役所前」駅 徒歩10分"], hoursLabel: "営業時間", hoursText: "10:00〜22:00（完全予約制）", hoursSub: "不定休 / 営業時間外もご予約を承れる場合がございます", contactLabel: "お問い合わせ", contactText: "ご質問やご相談は公式LINEまたはInstagramのDMよりお受けしております。", note: "※自転車でお越しの際は、ビル1階の階段横スペースにお停めください。 ※駐車場は周辺コインパーキングをご利用ください。", sponsorsLabel: "協賛企業" },
    footer: { blog: "ブログ", app: "公式アプリ", line: "LINE", terms: "利用規約", privacy: "プライバシーポリシー", tokusho: "特定商取引法に基づく表記", copyright: "パーソナルジム Salute御所南", address: "京都市中京区毘沙門町533-1 プラザ御所南 2階", related: "関連事業：" },
    mobileCta: "LINEで初回無料体験を予約 →",
    languageLabel: "言語",
  },

  en: {
    meta: { title: "Personal Training Gym in Kyoto Goshominami | Salute", description: "Salute is a personal training gym in Goshominami, Kyoto. Free trial sessions and drop-in personal training for travelers are available. No membership required for drop-in sessions. 8 min from Marutamachi Station." },
    nav: { features: "Features", trainer: "Trainer", voice: "Reviews", plan: "Pricing", faq: "FAQ", access: "Access", consultation: "Free Trial", blog: "Blog" },
    header: { ctaBtn: "Book a Free Trial" },
    hero: { kicker: "Personal Training Gym in Goshominami, Kyoto | Free Trial Session Available", title1: "Struggling to stay on track on your own?", titleAccent: "Your private 1-on-1 studio in Goshominami.", sub: "Build the strongest version of yourself, one session at a time", desc: "A certified nutritionist trainer guides you at your own pace. Approachable pricing from ¥4,000 per session, with no enrollment fee — sportswear, shoes, towels and water are all provided.", cta1: "Book a Free Trial", cta2: "See Our Features" },
    concern: { kicker: "Concern", title: "Sound familiar?", items: ["Couldn't stick with a gym routine", "Not sure where to start", "Gave up on strict diets", "Felt self-conscious at big gyms"], footer: "Salute Goshominami was created to help you solve these challenges." },
    features: { kicker: "Features", title: "Why Choose Salute", items: [
      { title: "A private space, just for you", description: "No other clients around. Train one-on-one with your trainer in a fully private studio — ideal for beginners who'd rather not work out in front of others." },
      { title: "See your progress clearly", description: "Our app automatically tracks your sessions and body changes. Clear graphs and monthly reports help you stay motivated." },
      { title: "Nutrition guidance included", description: "Your trainer is a certified nutritionist who supports both your workouts and your eating habits. No extreme diets — just practical advice that fits real life." },
      { title: "Easy to keep going", description: "From ¥4,000 per session. No enrollment fee. Sportswear, shoes, towels and water are all provided — so it's easy to start and easy to keep coming back." },
    ], note: "Every plan includes fully 1-on-1 coaching with a training program tailored to your goals.", cta: "Book a Free Trial" },
    numbers: { kicker: "Numbers", title: "Salute in Numbers", items: [
      { value: "¥0", label: "Enrollment Fee" }, { value: "¥4,000~", label: "Per Session" }, { value: "5.0", label: "Google Rating" }, { value: "140+", label: "Monthly Clients" },
    ] },
    trainer: { kicker: "Trainer", title: "Your Trainer", name: "Kanta Munemoto", nameRoman: "Munemoto Kanta", role: "Head Trainer, Salute Goshominami", qualLabel: "Qualifications", qual: "Certified Nutritionist", careerLabel: "Career", career: "Former manager at a personal gym in Shijo-Karasuma, Kyoto, training 140+ clients per month. Joined Salute Goshominami as head trainer in November 2024.", messageLabel: "Message", message: "\"Even if you've never exercised before or this is your first time at a gym, don't worry. I'll fully support you toward your goal!\"", greetingLabel: "A Word from Your Trainer", greetingParagraphs: [
      "Through years of supporting clients, I've heard two concerns repeatedly: \"I don't know what works for me\" and \"I can't keep it up.\"",
      "At Salute Goshominami, we solve these problems at the root — building training and eating habits that fit your lifestyle and that you can actually maintain.",
      "Let's take the first step together toward a healthier, stronger body.",
    ] },
    voice: { kicker: "Voice", title: "Client Results & Reviews", googleReviews: "17 Google Reviews", changesTitle: "Client Transformations", voiceTitle: "What Our Clients Say", disclaimer: "*Results vary by individual", dietLabel: "Female, 30s — Weight loss", bodymakeLabel: "Male, 40s — Body shaping", testimonials: [
      { label: "Female, 30s — Office Worker", comment: "The trainer gives precise, personal guidance — exactly what makes 1-on-1 training worth it. The pricing and session counts make it easy to start, even as a beginner." },
      { label: "Male, 40s — Desk Job", comment: "I've been training here for about 4 months. The sessions are always adjusted, so I keep feeling real progress every time." },
      { label: "Female, 30s — Office Worker", comment: "I'm new to strength training but really enjoying it. Sportswear and shoes are provided, so I can come straight from work without bringing anything." },
    ], fromGoogle: "From Google Reviews" },
    pricing: { kicker: "Plan", title: "Pricing Plans", freeNote: "Enrollment fee ¥0", sub: "Pick the plan that matches your goal.", popular: "Popular", perMonth: "(tax incl.) / month", description: "Choose from 4 monthly plans to match your goals. No enrollment fee. Every plan includes 1-on-1 training with free sportswear, shoes, towels and water.", plans: [
      { name: "4 Sessions / Month", price: "¥20,000", perSession: "¥5,000 / session", description: "For staying healthy and active", features: ["60-minute session", "Up to 4 sessions / month", "Just come as you are", "Training app included"] },
      { name: "6 Sessions / Month", price: "¥28,500", perSession: "¥4,750 / session", description: "For training once a week or more", features: ["60-minute session", "Up to 6 sessions / month", "Just come as you are", "Training app included"] },
      { name: "8 Sessions / Month", price: "¥36,000", perSession: "¥4,500 / session", description: "For weight loss and body shaping", features: ["60-minute session", "Up to 8 sessions / month", "Just come as you are", "Training app included", "Nutrition advice"] },
      { name: "15 Sessions / Month", price: "¥60,000", perSession: "¥4,000 / session", description: "For serious transformation goals", features: ["60-minute session", "Up to 15 sessions / month", "Just come as you are", "Training app included", "Nutrition advice"] },
    ], dropIn: { name: "Drop-in Personal Training (for travelers)", price: "¥8,000", perSession: "per session", description: "No membership required. All equipment provided. For travelers visiting Kyoto.", features: ["60-minute 1-on-1 session", "No membership required", "Training wear and shoes provided", "English-friendly support"] }, cta: "Book a Free Trial" },
    flow: { kicker: "Flow", title: "How It Works", steps: [
      { title: "Book Online", description: " Choose your preferred date and time — it takes about 30 seconds." },
      { title: "Consultation + Training", description: "After a short consultation, enjoy a 60-minute personal training session. Just come as you are." },
    ], footer: "Sportswear, shoes, towels and water are all provided free of charge.", bookText: "Use the ", bookLinkLabel: "booking form" },
    cta: { kicker: "Consultation", title: "Free Trial Session", paragraphs: ["Try a Free Trial Session before you commit.", "Any questions or concerns before signing up can be answered during the trial.", "Get a real feel for the training and the studio atmosphere."], bullets: ["Worried you're not fit enough?", "Curious what the trainer is like?"], webBtn: "Book a Free Trial", lineBtn: "Book via LINE" },
    faq: { kicker: "Q&A", title: "FAQ", items: [
      { question: "What happens during the Free Trial Session?", answer: "After a short consultation, you'll experience a real 60-minute personal training session. Sportswear, shoes, towels and water are all provided — just come as you are." },
      { question: "I have no exercise experience. Is that OK?", answer: "Absolutely. Most of our clients had never trained before. Your trainer will guide you carefully based on your fitness level and goals." },
      { question: "What should I bring?", answer: "Nothing. Sportswear, shoes, towels and water are all provided free of charge." },
      { question: "Do you offer drop-in personal training for travelers?", answer: "Yes — our drop-in plan is ¥8,000 per session. No membership required, all training wear and equipment provided. You can book directly via our website or Instagram DM." },
      { question: "Is English-friendly support available?", answer: "Yes. Your trainer can guide you through the workout in basic English, and we use translation tools for more detailed conversations." },
      { question: "Is there a minimum contract?", answer: "No. There's no minimum term — you can start with a single month." },
      { question: "Any extra costs?", answer: "None. The enrollment fee is ¥0, and sportswear, shoes, towels and water are all free." },
      { question: "Nearest station?", answer: "8 min on foot from Marutamachi Station (Karasuma Line). Also 8 min from Keihan Jingu-Marutamachi Station." },
    ] },
    access: { kicker: "Access", title: "Access", intro: "8 minutes on foot from Marutamachi Station. Take Exit 4 and walk east along Marutamachi-dori. We're on the 2nd floor of Plaza Goshominami. Also 8 minutes from Keihan Jingu-Marutamachi Station.", addressLabel: "Address", addressLines: ["604-0981", "Plaza Goshominami 2F, 533-1 Bishamoncho, Nakagyo-ku, Kyoto"], stationLabel: "Nearest Stations", stations: ["Kyoto City Bus 'Saibansho-mae' — 3 min walk", "Karasuma Subway Line 'Marutamachi' — 8 min walk", "Keihan 'Jingu-Marutamachi' — 8 min walk", "Karasuma Subway Line 'Kyoto Shiyakusho-mae' — 10 min walk"], hoursLabel: "Hours", hoursText: "10:00 – 22:00 (by reservation only)", hoursSub: "Open daily / sessions outside regular hours may also be available on request", contactLabel: "Contact", contactText: "Questions and inquiries are handled via our official LINE or Instagram DM.", note: "* Bicycle parking is available beside the stairs on the 1st floor of the building. * For cars, please use nearby coin parking.", sponsorsLabel: "Sponsors" },
    footer: { blog: "Blog", app: "Official App", line: "LINE", terms: "Terms", privacy: "Privacy Policy", tokusho: "Specified Commercial Transactions Act", copyright: "Personal Training Gym Salute Goshominami", address: "Plaza Goshominami 2F, 533-1 Bishamoncho, Nakagyo-ku, Kyoto", related: "Related: " },
    mobileCta: "Book a Free Trial →",
    languageLabel: "Language",
  },

  zh: {
    meta: { title: "京都实惠的私人健身房 | Salute御所南 | 免费体验中", description: "京都市中京区・御所南的私人健身房Salute御所南。免费体验实施中！每次4,000日元起・无入会费・免费提供运动服。营养师教练一对一指导。丸太町站步行8分钟。" },
    nav: { features: "特点", trainer: "教练", voice: "客户评价", plan: "价格方案", faq: "常见问题", access: "交通指南", consultation: "免费体验", blog: "博客" },
    header: { ctaBtn: "免费体验中" },
    hero: { kicker: "京都市中京区・御所南的实惠私人健身房 Salute御所南｜免费体验中", title1: "一个人运动却看不到效果？", titleAccent: "御所南的专属私人健身房。", sub: "超越过去的自己，以最好的身体过上充实的人生", desc: "持有营养师资格的教练，按照您的节奏细心指导。每次4,000日元起，入会费・租借费全部免费。", cta1: "免费体验", cta2: "查看特点" },
    concern: { kicker: "Concern", title: "您有这样的烦恼吗？", items: ["去健身房但坚持不下来", "不知道该做什么", "节食太辛苦放弃了", "在大型健身房在意别人的目光"], footer: "Salute御所南就是为了解决这些烦恼而诞生的私人健身房。" },
    features: { kicker: "Features", title: "选择Salute的理由", items: [
      { title: "专属于您的空间，专注训练", description: "不会与其他客人碰面。在完全私密的空间里，与教练两人专注训练。初学者也可以安心运动。" },
      { title: "用数字感受变化", description: "专用APP自动记录训练和身体变化。通过图表和每月报告实感成长。" },
      { title: "饮食烦恼也一并解决", description: "持有营养师资格的教练，不仅指导训练，还提供饮食建议。不进行极端的饮食限制。" },
      { title: "可持续的价格，身体才会改变", description: "每次4,000日元起，入会费0日元。运动服・运动鞋・毛巾・饮用水全部免费。" },
    ], note: "所有方案均为完全一对一指导，根据每位客人量身定制训练菜单。", cta: "免费体验" },
    numbers: { kicker: "Numbers", title: "数字了解Salute", items: [
      { value: "¥0", label: "入会费" }, { value: "¥4,000~", label: "每次费用" }, { value: "5.0", label: "Google评价" }, { value: "140组+", label: "月指导数" },
    ] },
    trainer: { kicker: "Trainer", title: "教练介绍", name: "宗本 寛太", nameRoman: "Munemoto Kanta", role: "Salute御所南 主教练", qualLabel: "资格", qual: "营养师", careerLabel: "经历", career: "曾在四条乌丸的私人健身房担任店长，月指导140组以上客户。2024年11月起担任Salute御所南主教练。", messageLabel: "留言", message: "「不擅长运动的人，第一次去健身房的人，请放心。我会全力支持您实现目标！」", greetingLabel: "教练寄语", greetingParagraphs: [
      "在长年支持客户体型管理的过程中，我反复听到两个烦恼：「不知道适合自己的方法」与「无法坚持下去」。",
      "在Salute御所南，我们根据每位客户的生活方式，提出可以坚持的训练和合理的饮食改善。",
      "让我们一起迈出健康改变身体的第一步。",
    ] },
    voice: { kicker: "Voice", title: "客户的变化与评价", googleReviews: "Google评价 17条", changesTitle: "客户的变化", voiceTitle: "客户的评价", disclaimer: "※效果因人而异", dietLabel: "30多岁女性・减肥", bodymakeLabel: "40多岁男性・塑形", testimonials: [
      { label: "30多岁女性・上班族", comment: "教练给予精准指导，是私教独有的优势。价格和次数设置合理，初学者也容易开始。" },
      { label: "40多岁男性・案头工作", comment: "已经训练4个月。教练会根据情况调整训练内容，每次都能感受到效果。" },
      { label: "30多岁女性・上班族", comment: "我是健身初学者，但很开心地坚持着。运动服和鞋子免费租借，可以空手前往。" },
    ], fromGoogle: "来自Google评价" },
    pricing: { kicker: "Plan", title: "价格方案", freeNote: "入会费・手续费 ¥0", sub: "请根据您的目标选择方案。", popular: "推荐", perMonth: "(含税)/月", description: "根据您的目标，从4个方案中选择。入会费・手续费0日元。所有方案均为一对一指导，免费租借运动服。", plans: [
      { name: "月4次方案", price: "¥20,000", perSession: "每次 ¥5,000", description: "适合维持健康和缓解运动不足", features: ["每次60分钟", "每月最多4次", "完全空手OK", "可使用专用APP"] },
      { name: "月6次方案", price: "¥28,500", perSession: "每次 ¥4,750", description: "适合每周训练1次以上", features: ["每次60分钟", "每月最多6次", "完全空手OK", "可使用专用APP"] },
      { name: "月8次方案", price: "¥36,000", perSession: "每次 ¥4,500", description: "适合减肥和塑形", features: ["每次60分钟", "每月最多8次", "完全空手OK", "可使用专用APP", "饮食建议"] },
      { name: "月15次方案", price: "¥60,000", perSession: "每次 ¥4,000", description: "适合正式减肥和塑形", features: ["每次60分钟", "每月最多15次", "完全空手OK", "可使用专用APP", "饮食建议"] },
    ], dropIn: { name: "单次方案（游客・访客）", price: "¥8,000", perSession: "每次", description: "无需注册会员，免费提供运动服。", features: ["每次60分钟", "无需注册会员", "运动服・鞋免费租借", "空手OK"] }, cta: "免费体验" },
    flow: { kicker: "Flow", title: "免费体验流程", steps: [
      { title: "在线预约", description: "从预约表单选择希望的日期和时间。最快30秒即可完成。" },
      { title: "咨询 + 训练", description: "简单咨询后，体验60分钟的私人训练。空手来即可。" },
    ], footer: "运动服・运动鞋・毛巾・饮用水均免费提供。", bookText: "通过", bookLinkLabel: "预约表单" },
    cta: { kicker: "Consultation", title: "免费体验", paragraphs: ["请先来体验一下。", "入会前的各种不安都可以在免费体验中消除。", "在入会前，亲身感受训练内容和健身房的氛围。"], bullets: ["不擅长运动有点不安…", "教练是什么样的人呢…"], webBtn: "在线预约免费体验", lineBtn: "通过LINE预约" },
    faq: { kicker: "Q&A", title: "常见问题", items: [
      { question: "免费体验做什么？", answer: "简单咨询后，体验60分钟的私人训练。运动服和鞋子免费提供，空手前往即可。" },
      { question: "没有运动经验也可以吗？", answer: "完全没问题。我们大部分客户都是初学者。教练会根据您的体力和目标耐心指导。" },
      { question: "需要带什么吗？", answer: "什么都不需要。运动服・鞋子・毛巾・饮用水全部免费提供。" },
      { question: "游客可以使用单次方案吗？", answer: "可以！单次方案每次8,000日元。无需注册会员。运动服和器材全部免费提供。请通过Instagram DM或网站预约。" },
      { question: "可以用中文交流吗？", answer: "教练可以用简单的英语交流，同时可以使用翻译工具进行详细沟通。" },
      { question: "有最低合约期限吗？", answer: "没有合约期限限制，最少1个月即可开始。" },
      { question: "除了套餐费用还有其他费用吗？", answer: "完全没有。入会费・手续费0日元，运动服・鞋・毛巾・饮用水全部免费。" },
      { question: "最近的车站是哪里？", answer: "地铁「丸太町」站步行8分钟。京阪「神宫丸太町」站步行也是8分钟。" },
    ] },
    access: { kicker: "Access", title: "交通指南", intro: "从丸太町站步行8分钟。4号出口出来后沿丸太町通向东直走。Plaza御所南2楼。京阪神宫丸太町站步行也是8分钟。", addressLabel: "地址", addressLines: ["〒604-0981", "京都市中京区毘沙門町533-1 Plaza御所南 2楼"], stationLabel: "最近车站", stations: ["京都市巴士「裁判所前」步行3分钟", "京都市营地铁「丸太町」站 步行8分钟", "京阪「神宫丸太町」站 步行8分钟", "京都市营地铁「京都市役所前」站 步行10分钟"], hoursLabel: "营业时间", hoursText: "10:00〜22:00（完全预约制）", hoursSub: "不定休 / 营业时间外也可能接受预约", contactLabel: "联系方式", contactText: "请通过官方LINE或Instagram DM咨询。", note: "※骑自行车的客人请停在大楼1楼楼梯旁。 ※停车请使用周边收费停车场。", sponsorsLabel: "赞助企业" },
    footer: { blog: "博客", app: "官方APP", line: "LINE", terms: "使用条款", privacy: "隐私政策", tokusho: "特定商交易法表示", copyright: "私人健身房 Salute御所南", address: "京都市中京区毘沙門町533-1 Plaza御所南 2楼", related: "相关业务：" },
    mobileCta: "预约免费体验 →",
    languageLabel: "语言",
  },

  ko: {
    meta: { title: "교토 가성비 퍼스널 트레이닝 | Salute 고쇼미나미 | 무료 체험 실시중", description: "교토시 나카교구・고쇼미나미의 퍼스널 트레이닝짐 Salute 고쇼미나미. 무료 체험 실시중! 1회 ¥4,000~・입회비 ¥0・운동복 무료 대여. 영양사 트레이너가 1:1 지도. 마루타마치역 도보 8분." },
    nav: { features: "특징", trainer: "트레이너", voice: "고객 후기", plan: "요금제", faq: "자주 묻는 질문", access: "오시는 길", consultation: "무료 체험", blog: "블로그" },
    header: { ctaBtn: "무료 체험 실시중" },
    hero: { kicker: "교토시 나카교구・고쇼미나미의 가성비 퍼스널 짐 Salute 고쇼미나미｜무료 체험 실시중", title1: "혼자서는 운동이 계속되지 않았던 당신에게.", titleAccent: "고쇼미나미의 완전 1:1 헬스장.", sub: "과거의 자신을 넘어, 인생 최고의 몸으로 충실한 삶을", desc: "영양사 자격을 가진 트레이너가 당신의 페이스에 맞춰 정성스럽게 서포트. ¥4,000~의 합리적인 가격, 입회비・렌탈비 모두 무료.", cta1: "무료 체험해보기", cta2: "특징 보기" },
    concern: { kicker: "Concern", title: "이런 고민 있으신가요?", items: ["헬스장에 다녔지만 계속하지 못했다", "무엇을 하면 좋을지 모르겠다", "식이제한이 힘들어서 포기했다", "대형 헬스장은 남의 시선이 신경 쓰인다"], footer: "Salute 고쇼미나미는 이러한 고민을 해결하기 위해 탄생한 퍼스널 짐입니다." },
    features: { kicker: "Features", title: "Salute가 선택받는 이유", items: [
      { title: "당신만의 공간에서 집중할 수 있다", description: "다른 고객과 마주칠 일이 없습니다. 트레이너와 둘만의 공간에서 트레이닝에 집중할 수 있습니다. 초보자도 안심하고 운동할 수 있습니다." },
      { title: "숫자로 변화를 실감", description: "전용 앱으로 트레이닝 기록과 몸의 변화를 자동 기록. 그래프와 월간 리포트로 성장을 실감할 수 있습니다." },
      { title: "식사 고민도 함께 해결", description: "영양사 자격을 가진 트레이너가 트레이닝뿐만 아니라 식사 면도 서포트. 극단적인 식이제한은 하지 않습니다." },
      { title: "계속할 수 있는 가격이니까, 몸이 변한다", description: "1회 ¥4,000~, 입회비 ¥0. 운동복・신발・타올・물 모두 무료." },
    ], note: "모든 플랜이 완전 1:1 지도이며, 고객 한 분 한 분에 맞춘 맞춤형 트레이닝 메뉴를 제공합니다.", cta: "무료 체험해보기" },
    numbers: { kicker: "Numbers", title: "숫자로 보는 Salute", items: [
      { value: "¥0", label: "입회비" }, { value: "¥4,000~", label: "1회 요금" }, { value: "5.0", label: "Google 평점" }, { value: "140+", label: "월간 지도 실적" },
    ] },
    trainer: { kicker: "Trainer", title: "트레이너 소개", name: "宗本 寛太", nameRoman: "Munemoto Kanta", role: "Salute 고쇼미나미 대표 트레이너", qualLabel: "자격", qual: "영양사", careerLabel: "경력", career: "시조카라스마의 퍼스널짐에서 점장 근무. 월 140팀 이상 지도 경험. 2024년 11월부터 Salute 고쇼미나미 트레이너 취임.", messageLabel: "메시지", message: "「운동을 잘 못하시는 분, 헬스장이 처음이신 분도 안심하세요. 여러분의 목표를 향해 전력으로 서포트하겠습니다!」", greetingLabel: "트레이너의 인사말", greetingParagraphs: [
      "오랜 시간 고객의 몸 만들기를 지원하며 반복해서 들었던 두 가지 고민이 있습니다. 「나에게 맞는 방법을 모르겠다」 그리고 「계속할 수 없다」는 말입니다.",
      "Salute 고쇼미나미는 고객 한 분 한 분의 생활 스타일에 맞춘 「계속할 수 있는 트레이닝」과 「무리 없는 식사 개선」을 제안합니다.",
      "건강하게, 그리고 확실하게 몸을 바꾸는 첫걸음을 함께 내딛읍시다.",
    ] },
    voice: { kicker: "Voice", title: "고객의 변화와 후기", googleReviews: "Google 후기 17건", changesTitle: "고객의 변화", voiceTitle: "다니고 있는 고객의 목소리", disclaimer: "※효과에는 개인차가 있습니다", dietLabel: "30대 여성・다이어트", bodymakeLabel: "40대 남성・바디메이크", testimonials: [
      { label: "30대 여성・회사원", comment: "트레이너의 정확한 지도가 퍼스널 트레이닝만의 장점입니다. 가격과 횟수 설정도 합리적이라 초보자도 시작하기 쉽습니다." },
      { label: "40대 남성・사무직", comment: "다닌 지 4개월 정도. 매번 트레이닝을 조금씩 바꿔주셔서 매번 효과를 느낍니다." },
      { label: "30대 여성・회사원", comment: "근력 운동 초보지만 즐겁게 다니고 있습니다. 운동복・신발 무료 대여라 빈손으로 다닐 수 있어 편합니다." },
    ], fromGoogle: "Google 후기에서" },
    pricing: { kicker: "Plan", title: "요금 플랜", freeNote: "입회비・사무수수료 ¥0", sub: "목표에 맞춰 플랜을 선택해 주세요.", popular: "추천", perMonth: "(부가세 포함)/월", description: "목표에 맞춰 4가지 플랜에서 선택. 입회비・사무수수료 ¥0. 모든 플랜 1:1 지도, 운동복 무료 대여 포함.", plans: [
      { name: "월 4회 플랜", price: "¥20,000", perSession: "1회 ¥5,000", description: "건강 유지와 운동 부족 해소", features: ["1회 60분", "월 최대 4회", "빈손 OK", "전용 앱"] },
      { name: "월 6회 플랜", price: "¥28,500", perSession: "1회 ¥4,750", description: "주 1회 이상 트레이닝을 원하는 분에게", features: ["1회 60분", "월 최대 6회", "빈손 OK", "전용 앱"] },
      { name: "월 8회 플랜", price: "¥36,000", perSession: "1회 ¥4,500", description: "다이어트와 바디메이크에", features: ["1회 60분", "월 최대 8회", "빈손 OK", "전용 앱", "식사 어드바이스"] },
      { name: "월 15회 플랜", price: "¥60,000", perSession: "1회 ¥4,000", description: "본격적인 다이어트・바디메이크에", features: ["1회 60분", "월 최대 15회", "빈손 OK", "전용 앱", "식사 어드바이스"] },
    ], dropIn: { name: "1회 플랜 (방문객・관광객용)", price: "¥8,000", perSession: "1회", description: "회원가입 불필요・빈손 OK", features: ["1회 60분", "회원가입 불필요", "운동복・신발 무료 대여", "빈손 OK"] }, cta: "무료 체험해보기" },
    flow: { kicker: "Flow", title: "무료 체험 흐름", steps: [
      { title: "온라인 예약", description: "예약 폼에서 원하는 날짜와 시간을 선택. 최소 30초만에 예약 완료." },
      { title: "카운셀링 + 트레이닝", description: "간단한 상담 후, 60분간의 퍼스널 트레이닝을 체험. 빈손으로 오시면 됩니다." },
    ], footer: "운동복・신발・타올・물은 무료로 준비되어 있습니다.", bookText: "", bookLinkLabel: "예약 폼" },
    cta: { kicker: "Consultation", title: "무료 체험 안내", paragraphs: ["먼저 체험해보세요.", "입회 전의 다양한 불안은 무료 체험으로 해소할 수 있습니다.", "트레이닝 내용과 짐 분위기를 직접 느껴보세요."], bullets: ["운동을 잘 못해서 불안…", "트레이너는 어떤 사람일까…"], webBtn: "온라인 예약", lineBtn: "LINE으로 예약" },
    faq: { kicker: "Q&A", title: "자주 묻는 질문", items: [
      { question: "무료 체험에서는 무엇을 하나요?", answer: "간단한 상담 후 실제 60분간의 퍼스널 트레이닝을 체험하실 수 있습니다. 운동복과 신발은 무료 대여, 빈손으로 오세요." },
      { question: "운동 경험이 없는데 괜찮나요?", answer: "물론 괜찮습니다! 대부분의 고객이 초보자입니다. 체력과 목표에 맞춰 트레이너가 정성껏 지도합니다." },
      { question: "준비물이 있나요?", answer: "없습니다. 운동복・신발・타올・물 모두 무료로 준비되어 있습니다." },
      { question: "관광객도 1회 이용이 가능한가요?", answer: "네! 1회 플랜은 ¥8,000입니다. 회원가입 불필요. 운동복과 장비 모두 무료 제공. Instagram DM 또는 웹사이트에서 예약해주세요." },
      { question: "영어나 한국어로 소통 가능한가요?", answer: "기본적인 영어로 트레이닝을 진행할 수 있으며, 자세한 소통은 번역 도구를 사용합니다." },
      { question: "최소 계약 기간이 있나요?", answer: "계약 기간 제약은 없습니다. 1개월부터 시작할 수 있습니다." },
      { question: "요금 외에 드는 비용이 있나요?", answer: "전혀 없습니다. 입회비・사무수수료 ¥0, 운동복・신발・타올・물 모두 무료." },
      { question: "가장 가까운 역은 어디인가요?", answer: "지하철 마루타마치역에서 도보 8분. 게이한 진구마루타마치역에서도 도보 8분." },
    ] },
    access: { kicker: "Access", title: "오시는 길", intro: "마루타마치역에서 도보 8분. 4번 출구에서 나와 마루타마치도리를 동쪽으로 직진. 플라자 고쇼미나미 2층. 게이한 진구마루타마치역에서도 도보 8분.", addressLabel: "주소", addressLines: ["604-0981", "교토시 나카교구 비샤몬초 533-1 플라자 고쇼미나미 2층"], stationLabel: "가까운 역", stations: ["교토시버스 「사이반쇼마에」 도보 3분", "교토시영지하철 「마루타마치」 도보 8분", "게이한 「진구마루타마치」 도보 8분", "교토시영지하철 「교토시야쿠쇼마에」 도보 10분"], hoursLabel: "영업시간", hoursText: "10:00~22:00 (완전 예약제)", hoursSub: "부정기 휴무 / 영업시간 외에도 예약 가능한 경우가 있습니다", contactLabel: "문의", contactText: "공식 LINE 또는 Instagram DM으로 문의해 주세요.", note: "※자전거로 오시는 분은 건물 1층 계단 옆 공간에 세워주세요. ※주차장은 주변 코인 주차장을 이용해 주세요.", sponsorsLabel: "협찬 기업" },
    footer: { blog: "블로그", app: "공식 앱", line: "LINE", terms: "이용약관", privacy: "개인정보 처리방침", tokusho: "특정상거래법 표기", copyright: "퍼스널 짐 Salute 고쇼미나미", address: "교토시 나카교구 비샤몬초 533-1 플라자 고쇼미나미 2층", related: "관련 사업: " },
    mobileCta: "무료 체험 예약 →",
    languageLabel: "언어",
  },
};

export const langBase = (lang: Lang): string => (lang === "ja" ? "" : `/${lang}`);
export const langHome = (lang: Lang): string => (lang === "ja" ? "/" : `/${lang}`);
export const langHash = (lang: Lang, hash: string): string => `${langBase(lang)}/${hash}`;
