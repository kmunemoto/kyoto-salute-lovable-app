import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Check, MapPin, Train } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";
import gymInterior from "@/assets/gym-interior.jpg";
import { getAreaPage } from "@/data/area-pages";
import { trackCtaClick } from "@/lib/analytics";

const BASE = "https://kyoto-salute.com";
const TRIAL_URL = "https://app.kyoto-salute.com/trial";
const LINE_URL = "https://lin.ee/UMVDzWF";

const reasons = [
  { title: "完全個室のマンツーマン指導", desc: "他のお客様と顔を合わせない完全個室。人目を気にせず、自分のペースで取り組めます。" },
  { title: "栄養士トレーナーが在籍", desc: "トレーニングだけでなく、我慢ではなく工夫でつくる食事アドバイスも受けられます。" },
  { title: "入会金¥0・1回¥4,000〜", desc: "初期費用は0円。縛りのない月額制で、続けやすい料金設定です。" },
  { title: "手ぶらでOK", desc: "ウェア・シューズ・タオル・お水を無料でご用意。仕事帰りにそのまま通えます。" },
  { title: "当日キャンセルも無料", desc: "予約の変更・キャンセルは当日でも無料。急な予定にも柔軟に対応できます。" },
  { title: "10:00〜22:00の完全予約制", desc: "夜21時からの予約も可能なので、残業後でも間に合います。" },
];

const AreaPage = () => {
  const { slug } = useParams();
  const area = getAreaPage(slug);

  if (!area) {
    return (
      <div className="min-h-screen bg-background">
        <Helmet>
          <title>ページが見つかりません | パーソナルジム Salute御所南</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <Header />
        <main className="section-padding pt-32 md:pt-36 text-center">
          <h1 className="font-heading text-3xl text-foreground md:text-5xl">ページが見つかりません</h1>
          <Link to="/" className="mt-8 inline-block font-body text-sm text-gold hover:underline">トップへ戻る</Link>
        </main>
        <Footer />
      </div>
    );
  }

  const url = `${BASE}/area/${area.slug}`;

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: `${BASE}/` },
      { "@type": "ListItem", position: 2, name: `${area.station}エリア`, item: url },
    ],
  };

  const webpage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: area.metaTitle,
    description: area.metaDescription,
    url,
    inLanguage: "ja",
    about: {
      "@type": "HealthClub",
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
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <html lang="ja" />
        <title>{area.metaTitle}</title>
        <meta name="description" content={area.metaDescription} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={area.metaTitle} />
        <meta property="og:description" content={area.metaDescription} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={`${BASE}/og-image.jpg`} />
        <meta property="og:locale" content="ja_JP" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${BASE}/og-image.jpg`} />
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(webpage)}</script>
      </Helmet>
      <Header />
      <main>
        {/* Hero */}
        <section className="section-padding pt-32 md:pt-36 bg-secondary">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <p className="text-gold text-sm tracking-[0.25em] uppercase mb-3 font-body">{area.line}・{area.station}</p>
              <h1 className="font-heading text-3xl md:text-5xl text-foreground leading-tight">{area.h1}</h1>
              <p className="mt-6 font-body text-muted-foreground leading-relaxed">{area.intro}</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href={TRIAL_URL} target="_blank" rel="noopener noreferrer" onClick={() => trackCtaClick({ type: "trial", location: `area_${area.slug}_hero`, label: "体験を予約", url: TRIAL_URL, language: "ja" })} className="gold-gradient px-8 py-4 text-white font-medium rounded-sm text-center">体験トレーニングを予約する</a>
                <a href={LINE_URL} target="_blank" rel="noopener noreferrer" onClick={() => trackCtaClick({ type: "line", location: `area_${area.slug}_hero`, label: "LINEから予約", url: LINE_URL, language: "ja" })} className="px-8 py-4 text-white font-medium rounded-sm text-center" style={{ backgroundColor: "#06C755" }}>LINEから予約</a>
              </div>
            </div>
            <div className="rounded-sm overflow-hidden aspect-[4/3]">
              <img src={gymInterior} alt={`${area.station}から徒歩圏内のパーソナルジムSalute御所南の内観`} loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Access */}
        <section className="section-padding bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body">Access</p>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground">{area.station}からのアクセス</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Train className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="font-body font-semibold text-foreground mb-1">{area.station}から{area.walk}</h3>
                    <p className="font-body text-muted-foreground leading-relaxed">{area.access}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="font-body font-semibold text-foreground mb-1">エリアについて</h3>
                    <p className="font-body text-muted-foreground leading-relaxed">{area.nearby}</p>
                    <p className="font-body text-muted-foreground leading-relaxed mt-2">〒604-0981 京都市中京区毘沙門町533-1 プラザ御所南 2階</p>
                  </div>
                </div>
              </div>
              <div className="rounded-sm overflow-hidden aspect-[4/3]">
                <iframe
                  src="https://maps.google.com/maps?q=%E3%83%91%E3%83%BC%E3%82%BD%E3%83%8A%E3%83%AB%E3%82%B8%E3%83%A0Salute%E5%BE%A1%E6%89%80%E5%8D%97&output=embed&hl=ja&z=17"
                  width="100%" height="100%" style={{ border: 0, filter: "grayscale(0.3) contrast(1.1)" }}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  title={`${area.station}周辺のSalute御所南 地図`}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Reasons */}
        <section className="section-padding section-dark">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body">Why Salute</p>
              <h2 className="font-heading text-3xl md:text-4xl text-gym-dark-foreground">{area.station}エリアでSalute御所南が選ばれる理由</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reasons.map((r) => (
                <div key={r.title} className="rounded-sm border border-border bg-white p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Check className="w-5 h-5 text-gold shrink-0" />
                    <h3 className="font-body font-semibold text-gym-dark-foreground">{r.title}</h3>
                  </div>
                  <p className="font-body text-sm text-gym-dark-foreground/70 leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/#plan" className="font-body text-sm text-gold hover:underline">料金プランの詳細を見る →</Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-background">
          <div className="max-w-3xl mx-auto text-center border border-gold/30 bg-secondary p-8 md:p-12 rounded-sm">
            <h2 className="font-heading text-2xl md:text-3xl text-foreground">{area.station}周辺でパーソナルジムをお探しなら</h2>
            <p className="mt-4 font-body text-sm md:text-base text-muted-foreground leading-relaxed">
              まずは体験トレーニングで、ジムの雰囲気とトレーニングを体感してみてください。体験料は¥3,000、体験当日にご入会いただいた場合は¥0です。1回¥4,000〜・入会金¥0・手ぶらOK。
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href={TRIAL_URL} target="_blank" rel="noopener noreferrer" onClick={() => trackCtaClick({ type: "trial", location: `area_${area.slug}_cta`, label: "体験を予約", url: TRIAL_URL, language: "ja" })} className="gold-gradient px-10 py-4 text-white font-medium rounded-sm">体験トレーニングを予約する</a>
              <a href={LINE_URL} target="_blank" rel="noopener noreferrer" onClick={() => trackCtaClick({ type: "line", location: `area_${area.slug}_cta`, label: "LINEから予約", url: LINE_URL, language: "ja" })} className="px-10 py-4 text-white font-medium rounded-sm" style={{ backgroundColor: "#06C755" }}>LINEから予約</a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              <Link to="/" className="text-gold hover:underline font-body">トップページ</Link>
              {area.relatedBlog && (
                <Link to={`/blog/${area.relatedBlog}`} className="text-gold hover:underline font-body">エリアの詳しい記事を読む</Link>
              )}
              <Link to="/blog" className="text-gold hover:underline font-body">ブログ一覧</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTABar />
    </div>
  );
};

export default AreaPage;
