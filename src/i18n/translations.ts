export type Lang = "ja" | "en" | "zh" | "zhTW" | "ko";

export const LANGS: { code: Lang; label: string }[] = [
  { code: "ja", label: "日本語" },
  { code: "en", label: "English" },
  { code: "zh", label: "简体中文" },
  { code: "zhTW", label: "繁體中文" },
  { code: "ko", label: "한국어" },
];

type Dict = {
  meta: { title: string; description: string };
  nav: { features: string; trainer: string; voice: string; plan: string; faq: string; access: string; consultation: string; blog: string };
  header: { ctaBtn: string };
  hero: { kicker: string; title1: string; titleAccent: string; sub: string; desc: string; seoNote?: string; cta1: string; cta2: string };
  concern: { kicker: string; title: string; items: string[]; footer: string };
  features: { kicker: string; title: string; items: { title: string; description: string }[]; note: string; cta: string; wearRentalTag?: string };
  numbers: { kicker: string; title: string; items: { value: string; label: string }[] };
  trainer: { kicker: string; title: string; name: string; nameRoman: string; role: string; qualLabel: string; qual: string; careerLabel: string; career: string; messageLabel: string; message: string; greetingLabel: string; greetingParagraphs: string[] };
  voice: { kicker: string; title: string; googleReviews: string; changesTitle: string; voiceTitle: string; disclaimer: string; dietLabel: string; bodymakeLabel: string; dietResult: string; bodymakeResult: string; testimonials: { label: string; comment: string }[]; fromGoogle: string };
  pricing: { kicker: string; title: string; freeNote: string; sub: string; popular: string; perMonth: string; dropInUnit: string; dropInCta: string; description: string; plans: { name: string; price: string; perSession: string; description: string; features: string[] }[]; dropIn: { name: string; price: string; perSession: string; description: string; features: string[] }; cta: string };
  flow: { kicker: string; title: string; steps: { title: string; description: string }[]; footer: string; bookText: string; bookLinkLabel: string };
  cta: { kicker: string; title: string; paragraphs: string[]; bullets: string[]; webBtn: string; lineBtn: string };
  faq: { kicker: string; title: string; items: { question: string; answer: string }[] };
  access: { kicker: string; title: string; intro: string; addressLabel: string; addressLines: string[]; stationLabel: string; stations: string[]; hoursLabel: string; hoursText: string; hoursSub: string; contactLabel: string; contactText: string; note: string; sponsorsLabel: string };
  footer: { blog: string; app: string; line: string; instagram: string; terms: string; privacy: string; tokusho: string; copyright: string; address: string };
  mobileCta: string;
  languageLabel: string;
};

export const translations: Record<Lang, Dict> = {
  ja: {
    meta: { title: "御所南のパーソナルジム Salute｜中京区・丸太町駅徒歩8分｜体験トレーニング受付中", description: "御所南・中京区の完全個室パーソナルジム Salute御所南。丸太町駅徒歩8分。栄養士トレーナーがマンツーマンで指導。1回¥4,000〜・入会金¥0。体験¥3,000（体験当日のご入会で¥0）。" },
    nav: { features: "特徴", trainer: "トレーナー", voice: "お客様の声", plan: "料金プラン", faq: "よくあるご質問", access: "アクセス", consultation: "体験トレーニング", blog: "ブログ" },
    header: { ctaBtn: "体験トレーニング受付中" },
    hero: { kicker: "京都市中京区・御所南で安いパーソナルジム Salute御所南｜体験トレーニング受付中", title1: "運動が続かなかったあなたへ。", titleAccent: "御所南の完全マンツーマンジム。", sub: "過去の自分を超える、史上最高のカラダで充実した人生を", desc: "栄養士資格を持つトレーナーが、あなたのペースに合わせて丁寧にサポート。¥4,000～の通いやすい価格で、入会金・レンタル費用もすべて無料です。", seoNote: "烏丸丸太町・御所南エリアで安いパーソナルジムをお探しの方へ。Salute御所南は丸太町駅から徒歩8分、1回¥4,000～・入会金¥0で通えるパーソナルジムです。体験トレーニングを実施中（体験料¥3,000・体験当日のご入会で¥0）。", cta1: "まずは体験してみる", cta2: "Salute御所南の特徴を見る" },
    concern: { kicker: "Concern", title: "こんなお悩みありませんか？", items: ["ジムに通ったけど続かなかった", "何をすればいいかわからない", "食事制限がつらくて挫折した", "大手ジムは人目が気になる"], footer: "Salute御所南は、こうしたお悩みを解決するために生まれたパーソナルジムです。" },
    features: { kicker: "Features", title: "Salute御所南が選ばれる理由", items: [
      { title: "あなただけの空間で、集中できる", description: "他のお客様と顔を合わせることはありません。周りの目を気にせず、トレーナーと二人だけの空間でトレーニングに集中できます。" },
      { title: "体の変化が「見える」から、続けられる", description: "専用アプリでトレーニング記録や体の変化を自動で記録。数字やグラフで成長を実感できるから、モチベーションが続きます。" },
      { title: "食事の悩みも、一緒に解決できる", description: "栄養士資格を持つトレーナーが、トレーニングだけでなく食事面もサポート。極端な食事制限は行いません。" },
      { title: "続けられる価格だから、体が変わる", description: "1回¥4,000〜、入会金¥0。ウェア・シューズ・タオル・お水もすべて無料です。続けやすい料金設定です。" },
    ], note: "すべてのプランで、完全マンツーマンの指導と、お客様一人ひとりに合わせたオーダーメイドのトレーニングメニューをご提供しています。", cta: "まずは体験してみる", wearRentalTag: "ウェア・シューズ無料レンタル" },
    numbers: { kicker: "Numbers", title: "数字で見るSalute御所南", items: [
      { value: "¥0", label: "入会金・事務手数料" }, { value: "¥4,000〜", label: "1回あたりの料金" }, { value: "5.0", label: "Google口コミ評価" }, { value: "140組+", label: "月間指導実績" },
    ] },
    trainer: { kicker: "Trainer", title: "トレーナー紹介", name: "宗本 寛太", nameRoman: "Munemoto Kanta", role: "Salute御所南 代表トレーナー", qualLabel: "保有資格", qual: "栄養士", careerLabel: "経歴", career: "四条烏丸のパーソナルジムにて店長として勤務。月140組以上の指導経験を積み、2024年11月より「パーソナルジムSalute御所南」のトレーナーに就任。また、フィジーク大会への出場経験を持ち、減量から体づくりまでのプロセスを自身の体で経験。その実体験を、運動が初めての方一人ひとりに合わせた指導に活かしている。", messageLabel: "メッセージ", message: "「運動が苦手な方、ジムが初めての方もご安心ください。皆様の目標に向けて全力でサポートさせていただきます！」", greetingLabel: "トレーナーからのご挨拶", greetingParagraphs: [
      "これまで多くのお客様のダイエット指導を通じて、共通する2つの悩みに向き合ってきました。それは、「自分に合ったダイエット法がわからない」、そして「運動が続かない」という問題です。",
      "自己流のダイエット法に挑戦し、一時的に体重を落とせても、無理な食事制限や誤った運動方法で代謝が低下し、停滞期に突入。結果としてリバウンドを繰り返し、以前よりも体重が増えてしまう…。これは多くの方が経験する悪循環です。さらに、体重は減ったものの見た目に大きな変化が現れないと感じる方も少なくありません。",
      "Salute御所南では、そうした悩みを根本から解決するために、お客様一人ひとりのライフスタイルに寄り添った持続可能なダイエットプランと結果につながる運動習慣のサポートを提供しています。",
      "健康的に、そして美しく変わるための第一歩を、一緒に踏み出しましょう。",
    ] },
    voice: { kicker: "Voice", title: "お客様の声", googleReviews: "Google口コミ 17件", changesTitle: "お客様の変化", voiceTitle: "通っているお客様の声", disclaimer: "※効果には個人差があります", dietLabel: "30代女性・ダイエット", bodymakeLabel: "40代男性・ボディメイク", dietResult: "体重 -4.8kg　体脂肪率 -3.2%", bodymakeResult: "体重 +1.5kg（筋肉増加）　体脂肪率 -4.1%", testimonials: [
      { label: "30代女性・会社員", comment: "的確にトレーナーさんに指導していただけるところがパーソナルトレーニングならではの良いところで、続けやすい料金と回数設定なので初心者でも始めやすいです。" },
      { label: "40代男性・デスクワーク", comment: "通い始めて4か月ほどになります。毎回同じトレーニングではなく少しずつ変えて調整してもらえるので毎回効果を感じています。" },
      { label: "30代女性・会社員", comment: "筋トレ初心者ですが、楽しく通っています。ウェア・シューズ等無料レンタルなので手ぶらで通え、前後の予定があっても通いやすいです。" },
    ], fromGoogle: "Google口コミより" },
    pricing: { kicker: "Plan", title: "料金プラン", freeNote: "入会金・事務手数料 ¥0", sub: "4つのプランからお客様の目標に合わせてお選びいただけます。", popular: "おすすめ", perMonth: "（税込）/月", dropInUnit: "（税込）/回", dropInCta: "都度払いで予約する", description: "お客様の目標やライフスタイルに合わせて、4つのプランからお選びいただけます。入会金・事務手数料は¥0。すべてのプランで完全マンツーマン指導・ウェア無料レンタル付きです。", plans: [
      { name: "月4回プラン", price: "¥20,000", perSession: "1回あたり ¥5,000", description: "健康維持や運動不足解消にオススメ", features: ["1セッション60分", "月4回まで利用可能", "完全手ぶらOK", "専用アプリ利用"] },
      { name: "月6回プラン", price: "¥28,500", perSession: "1回あたり ¥4,750", description: "週1回以上トレーニングしたい方にオススメ", features: ["1セッション60分", "月6回まで利用可能", "完全手ぶらOK", "専用アプリ利用"] },
      { name: "月8回プラン", price: "¥36,000", perSession: "1回あたり ¥4,500", description: "ダイエットやボディメイクにオススメ", features: ["1セッション60分", "月8回まで利用可能", "完全手ぶらOK", "専用アプリ利用", "食事アドバイス"] },
      { name: "月15回プラン", price: "¥60,000", perSession: "1回あたり ¥4,000", description: "本格的なダイエット・ボディメイクに", features: ["1セッション60分", "月15回まで利用可能", "完全手ぶらOK", "専用アプリ利用", "食事アドバイス"] },
    ], dropIn: { name: "単発プラン（ビジター・観光客向け）", price: "¥8,000", perSession: "1回", description: "会員登録不要・手ぶらOK", features: ["1セッション60分", "会員登録不要", "ウェア・シューズ無料レンタル", "手ぶらOK"] }, cta: "まずは体験してみる" },
    flow: { kicker: "Flow", title: "体験トレーニングの流れ", steps: [
      { title: "WEBで予約", description: "からご希望の日時を選んで送信。最短30秒で予約完了です。" },
      { title: "カウンセリング＋トレーニング", description: "カウンセリングで目標やお悩みをヒアリングした後、パーソナルトレーニングを体験。カウンセリングからトレーニングまで合計60分です。手ぶらでOK。" },
    ], footer: "ウェア・シューズ・タオル・お水は無料でご用意しています。", bookText: "", bookLinkLabel: "予約フォーム" },
    cta: { kicker: "Consultation", title: "体験トレーニングのご案内", paragraphs: ["まずは体験トレーニングでお試しください。体験料は¥3,000、体験当日のご入会で¥0です。", "ご入会前の様々な不安は、体験トレーニングで解消できます。", "ジムの雰囲気やトレーニングの内容を、ぜひ一度ご体感ください。"], bullets: ["運動が苦手で不安…", "トレーナーはどんな人だろう…"], webBtn: "WEBから体験を予約", lineBtn: "LINEから予約" },
    faq: { kicker: "Q&A", title: "よくある質問", items: [
      { question: "体験トレーニングではどんなことをしますか？", answer: "カウンセリングで目標やお悩みをお聞きした後、実際の60分間のパーソナルトレーニングを体験していただきます。ウェアとシューズは無料レンタルがありますので、手ぶらでお越しください。" },
      { question: "体験トレーニングの料金はいくらですか？", answer: "体験トレーニングの料金は¥3,000です。体験当日にご入会いただいた場合は、体験料は¥0（無料）となります。体験当日にご入会されない場合は、¥3,000を頂戴します。" },
      { question: "運動経験がないのですが、大丈夫でしょうか？", answer: "もちろん大丈夫です！来店されるほとんどの方が初めての方ばかりです。一人一人の運動経験や体力・目的にあったトレーニングをトレーナーが丁寧に指導いたします。" },
      { question: "持ち物はありますか？", answer: "ウェアや靴に加えてお水もご用意しておりますので、手ぶらでお気軽にお越しいただけます。" },
      { question: "プランの有効期限はどうなっていますか？", answer: "プランの有効期間は、その月の1回目のトレーニング日から起算して1ヶ月間となります。" },
      { question: "最低契約期間はありますか？", answer: "契約期間に縛りはございません。最低1ヶ月から始められます。" },
      { question: "料金以外にかかる費用はありますか？", answer: "一切ありません。入会金・事務手数料は¥0、ウェア・シューズ・タオル・お水もすべて無料レンタルです。" },
      { question: "最寄り駅はどこですか？", answer: "地下鉄「丸太町」駅から徒歩8分です。京阪「神宮丸太町」駅からも徒歩8分でお越しいただけます。" },
      { question: "予約のキャンセルや変更はできますか？", answer: "予約の変更・キャンセルは、専用アプリからいつでもお手続きいただけます。前日までにご変更・キャンセルいただければ、キャンセル料やセッションの消費は発生しません。ただし、当日のキャンセル（およびご連絡のない無断キャンセル）の場合は、1回分（1セッション）を消費した扱いとなりますので、あらかじめご了承ください。" },
    ] },
    access: { kicker: "Access", title: "アクセス", intro: "烏丸丸太町エリア、丸太町駅から徒歩8分。地下鉄「丸太町」駅の4番出口を出て東へ。丸太町通り沿いにあるプラザ御所南の2階です。京阪「神宮丸太町」駅からも徒歩8分でお越しいただけます。", addressLabel: "住所", addressLines: ["〒604-0981", "京都市中京区毘沙門町533-1 プラザ御所南 2階"], stationLabel: "最寄駅", stations: ["京都市バス「裁判所前」バス停 徒歩3分", "京都市営地下鉄「丸太町」駅 徒歩8分", "京阪「神宮丸太町」駅 徒歩8分", "京都市営地下鉄「京都市役所前」駅 徒歩10分"], hoursLabel: "営業時間", hoursText: "10:00〜22:00（完全予約制）", hoursSub: "不定休 / 営業時間外もご予約を承れる場合がございます", contactLabel: "お問い合わせ", contactText: "ご質問やご相談は公式LINEまたはInstagramのDMよりお受けしております。", note: "※自転車でお越しの際は、ビル1階の階段横スペースにお停めください。 ※駐車場は周辺コインパーキングをご利用ください。", sponsorsLabel: "協賛企業" },
    footer: { blog: "ブログ", app: "公式アプリ", line: "LINE", instagram: "Instagram", terms: "利用規約", privacy: "プライバシーポリシー", tokusho: "特定商取引法に基づく表記", copyright: "パーソナルジム Salute御所南", address: "京都市中京区毘沙門町533-1 プラザ御所南 2階" },
    mobileCta: "LINEで体験を予約 →",
    languageLabel: "言語",
  },

  en: {
    meta: { title: "Personal Training Gym in Kyoto Goshominami | Salute", description: "Salute is a personal training gym in Goshominami, Kyoto. Trial sessions (¥3,000, waived if you join on the day) and drop-in personal training for travelers are available. No membership required for drop-in sessions. 8 min from Marutamachi Station." },
    nav: { features: "Features", trainer: "Trainer", voice: "Reviews", plan: "Pricing", faq: "FAQ", access: "Access", consultation: "Trial Session", blog: "Blog" },
    header: { ctaBtn: "Book a Trial Session" },
    hero: { kicker: "Personal Training Gym in Goshominami, Kyoto | Trial Session ¥3,000 — Waived If You Join That Day", title1: "Struggling to stay on track on your own?", titleAccent: "Your private 1-on-1 studio in Goshominami.", sub: "Build the strongest version of yourself, one session at a time", desc: "A certified nutritionist trainer guides you at your own pace. Approachable pricing from ¥4,000 per session, with no enrollment fee — sportswear, shoes, towels and water are all provided.", cta1: "Book a Trial Session", cta2: "See Our Features" },
    concern: { kicker: "Concern", title: "Sound familiar?", items: ["Couldn't stick with a gym routine", "Not sure where to start", "Gave up on strict diets", "Felt self-conscious at big gyms"], footer: "Salute Goshominami was created to help you solve these challenges." },
    features: { kicker: "Features", title: "Why Choose Salute", items: [
      { title: "A private space, just for you", description: "No other clients around. Train one-on-one with your trainer in a fully private studio — ideal for beginners who'd rather not work out in front of others." },
      { title: "See your progress clearly", description: "Our app automatically tracks your sessions and body changes. Clear graphs and monthly reports help you stay motivated." },
      { title: "Nutrition guidance included", description: "Your trainer is a certified nutritionist who supports both your workouts and your eating habits. No extreme diets — just practical advice that fits real life." },
      { title: "Easy to keep going", description: "From ¥4,000 per session. No enrollment fee. Sportswear, shoes, towels and water are all provided — so it's easy to start and easy to keep coming back." },
    ], note: "Every plan includes fully 1-on-1 coaching with a training program tailored to your goals.", cta: "Book a Trial Session", wearRentalTag: "Free wear & shoe rental" },
    numbers: { kicker: "Numbers", title: "Salute in Numbers", items: [
      { value: "¥0", label: "Enrollment Fee" }, { value: "¥4,000~", label: "Per Session" }, { value: "5.0", label: "Google Rating" }, { value: "140+", label: "Monthly Clients" },
    ] },
    trainer: { kicker: "Trainer", title: "Your Trainer", name: "Kanta Munemoto", nameRoman: "Munemoto Kanta", role: "Head Trainer, Salute Goshominami", qualLabel: "Qualifications", qual: "Certified Nutritionist", careerLabel: "Career", career: "Former manager at a personal gym in Shijo-Karasuma, Kyoto, training 140+ clients per month. Joined Salute Goshominami as head trainer in November 2024. He has also competed in a physique competition, experiencing the full body-making process firsthand — from cutting to conditioning — and brings that experience to personalized guidance for every client, including those new to exercise.", messageLabel: "Message", message: "\"Even if you've never exercised before or this is your first time at a gym, don't worry. I'll fully support you toward your goal!\"", greetingLabel: "A Word from Your Trainer", greetingParagraphs: [
      "Through years of supporting clients, I've heard two concerns repeatedly: \"I don't know what works for me\" and \"I can't keep it up.\"",
      "At Salute Goshominami, we solve these problems at the root — building training and eating habits that fit your lifestyle and that you can actually maintain.",
      "Let's take the first step together toward a healthier, stronger body.",
    ] },
    voice: { kicker: "Voice", title: "Client Results & Reviews", googleReviews: "17 Google Reviews", changesTitle: "Client Transformations", voiceTitle: "What Our Clients Say", disclaimer: "*Results vary by individual", dietLabel: "Female, 30s — Weight loss", bodymakeLabel: "Male, 40s — Body shaping", dietResult: "Weight -4.8kg　Body Fat -3.2%", bodymakeResult: "Weight +1.5kg (muscle gain)　Body Fat -4.1%", testimonials: [
      { label: "Female, 30s — Office Worker", comment: "The trainer gives precise, personal guidance — exactly what makes 1-on-1 training worth it. The pricing and session counts make it easy to start, even as a beginner." },
      { label: "Male, 40s — Desk Job", comment: "I've been training here for about 4 months. The sessions are always adjusted, so I keep feeling real progress every time." },
      { label: "Female, 30s — Office Worker", comment: "I'm new to strength training but really enjoying it. Sportswear and shoes are provided, so I can come straight from work without bringing anything." },
    ], fromGoogle: "From Google Reviews" },
    pricing: { kicker: "Plan", title: "Pricing Plans", freeNote: "Enrollment fee ¥0", sub: "Pick the plan that matches your goal.", popular: "Popular", perMonth: "(tax incl.) / month", dropInUnit: "(tax incl.) / session", dropInCta: "Book a Drop-in", description: "Choose from 4 monthly plans to match your goals. No enrollment fee. Every plan includes 1-on-1 training with free sportswear, shoes, towels and water.", plans: [
      { name: "4 Sessions / Month", price: "¥20,000", perSession: "¥5,000 / session", description: "For staying healthy and active", features: ["60-minute session", "Up to 4 sessions / month", "Just come as you are", "Training app included"] },
      { name: "6 Sessions / Month", price: "¥28,500", perSession: "¥4,750 / session", description: "For training once a week or more", features: ["60-minute session", "Up to 6 sessions / month", "Just come as you are", "Training app included"] },
      { name: "8 Sessions / Month", price: "¥36,000", perSession: "¥4,500 / session", description: "For weight loss and body shaping", features: ["60-minute session", "Up to 8 sessions / month", "Just come as you are", "Training app included", "Nutrition advice"] },
      { name: "15 Sessions / Month", price: "¥60,000", perSession: "¥4,000 / session", description: "For serious transformation goals", features: ["60-minute session", "Up to 15 sessions / month", "Just come as you are", "Training app included", "Nutrition advice"] },
    ], dropIn: { name: "Drop-in Personal Training (for travelers)", price: "¥8,000", perSession: "per session", description: "No membership required. All equipment provided. For travelers visiting Kyoto.", features: ["60-minute 1-on-1 session", "No membership required", "Training wear and shoes provided", "English-friendly support"] }, cta: "Book a Trial Session" },
    flow: { kicker: "Flow", title: "How It Works", steps: [
      { title: "Book Online", description: " Choose your preferred date and time — it takes about 30 seconds." },
      { title: "Consultation + Training", description: "After a short consultation, enjoy a 60-minute personal training session. Just come as you are." },
    ], footer: "Sportswear, shoes, towels and water are all provided free of charge.", bookText: "Use the ", bookLinkLabel: "booking form" },
    cta: { kicker: "Consultation", title: "Trial Session", paragraphs: ["Try a trial session before you commit — ¥3,000, waived if you join on the day.", "Any questions or concerns before signing up can be answered during the trial.", "Get a real feel for the training and the studio atmosphere."], bullets: ["Worried you're not fit enough?", "Curious what the trainer is like?"], webBtn: "Book a Trial Session", lineBtn: "Book via LINE" },
    faq: { kicker: "Q&A", title: "FAQ", items: [
      { question: "What happens during the trial session?", answer: "After a short consultation, you'll experience a real 60-minute personal training session. Sportswear, shoes, towels and water are all provided — just come as you are." },
      { question: "How much is the trial session?", answer: "The trial session is ¥3,000. If you sign up for a membership on the day of your trial, the fee is waived (¥0). If you decide not to join on the day, the ¥3,000 fee applies." },
      { question: "I have no exercise experience. Is that OK?", answer: "Absolutely. Most of our clients had never trained before. Your trainer will guide you carefully based on your fitness level and goals." },
      { question: "What should I bring?", answer: "Nothing. Sportswear, shoes, towels and water are all provided free of charge." },
      { question: "Do you offer drop-in personal training for travelers?", answer: "Yes — our drop-in plan is ¥8,000 per session. No membership required, all training wear and equipment provided. You can book directly via our website or Instagram DM." },
      { question: "Is English-friendly support available?", answer: "Yes. Your trainer can guide you through the workout in basic English, and we use translation tools for more detailed conversations." },
      { question: "Is there a minimum contract?", answer: "No. There's no minimum term — you can start with a single month." },
      { question: "Any extra costs?", answer: "None. The enrollment fee is ¥0, and sportswear, shoes, towels and water are all free." },
      { question: "Nearest station?", answer: "8 min on foot from Marutamachi Station (Karasuma Line). Also 8 min from Keihan Jingu-Marutamachi Station." },
      { question: "Can I change or cancel a reservation?", answer: "You can change or cancel your reservation anytime through our app. If you do so by the day before, there is no charge and no session is used. However, same-day cancellations (and no-shows) count as using one session, so please book with that in mind." },
    ] },
    access: { kicker: "Access", title: "Access", intro: "8 minutes on foot from Marutamachi Station. Take Exit 4 and walk east along Marutamachi-dori. We're on the 2nd floor of Plaza Goshominami. Also 8 minutes from Keihan Jingu-Marutamachi Station.", addressLabel: "Address", addressLines: ["604-0981", "Plaza Goshominami 2F, 533-1 Bishamoncho, Nakagyo-ku, Kyoto"], stationLabel: "Nearest Stations", stations: ["Kyoto City Bus 'Saibansho-mae' — 3 min walk", "Karasuma Subway Line 'Marutamachi' — 8 min walk", "Keihan 'Jingu-Marutamachi' — 8 min walk", "Karasuma Subway Line 'Kyoto Shiyakusho-mae' — 10 min walk"], hoursLabel: "Hours", hoursText: "10:00 – 22:00 (by reservation only)", hoursSub: "Irregular holidays / sessions outside regular hours may also be available on request", contactLabel: "Contact", contactText: "Questions and inquiries are handled via our official LINE or Instagram DM.", note: "* Bicycle parking is available beside the stairs on the 1st floor of the building. * For cars, please use nearby coin parking.", sponsorsLabel: "Sponsors" },
    footer: { blog: "Blog", app: "Official App", line: "LINE", instagram: "Instagram", terms: "Terms", privacy: "Privacy Policy", tokusho: "Specified Commercial Transactions Act", copyright: "Personal Training Gym Salute Goshominami", address: "Plaza Goshominami 2F, 533-1 Bishamoncho, Nakagyo-ku, Kyoto" },
    mobileCta: "Book a Trial Session →",
    languageLabel: "Language",
  },

  zh: {
    meta: { title: "京都御所南私人教练健身房 | Salute", description: "Salute 是位于京都御所南的私人教练健身房。提供体验课程（3,000日元，当天入会则免费），也支持面向游客的单次训练，无需会员注册。距离丸太町站步行8分钟。" },
    nav: { features: "特点", trainer: "教练", voice: "客户评价", plan: "价格方案", faq: "常见问题", access: "交通指南", consultation: "体验课程", blog: "博客" },
    header: { ctaBtn: "预约体验课程" },
    hero: { kicker: "京都御所南的私人教练健身房 Salute｜体验课程3,000日元（当天入会免费）", title1: "一个人运动总是难以坚持？", titleAccent: "御所南的一对一私人教练健身房。", sub: "超越过去的自己，遇见更好的体态与状态", desc: "拥有营养师资格的教练，按照您的节奏耐心指导。每次4,000日元起，无入会费，运动服・鞋・毛巾・水均免费提供，轻松开始、轻松坚持。", cta1: "预约体验课程", cta2: "查看健身房特色" },
    concern: { kicker: "Concern", title: "您是否有这些困扰？", items: ["办了健身房却很难坚持", "不知道从哪里开始", "极端节食让人难以坚持", "在大型健身房在意别人的目光"], footer: "Salute御所南正是为了解决这些困扰而设的私人教练健身房。" },
    features: { kicker: "Features", title: "选择Salute的理由", items: [
      { title: "完全私密的训练空间", description: "不会与其他会员碰面。在完全私密的空间里，与教练进行一对一训练，初学者也能安心练习。" },
      { title: "用数字看见自己的进步", description: "专用APP自动记录每次训练与身体变化，图表与月度报告帮助您持续保持动力。" },
      { title: "饮食方面也获得专业建议", description: "教练同时具备营养师资格，不仅指导训练，也协助您调整饮食。不会要求极端节食，建议贴近日常生活。" },
      { title: "容易坚持的价格", description: "每次4,000日元起，入会费0日元，运动服・鞋・毛巾・水全部免费。负担较小、容易坚持的价格，让您轻松开始并长期坚持。" },
    ], note: "所有方案均为一对一指导，并根据每位客人量身定制训练内容。", cta: "预约体验课程", wearRentalTag: "免费租借运动服和鞋子" },
    numbers: { kicker: "Numbers", title: "数字了解Salute", items: [
      { value: "¥0", label: "入会费" }, { value: "¥4,000~", label: "每次费用" }, { value: "5.0", label: "Google评价" }, { value: "140组+", label: "月指导数" },
    ] },
    trainer: { kicker: "Trainer", title: "教练介绍", name: "宗本 寛太", nameRoman: "Munemoto Kanta", role: "Salute御所南 主教练", qualLabel: "资格", qual: "营养师", careerLabel: "经历", career: "曾在四条乌丸的私人教练健身房担任店长，月指导140组以上客户。2024年11月起担任Salute御所南主教练。此外，他还拥有健体比赛的参赛经验，亲身经历了从减脂到塑形的完整过程，并将这份经验运用于针对每位客户（包括运动初学者）的个性化指导。", messageLabel: "留言", message: "「不擅长运动的朋友、第一次来健身房的朋友，都可以放心。我会全力支持您达成目标！」", greetingLabel: "教练寄语", greetingParagraphs: [
      "在长期指导客户的过程中，我经常听到两个共同的困扰：「不知道哪种方法适合自己」、「无法长期坚持」。",
      "在Salute御所南，我们会结合每位客户的生活方式，提供能够长期坚持的训练计划，以及合理可行的饮食建议。",
      "让我们一起迈出健康改变身体的第一步。",
    ] },
    voice: { kicker: "Voice", title: "客户的变化与评价", googleReviews: "Google评价 17条", changesTitle: "客户的变化", voiceTitle: "客户的评价", disclaimer: "※效果因人而异", dietLabel: "30多岁女性・减脂", bodymakeLabel: "40多岁男性・塑形", dietResult: "体重 -4.8kg　体脂肪率 -3.2%", bodymakeResult: "体重 +1.5kg（肌肉增加）　体脂肪率 -4.1%", testimonials: [
      { label: "30多岁女性・上班族", comment: "教练能根据我的情况给出精准建议，这正是一对一训练的优势。价格和次数也都很合理，作为新手也很容易开始。" },
      { label: "40多岁男性・办公室工作", comment: "已经训练4个月左右。每次训练内容都会有调整，每次都能感受到进步。" },
      { label: "30多岁女性・上班族", comment: "我是健身新手，但每次都很开心。运动服和鞋子都免费提供，可以空手前来非常方便。" },
    ], fromGoogle: "来自Google评价" },
    pricing: { kicker: "Plan", title: "价格方案", freeNote: "入会费・手续费 ¥0", sub: "请根据您的目标选择方案。", popular: "推荐", perMonth: "(含税)/月", dropInUnit: "(含税)/次", dropInCta: "预约单次训练", description: "可根据您的目标，从4个月度方案中选择。入会费・手续费0日元。所有方案均为一对一指导，运动服・鞋・毛巾・水免费提供。", plans: [
      { name: "月4次方案", price: "¥20,000", perSession: "每次 ¥5,000", description: "适合维持健康与日常运动", features: ["每次60分钟", "每月最多4次", "空手前来即可", "专用APP可用"] },
      { name: "月6次方案", price: "¥28,500", perSession: "每次 ¥4,750", description: "适合每周训练1次以上", features: ["每次60分钟", "每月最多6次", "空手前来即可", "专用APP可用"] },
      { name: "月8次方案", price: "¥36,000", perSession: "每次 ¥4,500", description: "适合减脂与塑形", features: ["每次60分钟", "每月最多8次", "空手前来即可", "专用APP可用", "饮食建议"] },
      { name: "月15次方案", price: "¥60,000", perSession: "每次 ¥4,000", description: "适合系统性减脂与塑形", features: ["每次60分钟", "每月最多15次", "空手前来即可", "专用APP可用", "饮食建议"] },
    ], dropIn: { name: "单次训练（适合来京都旅行的游客）", price: "¥8,000", perSession: "1次", description: "无需会员注册，全套装备免费提供，适合来京都旅行的游客。", features: ["60分钟一对一训练", "无需会员注册", "运动服・鞋免费提供", "可支持简单英语沟通"] }, cta: "预约体验课程" },
    flow: { kicker: "Flow", title: "体验课程流程", steps: [
      { title: "在线预约", description: "请从预约表单选择希望的日期与时间，约30秒即可完成。" },
      { title: "咨询 + 训练", description: "进行简短咨询后，体验60分钟的私人教练训练。空手前来即可。" },
    ], footer: "运动服・运动鞋・毛巾・饮用水均免费提供。", bookText: "通过", bookLinkLabel: "预约表单" },
    cta: { kicker: "Consultation", title: "体验课程", paragraphs: ["欢迎先来体验一次。体验费用3,000日元，当天入会则免费。", "入会前的各种疑问都可以在体验课程中得到解答。", "亲身感受训练内容与健身房的氛围。"], bullets: ["担心自己不擅长运动…", "想了解教练是什么样的…"], webBtn: "在线预约体验课程", lineBtn: "通过LINE预约" },
    faq: { kicker: "Q&A", title: "常见问题", items: [
      { question: "体验课程都做些什么？", answer: "进行简短咨询后，体验60分钟的真实私人训练课程。运动服与鞋子免费提供，空手前来即可。" },
      { question: "体验课程的费用是多少？", answer: "体验课程费用为3,000日元。若您在体验当天办理入会，体验费用即为0日元（免费）。若当天未入会，则需支付3,000日元。" },
      { question: "没有运动经验也可以吗？", answer: "完全没问题。我们的大部分客户都是初学者，教练会根据您的体力与目标耐心指导。" },
      { question: "需要带什么吗？", answer: "无需准备任何物品。运动服・鞋・毛巾・饮用水全部免费提供。" },
      { question: "游客可以单次体验吗？", answer: "可以。单次训练每次8,000日元，无需会员注册，运动服与器材全部免费提供。可通过网站或Instagram DM预约。" },
      { question: "可以用英语或中文沟通吗？", answer: "教练可以使用简单的英语进行训练沟通，复杂内容会借助翻译工具，方便外国游客使用。" },
      { question: "有最低合约期限吗？", answer: "没有合约期限限制，最少1个月即可开始。" },
      { question: "除了套餐费用还有其他费用吗？", answer: "完全没有。入会费・手续费0日元，运动服・鞋・毛巾・饮用水全部免费。" },
      { question: "最近的车站是哪里？", answer: "地铁「丸太町」站步行8分钟。京阪「神宫丸太町」站步行也是8分钟。" },
      { question: "可以更改或取消预约吗？", answer: "预约的更改与取消可随时通过专用APP办理。如在前一天之前办理，不会产生费用或消耗次数。但当日取消（及无故爽约）将视为消耗1次（1节课），敬请谅解。" },
    ] },
    access: { kicker: "Access", title: "交通指南", intro: "从地铁丸太町站步行8分钟。4号出口出来后沿丸太町通向东直走，位于Plaza御所南2楼。京阪神宫丸太町站步行同样8分钟。", addressLabel: "地址", addressLines: ["〒604-0981", "京都市中京区毘沙門町533-1 Plaza御所南 2楼"], stationLabel: "最近车站", stations: ["京都市巴士「裁判所前」步行3分钟", "京都市营地铁「丸太町」站 步行8分钟", "京阪「神宫丸太町」站 步行8分钟", "京都市营地铁「京都市役所前」站 步行10分钟"], hoursLabel: "营业时间", hoursText: "10:00〜22:00（完全预约制）", hoursSub: "不定休 / 营业时间外也可能接受预约", contactLabel: "联系方式", contactText: "请通过官方LINE或Instagram DM咨询。", note: "※骑自行车的客人请停在大楼1楼楼梯旁。 ※停车请使用周边收费停车场。", sponsorsLabel: "赞助企业" },
    footer: { blog: "博客", app: "官方APP", line: "LINE", instagram: "Instagram", terms: "使用条款", privacy: "隐私政策", tokusho: "特定商交易法表示", copyright: "私人教练健身房 Salute御所南", address: "京都市中京区毘沙門町533-1 Plaza御所南 2楼" },
    mobileCta: "预约体验课程 →",
    languageLabel: "语言",
  },

  zhTW: {
    meta: { title: "京都御所南私人教練健身房 | Salute", description: "Salute 是位於京都御所南的私人教練健身房。提供體驗課程（3,000日圓，當天入會則免費），也支援針對遊客的單次訓練，無需加入會員。距離丸太町站步行8分鐘。" },
    nav: { features: "特色", trainer: "教練", voice: "顧客評價", plan: "價格方案", faq: "常見問題", access: "交通指南", consultation: "體驗課程", blog: "部落格" },
    header: { ctaBtn: "預約體驗課程" },
    hero: { kicker: "京都御所南的私人教練健身房 Salute｜體驗課程3,000日圓（當天入會免費）", title1: "一個人運動總是難以堅持？", titleAccent: "御所南的一對一私人教練健身房。", sub: "超越過去的自己，遇見更好的體態與狀態", desc: "擁有營養師資格的教練，依照您的步調耐心指導。每次4,000日圓起，無入會費，運動服・鞋・毛巾・水皆免費提供，輕鬆開始、輕鬆堅持。", cta1: "預約體驗課程", cta2: "查看健身房特色" },
    concern: { kicker: "Concern", title: "您是否有這些困擾？", items: ["辦了健身房卻很難堅持", "不知道該從哪裡開始", "極端節食讓人難以堅持", "在大型健身房在意他人的目光"], footer: "Salute御所南正是為了解決這些困擾而設立的私人教練健身房。" },
    features: { kicker: "Features", title: "選擇Salute的理由", items: [
      { title: "完全私密的訓練空間", description: "不會與其他會員碰面。在完全私密的空間裡，與教練進行一對一訓練，初學者也能安心練習。" },
      { title: "用數字看見自己的進步", description: "專用APP自動記錄每次訓練與身體變化，圖表與每月報告幫助您持續保持動力。" },
      { title: "飲食方面也能獲得專業建議", description: "教練同時具備營養師資格，不僅指導訓練，也協助您調整飲食。不會要求極端節食，建議貼近日常生活。" },
      { title: "容易堅持的價格", description: "每次4,000日圓起，入會費0日圓，運動服・鞋・毛巾・水全部免費。負擔較小、容易堅持的價格，讓您輕鬆開始並長期堅持。" },
    ], note: "所有方案皆為一對一指導，並依照每位顧客量身打造訓練內容。", cta: "預約體驗課程", wearRentalTag: "免費租借運動服與鞋子" },
    numbers: { kicker: "Numbers", title: "從數字了解Salute", items: [
      { value: "¥0", label: "入會費" }, { value: "¥4,000~", label: "每次費用" }, { value: "5.0", label: "Google評價" }, { value: "140組+", label: "每月指導數" },
    ] },
    trainer: { kicker: "Trainer", title: "教練介紹", name: "宗本 寛太", nameRoman: "Munemoto Kanta", role: "Salute御所南 主教練", qualLabel: "資格", qual: "營養師", careerLabel: "經歷", career: "曾在四條烏丸的私人教練健身房擔任店長，每月指導140組以上顧客。2024年11月起擔任Salute御所南主教練。此外，他也擁有健體比賽的參賽經驗，親身經歷了從減脂到體態雕塑的完整過程，並將這份經驗運用於針對每位顧客（包含運動初學者）的客製化指導。", messageLabel: "留言", message: "「不擅長運動的朋友、第一次來健身房的朋友，都可以放心。我會全力支持您達成目標！」", greetingLabel: "教練寄語", greetingParagraphs: [
      "在長期指導顧客的過程中，我經常聽到兩個共同的困擾：「不知道哪種方法適合自己」、「無法長期堅持」。",
      "在Salute御所南，我們會結合每位顧客的生活方式，提供能夠長期堅持的訓練計畫，以及合理可行的飲食建議。",
      "讓我們一起邁出健康改變身體的第一步。",
    ] },
    voice: { kicker: "Voice", title: "顧客的變化與評價", googleReviews: "Google評價 17則", changesTitle: "顧客的變化", voiceTitle: "顧客的評價", disclaimer: "※效果因人而異", dietLabel: "30多歲女性・減脂", bodymakeLabel: "40多歲男性・體態雕塑", dietResult: "體重 -4.8kg　體脂肪率 -3.2%", bodymakeResult: "體重 +1.5kg（肌肉增加）　體脂肪率 -4.1%", testimonials: [
      { label: "30多歲女性・上班族", comment: "教練能依照我的情況給出精準建議，這正是一對一訓練的優勢。價格與次數也都很合理，作為新手也很容易開始。" },
      { label: "40多歲男性・辦公室工作", comment: "已經訓練4個月左右。每次訓練內容都會有調整，每次都能感受到進步。" },
      { label: "30多歲女性・上班族", comment: "我是健身新手，但每次都很開心。運動服與鞋子都免費提供，可以空手前來非常方便。" },
    ], fromGoogle: "來自Google評價" },
    pricing: { kicker: "Plan", title: "價格方案", freeNote: "入會費・手續費 ¥0", sub: "請依照您的目標選擇方案。", popular: "推薦", perMonth: "(含稅)/月", dropInUnit: "(含稅)/次", dropInCta: "預約單次訓練", description: "可依照您的目標，從4個月度方案中選擇。入會費・手續費0日圓。所有方案皆為一對一指導，運動服・鞋・毛巾・水免費提供。", plans: [
      { name: "月4次方案", price: "¥20,000", perSession: "每次 ¥5,000", description: "適合維持健康與日常運動", features: ["每次60分鐘", "每月最多4次", "空手前來即可", "可使用專用APP"] },
      { name: "月6次方案", price: "¥28,500", perSession: "每次 ¥4,750", description: "適合每週訓練1次以上", features: ["每次60分鐘", "每月最多6次", "空手前來即可", "可使用專用APP"] },
      { name: "月8次方案", price: "¥36,000", perSession: "每次 ¥4,500", description: "適合減脂與體態雕塑", features: ["每次60分鐘", "每月最多8次", "空手前來即可", "可使用專用APP", "飲食建議"] },
      { name: "月15次方案", price: "¥60,000", perSession: "每次 ¥4,000", description: "適合系統性減脂與體態雕塑", features: ["每次60分鐘", "每月最多15次", "空手前來即可", "可使用專用APP", "飲食建議"] },
    ], dropIn: { name: "單次訓練（適合來京都旅行的遊客）", price: "¥8,000", perSession: "1次", description: "無需加入會員，全套裝備免費提供，適合來京都旅行的遊客。", features: ["60分鐘一對一訓練", "無需加入會員", "運動服・鞋免費提供", "可提供簡單英語溝通"] }, cta: "預約體驗課程" },
    flow: { kicker: "Flow", title: "體驗課程流程", steps: [
      { title: "線上預約", description: "請從預約表單選擇希望的日期與時間，約30秒即可完成。" },
      { title: "諮詢 + 訓練", description: "進行簡短諮詢後，體驗60分鐘的私人教練訓練。空手前來即可。" },
    ], footer: "運動服・運動鞋・毛巾・飲用水皆免費提供。", bookText: "透過", bookLinkLabel: "預約表單" },
    cta: { kicker: "Consultation", title: "體驗課程", paragraphs: ["歡迎先來體驗一次。體驗費用3,000日圓，當天入會則免費。", "入會前的各種疑問都可以在體驗課程中得到解答。", "親身感受訓練內容與健身房的氛圍。"], bullets: ["擔心自己不擅長運動…", "想了解教練是什麼樣的人…"], webBtn: "線上預約體驗課程", lineBtn: "透過LINE預約" },
    faq: { kicker: "Q&A", title: "常見問題", items: [
      { question: "體驗課程會進行哪些內容？", answer: "進行簡短諮詢後，體驗60分鐘的真實私人訓練課程。運動服與鞋子免費提供，空手前來即可。" },
      { question: "體驗課程的費用是多少？", answer: "體驗課程費用為3,000日圓。若您於體驗當天辦理入會，體驗費用即為0日圓（免費）。若當天未入會，則需支付3,000日圓。" },
      { question: "沒有運動經驗也可以嗎？", answer: "完全沒問題。我們大部分的顧客都是初學者，教練會依照您的體力與目標耐心指導。" },
      { question: "需要帶什麼東西嗎？", answer: "無需準備任何物品。運動服・鞋・毛巾・飲用水全部免費提供。" },
      { question: "遊客可以單次體驗嗎？", answer: "可以。單次訓練每次8,000日圓，無需加入會員，運動服與器材全部免費提供。可透過網站或Instagram私訊預約。" },
      { question: "可以用英語或中文溝通嗎？", answer: "教練可以使用簡單的英語進行訓練溝通，較複雜的內容會藉助翻譯工具，方便外國遊客使用。" },
      { question: "有最低合約期限嗎？", answer: "沒有合約期限限制，最少1個月即可開始。" },
      { question: "除了方案費用之外還有其他費用嗎？", answer: "完全沒有。入會費・手續費0日圓，運動服・鞋・毛巾・飲用水全部免費。" },
      { question: "最近的車站是哪裡？", answer: "地鐵「丸太町」站步行8分鐘。京阪「神宮丸太町」站步行也是8分鐘。" },
      { question: "可以更改或取消預約嗎？", answer: "預約的更改與取消可隨時透過專用APP辦理。如在前一天之前辦理，不會產生費用或消耗次數。但當日取消（及無故爽約）將視為消耗1次（1堂課），敬請見諒。" },
    ] },
    access: { kicker: "Access", title: "交通指南", intro: "從地鐵丸太町站步行8分鐘。從4號出口出來後沿丸太町通往東直走，位於Plaza御所南2樓。京阪神宮丸太町站步行同樣8分鐘。", addressLabel: "地址", addressLines: ["〒604-0981", "京都市中京區毘沙門町533-1 Plaza御所南 2樓"], stationLabel: "最近車站", stations: ["京都市公車「裁判所前」步行3分鐘", "京都市營地鐵「丸太町」站 步行8分鐘", "京阪「神宮丸太町」站 步行8分鐘", "京都市營地鐵「京都市役所前」站 步行10分鐘"], hoursLabel: "營業時間", hoursText: "10:00〜22:00（完全預約制）", hoursSub: "不定期公休 / 營業時間外也可能接受預約", contactLabel: "聯絡方式", contactText: "請透過官方LINE或Instagram私訊洽詢。", note: "※騎腳踏車的顧客請停在大樓1樓樓梯旁。 ※停車請使用周邊收費停車場。", sponsorsLabel: "贊助企業" },
    footer: { blog: "部落格", app: "官方APP", line: "LINE", instagram: "Instagram", terms: "使用條款", privacy: "隱私權政策", tokusho: "特定商業交易法標示", copyright: "私人教練健身房 Salute御所南", address: "京都市中京區毘沙門町533-1 Plaza御所南 2樓" },
    mobileCta: "預約體驗課程 →",
    languageLabel: "語言",
  },

  ko: {
    meta: { title: "교토 고쇼미나미 퍼스널 트레이닝 짐 | Salute", description: "Salute는 교토 고쇼미나미에 위치한 퍼스널 트레이닝 짐입니다. 체험 세션(¥3,000, 당일 등록 시 무료)과 여행객을 위한 1회 이용 트레이닝을 제공합니다. 1회 이용 시 회원가입은 필요하지 않습니다. 마루타마치역에서 도보 8분." },
    nav: { features: "특징", trainer: "트레이너", voice: "고객 후기", plan: "요금제", faq: "자주 묻는 질문", access: "오시는 길", consultation: "체험 세션", blog: "블로그" },
    header: { ctaBtn: "체험 예약" },
    hero: { kicker: "교토 고쇼미나미의 퍼스널 트레이닝 짐 Salute｜체험 세션 ¥3,000 (당일 등록 시 무료)", title1: "혼자서는 운동을 꾸준히 이어가기 어려우셨나요?", titleAccent: "고쇼미나미의 1:1 퍼스널 트레이닝 짐.", sub: "과거의 나를 넘어, 인생 최고의 컨디션으로", desc: "영양사 자격을 가진 트레이너가 회원님의 페이스에 맞춰 꼼꼼하게 서포트합니다. 1회 ¥4,000부터, 입회비 없이 시작할 수 있고 운동복・신발・수건・물도 모두 무료로 제공합니다.", cta1: "체험 예약", cta2: "특징 자세히 보기" },
    concern: { kicker: "Concern", title: "이런 고민, 있으신가요?", items: ["헬스장은 다녔지만 꾸준히 다니지 못했다", "무엇부터 시작해야 할지 모르겠다", "심한 식단 조절은 너무 힘들어서 포기했다", "대형 헬스장은 남의 시선이 신경 쓰인다"], footer: "Salute 고쇼미나미는 이러한 고민을 해결하기 위해 만들어진 퍼스널 트레이닝 짐입니다." },
    features: { kicker: "Features", title: "Salute가 선택받는 이유", items: [
      { title: "오롯이 나만을 위한 공간에서 집중", description: "다른 회원과 마주치지 않는 완전 프라이빗 공간에서 트레이너와 1:1로 트레이닝합니다. 초보자도 부담 없이 시작할 수 있습니다." },
      { title: "숫자로 변화를 확인", description: "전용 앱이 트레이닝 기록과 신체 변화를 자동으로 기록합니다. 그래프와 월간 리포트로 성장을 실감하며 동기를 유지할 수 있습니다." },
      { title: "식사 관리도 함께 서포트", description: "영양사 자격을 가진 트레이너가 운동뿐 아니라 식사도 함께 코칭합니다. 극단적인 식단 대신 일상에서 실천 가능한 방법을 제안합니다." },
      { title: "꾸준히 다니기 좋은 가격", description: "1회 ¥4,000부터, 입회비 없음. 운동복・신발・수건・물 모두 무료. 시작하기도 쉽고, 꾸준히 다니기에도 부담이 적습니다." },
    ], note: "모든 플랜은 완전 1:1 지도이며, 회원님 한 분 한 분의 목표에 맞춘 맞춤형 트레이닝 메뉴를 제공합니다.", cta: "체험 예약", wearRentalTag: "운동복·신발 무료 대여" },
    numbers: { kicker: "Numbers", title: "숫자로 보는 Salute", items: [
      { value: "¥0", label: "입회비" }, { value: "¥4,000~", label: "1회 요금" }, { value: "5.0", label: "Google 평점" }, { value: "140+", label: "월간 지도 실적" },
    ] },
    trainer: { kicker: "Trainer", title: "트레이너 소개", name: "宗本 寛太", nameRoman: "Munemoto Kanta", role: "Salute 고쇼미나미 대표 트레이너", qualLabel: "자격", qual: "영양사", careerLabel: "경력", career: "시조 카라스마의 퍼스널 트레이닝 짐에서 점장으로 근무. 월 140팀 이상 지도 경험. 2024년 11월부터 Salute 고쇼미나미 트레이너로 부임. 또한 피지크 대회 출전 경험이 있어 감량부터 몸만들기까지의 과정을 직접 경험했으며, 그 경험을 운동이 처음이신 분 한 분 한 분에게 맞춘 지도에 활용하고 있다.", messageLabel: "메시지", message: "「운동이 익숙하지 않으신 분, 헬스장이 처음이신 분도 안심하세요. 여러분의 목표를 향해 전력으로 서포트해 드리겠습니다!」", greetingLabel: "트레이너 인사말", greetingParagraphs: [
      "오랫동안 많은 고객의 다이어트를 지도해 오면서, 공통된 두 가지 고민을 자주 들어 왔습니다. 「나에게 맞는 방법을 모르겠다」, 그리고 「운동을 꾸준히 이어가기 어렵다」는 것입니다.",
      "Salute 고쇼미나미에서는 회원님 한 분 한 분의 라이프스타일에 맞춰, 무리 없이 지속할 수 있는 트레이닝과 결과로 이어지는 식습관 개선을 함께 제안합니다.",
      "건강하고 멋진 몸을 만들기 위한 첫걸음을 함께 시작해 봅시다.",
    ] },
    voice: { kicker: "Voice", title: "고객의 변화와 후기", googleReviews: "Google 후기 17건", changesTitle: "고객의 변화", voiceTitle: "다니고 계신 고객의 후기", disclaimer: "※효과에는 개인차가 있습니다", dietLabel: "30대 여성・다이어트", bodymakeLabel: "40대 남성・바디 메이킹", dietResult: "체중 -4.8kg　체지방률 -3.2%", bodymakeResult: "체중 +1.5kg (근육 증가)　체지방률 -4.1%", testimonials: [
      { label: "30대 여성・회사원", comment: "저에게 맞춰 정확하게 지도해 주시는 점이 1:1 퍼스널 트레이닝의 장점이라고 느꼈습니다. 가격과 횟수도 부담이 적어 초보자도 시작하기 좋습니다." },
      { label: "40대 남성・사무직", comment: "다닌 지 4개월 정도 되었습니다. 매번 같은 운동만 하지 않고 조금씩 조정해 주셔서 매번 효과를 체감하고 있습니다." },
      { label: "30대 여성・회사원", comment: "근력 운동은 처음이지만 즐겁게 다니고 있어요. 운동복과 신발이 무료라 빈손으로 와도 되어 일정 사이에 들르기에도 편합니다." },
    ], fromGoogle: "Google 후기에서" },
    pricing: { kicker: "Plan", title: "요금 플랜", freeNote: "입회비・사무수수료 ¥0", sub: "목표에 맞춰 플랜을 선택해 주세요.", popular: "추천", perMonth: "(부가세 포함)/월", dropInUnit: "(부가세 포함)/회", dropInCta: "드롭인 예약하기", description: "목표에 맞춰 4가지 월간 플랜 중에서 선택하실 수 있습니다. 입회비・사무수수료 ¥0. 모든 플랜은 1:1 지도이며, 운동복・신발・수건・물이 무료로 제공됩니다.", plans: [
      { name: "월 4회 플랜", price: "¥20,000", perSession: "1회 ¥5,000", description: "건강 유지와 운동 부족 해소", features: ["1회 60분", "월 최대 4회", "빈손으로 OK", "전용 앱 제공"] },
      { name: "월 6회 플랜", price: "¥28,500", perSession: "1회 ¥4,750", description: "주 1회 이상 트레이닝하고 싶은 분께", features: ["1회 60분", "월 최대 6회", "빈손으로 OK", "전용 앱 제공"] },
      { name: "월 8회 플랜", price: "¥36,000", perSession: "1회 ¥4,500", description: "다이어트와 바디 메이킹에", features: ["1회 60분", "월 최대 8회", "빈손으로 OK", "전용 앱 제공", "식사 어드바이스"] },
      { name: "월 15회 플랜", price: "¥60,000", perSession: "1회 ¥4,000", description: "본격적인 다이어트・바디 메이킹에", features: ["1회 60분", "월 최대 15회", "빈손으로 OK", "전용 앱 제공", "식사 어드바이스"] },
    ], dropIn: { name: "1회 이용 (교토 여행객용)", price: "¥8,000", perSession: "1회", description: "회원가입 없이 1회 이용 가능. 교토 여행 중에도 이용하기 좋습니다.", features: ["60분 1:1 트레이닝", "회원가입 불필요", "운동복・신발 무료 제공", "간단한 영어 응대 가능"] }, cta: "체험 예약" },
    flow: { kicker: "Flow", title: "체험 세션 안내", steps: [
      { title: "온라인 예약", description: "예약 폼에서 원하시는 날짜와 시간을 선택해 주세요. 약 30초면 예약이 완료됩니다." },
      { title: "카운셀링 + 트레이닝", description: "간단한 상담 후, 60분간의 퍼스널 트레이닝을 체험하실 수 있습니다. 빈손으로 오시면 됩니다." },
    ], footer: "운동복・신발・수건・물은 무료로 준비되어 있습니다.", bookText: "", bookLinkLabel: "예약 폼" },
    cta: { kicker: "Consultation", title: "체험 세션 안내", paragraphs: ["먼저 가볍게 체험해 보세요. 체험 요금은 ¥3,000이며, 당일 등록 시 무료입니다.", "입회 전의 다양한 궁금증은 체험 세션에서 해소하실 수 있습니다.", "트레이닝 내용과 짐 분위기를 직접 느껴 보세요."], bullets: ["운동이 익숙하지 않아 걱정되시나요?", "트레이너가 어떤 사람인지 궁금하신가요?"], webBtn: "온라인으로 체험 예약", lineBtn: "LINE으로 예약" },
    faq: { kicker: "Q&A", title: "자주 묻는 질문", items: [
      { question: "체험 세션에서는 무엇을 하나요?", answer: "간단한 상담 후 실제와 동일한 60분간의 퍼스널 트레이닝을 체험하실 수 있습니다. 운동복・신발・수건・물 모두 무료로 제공되므로 빈손으로 오시면 됩니다." },
      { question: "체험 세션 요금은 얼마인가요?", answer: "체험 세션 요금은 ¥3,000입니다. 체험 당일에 회원 등록을 하시면 체험료는 ¥0(무료)이 됩니다. 당일에 등록하지 않으실 경우에는 ¥3,000을 받고 있습니다." },
      { question: "운동 경험이 없는데 괜찮나요?", answer: "물론입니다. 대부분의 고객이 처음 시작하시는 분들입니다. 체력과 목표에 맞춰 트레이너가 꼼꼼하게 지도합니다." },
      { question: "준비물이 필요한가요?", answer: "필요 없습니다. 운동복・신발・수건・물 모두 무료로 준비되어 있습니다." },
      { question: "여행 중에 1회만 이용할 수도 있나요?", answer: "네, 가능합니다. 1회 이용 요금은 ¥8,000이며 회원가입은 필요하지 않습니다. 운동복과 장비 모두 무료로 제공되며, 웹사이트 또는 Instagram DM으로 예약하실 수 있습니다." },
      { question: "영어로도 소통이 가능한가요?", answer: "트레이너는 기본적인 영어로 트레이닝을 진행할 수 있으며, 자세한 내용은 번역 도구를 활용해 안내해 드립니다. 외국인 관광객도 부담 없이 이용하실 수 있습니다." },
      { question: "최소 계약 기간이 있나요?", answer: "계약 기간 제약은 없으며, 1개월부터 시작하실 수 있습니다." },
      { question: "요금 외에 추가 비용이 있나요?", answer: "전혀 없습니다. 입회비・사무수수료 ¥0, 운동복・신발・수건・물 모두 무료입니다." },
      { question: "가장 가까운 역은 어디인가요?", answer: "지하철 마루타마치역에서 도보 8분, 게이한 진구마루타마치역에서도 도보 8분입니다." },
      { question: "예약 변경이나 취소가 가능한가요?", answer: "예약 변경·취소는 전용 앱에서 언제든지 하실 수 있습니다. 전날까지 변경·취소하시면 취소 수수료나 횟수 차감이 발생하지 않습니다. 다만 당일 취소(및 무단 취소)의 경우 1회분(1세션)을 사용한 것으로 처리되오니 양해 부탁드립니다." },
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
