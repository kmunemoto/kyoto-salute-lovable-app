import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Check, MapPin, Train } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";
import pilatesImage from "@/assets/pilates-reformer.webp";
import { useT } from "@/i18n/LanguageContext";
import { trackCtaClick } from "@/lib/analytics";
import { PILATES_TRIAL_PAGE, PILATES_TRIAL_URL, isBeforePilatesTrialStart } from "@/lib/booking";
import { PILATES_TRIAL_SEO, SITE_URL } from "@/lib/seo-pages";
import { HIDDEN_TRAINERS } from "@/data/trainers";

// マシンピラティス体験の案内ページ（日本語のみ）。
// 曜日・時間は担当トレーナーのシフトで変わるので書かず、空き状況は予約ページで見てもらう。
const BASE = SITE_URL;
const PAGE_URL = `${BASE}${PILATES_TRIAL_PAGE}`;
const TRAINING_TRIAL_URL = "https://app.kyoto-salute.com/trial";
const LINE_URL = "https://lin.ee/UMVDzWF";
// タイトル・説明文・共有画像は src/lib/seo-pages.ts（ビルドのときに書き出す pilates-trial.html と同じものを使う）
const TITLE = PILATES_TRIAL_SEO.title;
const DESCRIPTION = PILATES_TRIAL_SEO.description;
const OG_IMAGE = PILATES_TRIAL_SEO.image;
// 担当トレーナー（ホームのトレーナー紹介と同じ文面を translations から読む。資格の欄は、ここでは出さない）
const PILATES_TRAINER = "Yonetomi Yoshiko";
// Chrome の文節改行（auto-phrase）は「方々」の「々」の前で改行することがあるので、「々」の前に改行しない印（WORD JOINER）を入れる
const keepIterationMark = (text: string) => text.replace(/々/g, "\u2060々");

const steps = [
  { title: "予約ページで日時を選ぶ", desc: "空いている日時を選んで予約します。予約が完了すると、確認メールが届きます。" },
  { title: "マシンピラティスを体験", desc: "カウンセリングで目標やお悩みをお聞きした後、トレーナーと1対1で、リフォーマーを使ったマシンピラティスを体験していただきます。カウンセリングを含めて60分です。" },
  { title: "ご入会（ご希望の方）", desc: "体験当日にご入会いただくと、体験料は¥0になります（ご入会されない場合は、体験料¥3,000を当日お支払いいただきます）。ご入会後は、月額プランの1回ごとにパーソナルトレーニングとマシンピラティスを選べます。" },
];

const PilatesTrial = () => {
  const { t } = useT();
  const beforeStart = isBeforePilatesTrialStart();
  const trainer = HIDDEN_TRAINERS.has(PILATES_TRAINER) ? undefined : t.trainer.members.find((m) => m.nameRoman === PILATES_TRAINER);

  // 別のページから移ってきたときに、ページの途中から表示されないようにする
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 予約できる期間：スタート（11/25）までは 11/25〜12/4 の分。その後は、前日まで・10日先まで
  const bookingWindow = beforeStart ? "現在は、11月25日〜12月4日のご予約を受け付けています。" : "10日先までの日時をご予約いただけます。";

  const prices = [
    { label: "体験料", value: "¥3,000", note: "税込・当日払い。体験当日にご入会いただいた場合は¥0です。" },
    { label: "時間", value: "60分", note: "カウンセリングを含みます。完全個室で、トレーナーと1対1で行います。" },
    { label: "予約", value: "前日まで", note: `${bookingWindow}日時・空き状況は予約ページでご確認ください。` },
  ];

  const faqs = [
    {
      q: "マシンピラティスは、グループレッスンですか？",
      a: "いいえ。完全個室で、トレーナーと1対1で行います。ご入会後のマシンピラティス（1回50分）も、同じく1対1です。",
    },
    {
      q: "予約できる日時はいつですか？",
      a: `マシンピラティス担当トレーナーのスケジュールに合わせて、予約できる日時を設けています。日時は変わることがあるため、空き状況は予約ページでご確認ください。ご予約は前日までにお願いします。${bookingWindow}`,
    },
    {
      q: "LINEでも予約できますか？",
      a: "はい。LINEからもご予約いただけます。",
    },
    {
      q: "運動が苦手でも大丈夫ですか？",
      a: "はい。トレーナーがバネの強さで負荷を調整し、動きを確認しながら進めます。体が硬い方や運動が久しぶりの方も、ご自分のペースで取り組めます。",
    },
    {
      q: "体験だけでも受けられますか？",
      a: "はい。体験料¥3,000で、体験だけでも受けていただけます。体験当日にご入会いただいた場合、体験料は¥0です。",
    },
    {
      q: "持ち物は必要ですか？",
      a: "手ぶらでも大丈夫です。ウェア・タオル・お水は無料でご用意しています。",
    },
    {
      q: "体験料はいつ支払いますか？",
      a: "体験当日にお支払いいただきます（現金・クレジットカード・QRコード決済）。体験当日にご入会いただいた場合、体験料は¥0です。",
    },
    {
      q: "ご入会後も、マシンピラティスを受けられますか？",
      a: "はい。ご入会後は、月額プランの1回ごとに、パーソナルトレーニングとマシンピラティスのどちらかを選べます。マシンピラティスは1回50分（体験はカウンセリングを含めて60分）で、追加料金はかかりません。",
    },
    {
      q: "パーソナルトレーニングの体験もできますか？",
      a: "はい。パーソナルトレーニングの体験（カウンセリング＋50分のトレーニング、体験料¥3,000）は、別の予約ページからご予約いただけます。このページ下部の「パーソナルトレーニングの体験はこちら」からお進みください。",
    },
  ];

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: `${BASE}/` },
      { "@type": "ListItem", position: 2, name: "マシンピラティス体験", item: PAGE_URL },
    ],
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "マシンピラティス体験（トレーナーと1対1）",
    alternateName: "パーソナルピラティス体験",
    serviceType: "パーソナルピラティス（マシンピラティス・リフォーマー）",
    description: DESCRIPTION,
    url: PAGE_URL,
    areaServed: { "@type": "City", name: "京都市" },
    provider: {
      "@type": "HealthClub",
      "@id": `${BASE}/#gym`,
      name: "パーソナルジム Salute御所南",
      url: `${BASE}/`,
      telephone: "+81-90-8386-0894",
      address: {
        "@type": "PostalAddress",
        streetAddress: "毘沙門町533-1 プラザ御所南 2階",
        addressLocality: "京都市中京区",
        addressRegion: "京都府",
        postalCode: "604-0981",
        addressCountry: "JP",
      },
    },
    offers: {
      "@type": "Offer",
      name: "マシンピラティス体験（60分）",
      price: "3000",
      priceCurrency: "JPY",
      availabilityStarts: "2026-11-25",
      url: PAGE_URL,
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  const bookButton = (location: string, className: string) => (
    <a
      href={PILATES_TRIAL_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackCtaClick({ type: "trial", location, label: "空き状況を見て予約する", url: PILATES_TRIAL_URL, language: "ja" })}
      className={`gold-gradient px-8 py-4 text-white font-medium rounded-sm text-center font-body ${className}`}
    >
      空き状況を見て予約する
    </a>
  );

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <html lang="ja" />
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:locale" content="ja_JP" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(service)}</script>
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
      </Helmet>
      <Header cta={{ url: PILATES_TRIAL_URL, label: "ピラティス体験を予約", location: "pilates_trial_header" }} />
      <main className="[word-break:auto-phrase] [overflow-wrap:anywhere]">
        {/* Hero */}
        <section className="section-padding pt-32 md:pt-36 bg-secondary">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="min-w-0">
              <p className="text-gold text-sm tracking-[0.25em] uppercase mb-3 font-body">Pilates Trial</p>
              {beforeStart && (
                <p className="inline-block mb-4 px-4 py-1 rounded-full border border-gold/40 text-gold text-sm font-body">2026年11月25日（水）スタート・予約受付中</p>
              )}
              {/* 「1対1の」と「マシンピラティス体験」の間でだけ改行する */}
              <h1 className="font-heading text-[clamp(1.5rem,8vw,1.875rem)] sm:text-4xl md:text-6xl lg:text-4xl xl:text-5xl text-foreground leading-tight">
                <span className="whitespace-nowrap">1対1の</span>
                <wbr />
                <span className="whitespace-nowrap">マシンピラティス体験</span>
              </h1>
              <p className="mt-6 font-body text-muted-foreground leading-relaxed text-pretty">
                京都・御所南のパーソナルジム Salute御所南の完全個室で、リフォーマーというマシンを使ったマシンピラティスを体験できます。カウンセリングのあと、トレーナーが動きを確認しながら進めます（カウンセリングを含めて60分）。
              </p>
              <p className="mt-4 font-body text-foreground">
                体験料 <span className="font-heading text-2xl text-gold">¥3,000</span>（税込）
                <span className="block text-sm text-muted-foreground mt-1">体験当日にご入会いただいた場合は¥0です。</span>
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                {bookButton("pilates_trial_hero", "")}
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackCtaClick({ type: "line", location: "pilates_trial_hero", label: "LINEから予約", url: LINE_URL, language: "ja" })}
                  className="px-8 py-4 text-white font-medium rounded-sm text-center font-body"
                  style={{ backgroundColor: "#06C755" }}
                >
                  LINEから予約
                </a>
              </div>
              <p className="mt-4 font-body text-sm text-muted-foreground">日時・空き状況は、予約ページでご確認ください。</p>
            </div>
            <img src={pilatesImage} alt={t.pilates.imageAlt} width={1520} height={1140} className="w-full h-auto rounded-sm" />
          </div>
        </section>

        {/* マシンピラティスの特徴（ホームページと同じ 01〜03） */}
        <section className="section-padding bg-background">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body">Feature</p>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground">マシンピラティスの特徴</h2>
            </div>
            <ol className="space-y-8">
              {t.pilates.points.map((point, i) => (
                <li key={point.title} className="flex gap-5">
                  <span className="font-heading text-4xl text-gold/40 leading-none shrink-0" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-heading text-xl md:text-2xl text-foreground mb-2 text-balance">{point.title}</h3>
                    <p className="text-muted-foreground font-body text-base leading-relaxed text-pretty">{point.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 担当トレーナー */}
        {trainer && (
          <section className="section-padding bg-secondary">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body">Trainer</p>
                <h2 className="font-heading text-3xl md:text-4xl text-foreground">担当トレーナー</h2>
              </div>
              <div className="bg-background rounded-sm p-6 md:p-10">
                <p className="font-body text-sm text-gold">{trainer.role}</p>
                <p className="mt-1 font-heading text-2xl md:text-3xl text-foreground">{trainer.name}</p>
                <p className="mt-1 font-body text-sm text-muted-foreground">{trainer.nameRoman}</p>
                <p className="mt-6 font-body text-muted-foreground leading-relaxed text-pretty">{keepIterationMark(trainer.career)}</p>
                <p className="mt-4 font-body text-foreground leading-relaxed text-pretty">{keepIterationMark(trainer.message)}</p>
                <Link to="/#trainer" className="mt-6 inline-block font-body text-sm text-gold hover:underline">
                  トレーナー紹介をくわしく見る →
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* 料金・時間・予約 */}
        <section className="section-padding section-dark">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body">Price</p>
              <h2 className="font-heading text-3xl md:text-4xl text-gym-dark-foreground">料金・時間・ご予約</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {prices.map((p) => (
                <div key={p.label} className="rounded-sm border border-border bg-white p-6 text-center">
                  <p className="font-body text-sm text-gym-dark-foreground/60 mb-2">{p.label}</p>
                  <p className="font-heading text-3xl text-gold mb-3">{p.value}</p>
                  <p className="font-body text-sm text-gym-dark-foreground/70 leading-relaxed">{p.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 体験の流れ */}
        <section className="section-padding bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body">Flow</p>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground">体験の流れ</h2>
            </div>
            <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((s, i) => (
                <li key={s.title} className="bg-secondary rounded-sm p-6">
                  <p className="font-heading text-3xl text-gold mb-3">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="font-body font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* よくあるご質問 */}
        <section className="section-padding bg-secondary">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body">FAQ</p>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground">よくあるご質問</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((f) => (
                <div key={f.q} className="bg-background rounded-sm p-6">
                  <h3 className="font-body font-semibold text-foreground mb-2">Q. {f.q}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">A. {f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* アクセス */}
        <section className="section-padding bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body">Access</p>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground">アクセス</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Train className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="font-body font-semibold text-foreground mb-1">丸太町駅から徒歩8分</h3>
                    <p className="font-body text-muted-foreground leading-relaxed">地下鉄烏丸線 丸太町駅、京阪 神宮丸太町駅から、それぞれ徒歩8分です。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="font-body font-semibold text-foreground mb-1">住所</h3>
                    <p className="font-body text-muted-foreground leading-relaxed">〒604-0981 京都市中京区毘沙門町533-1 プラザ御所南 2階</p>
                  </div>
                </div>
                <ul className="space-y-2 font-body text-sm text-muted-foreground">
                  {["完全個室・完全予約制", "入会金・事務手数料¥0", "ウェア・タオル・お水を無料でご用意"].map((x) => (
                    <li key={x} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-gold shrink-0" />
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-sm overflow-hidden aspect-[4/3]">
                <iframe
                  src="https://maps.google.com/maps?q=%E3%83%91%E3%83%BC%E3%82%BD%E3%83%8A%E3%83%AB%E3%82%B8%E3%83%A0Salute%E5%BE%A1%E6%89%80%E5%8D%97&output=embed&hl=ja&z=17"
                  width="100%" height="100%" style={{ border: 0, filter: "grayscale(0.3) contrast(1.1)" }}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  title="Salute御所南 地図"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 予約 */}
        <section className="section-padding bg-background pt-0">
          <div className="max-w-3xl mx-auto text-center border border-gold/30 bg-secondary p-8 md:p-12 rounded-sm">
            <h2 className="font-heading text-2xl md:text-3xl text-foreground">マシンピラティスを体験してみませんか</h2>
            <p className="mt-4 font-body text-sm md:text-base text-muted-foreground leading-relaxed">
              体験料は¥3,000（税込）、体験当日にご入会いただいた場合は¥0です。日時・空き状況は予約ページでご確認ください。予約が完了すると、確認メールが届きます。LINEからもご予約いただけます。
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              {bookButton("pilates_trial_bottom", "px-10")}
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCtaClick({ type: "line", location: "pilates_trial_bottom", label: "LINEから予約", url: LINE_URL, language: "ja" })}
                className="px-10 py-4 text-white font-medium rounded-sm text-center font-body"
                style={{ backgroundColor: "#06C755" }}
              >
                LINEから予約
              </a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              <a
                href={TRAINING_TRIAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCtaClick({ type: "trial", location: "pilates_trial_training_link", label: "パーソナルトレーニングの体験はこちら", url: TRAINING_TRIAL_URL, language: "ja" })}
                className="text-gold hover:underline font-body"
              >
                パーソナルトレーニングの体験はこちら
              </a>
              <Link to="/" className="text-gold hover:underline font-body">トップページ</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTABar url={PILATES_TRIAL_URL} label="ピラティス体験を予約" location="pilates_trial_sticky" />
    </div>
  );
};

export default PilatesTrial;
