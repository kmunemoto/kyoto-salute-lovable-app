import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Check, MapPin, Train, Instagram, Mail, MessageCircle } from "lucide-react";
import { trackCtaClick } from "@/lib/analytics";

const BASE = "https://kyoto-salute.com";
const VISITOR_URL = "https://app.kyoto-salute.com/trial/ceda19b0-d5e0-4928-ab2e-996a0b823af4";
const DROPIN_DESC =
  "Drop-in personal training in Kyoto for travelers. One 60-min session ¥8,000, no membership, English-speaking trainer, all gear provided. 8 min from Marutamachi Station, near the Kyoto Imperial Palace.";
const DROPIN_TITLE =
  "Drop-in Personal Training in Kyoto (English-Speaking) | ¥8,000 Single Session | Salute";

const DropIn = () => {
  const included = [
    "60-minute 1-on-1 personal training session",
    "Certified nutritionist trainer (English-speaking)",
    "All sportswear, shoes, towels & water provided",
    "Personalized workout based on your goals",
    "No membership or sign-up required",
  ];

  const faqs = [
    { q: "Do I need to speak Japanese?", a: "No. Your trainer speaks English and guides you through the whole session." },
    { q: "Do I need a membership?", a: "No. Drop-in is a single session with no sign-up or commitment." },
    { q: "What should I bring?", a: "Nothing — sportswear, shoes, towel and water are all provided." },
    { q: "How do I get there?", a: "An 8-minute walk from Marutamachi Station, near the Kyoto Imperial Palace. About 15 minutes from downtown or Kyoto Station by subway." },
    { q: "Can I book for today or last minute?", a: "Message us on Instagram or LINE — same-day booking may be possible depending on availability." },
    { q: "How do I pay?", a: "Cash or credit card. ¥8,000 (approx. $55) per session." },
  ];

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Drop-in Personal Training in Kyoto",
    serviceType: "Personal Training",
    description: DROPIN_DESC,
    areaServed: { "@type": "City", name: "Kyoto" },
    provider: {
      "@type": "LocalBusiness",
      name: "Salute Goshominami",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Plaza Goshominami 2F, 533-1 Bishamoncho, Nakagyo-ku",
        addressLocality: "Kyoto",
        postalCode: "604-0981",
        addressCountry: "JP",
      },
      url: `${BASE}/drop-in`,
    },
    offers: {
      "@type": "Offer",
      price: "8000",
      priceCurrency: "JPY",
      availability: "https://schema.org/InStock",
      url: `${BASE}/drop-in`,
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/en` },
      { "@type": "ListItem", position: 2, name: "Drop-in", item: `${BASE}/drop-in` },
    ],
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <html lang="en" />
        <title>{DROPIN_TITLE}</title>
        <meta name="description" content={DROPIN_DESC} />
        <link rel="canonical" href={`${BASE}/drop-in`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={DROPIN_TITLE} />
        <meta property="og:description" content={DROPIN_DESC} />
        <meta property="og:url" content={`${BASE}/drop-in`} />
        <meta property="og:image" content={`${BASE}/og-image.jpg`} />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${BASE}/og-image.jpg`} />
        <script type="application/ld+json">{JSON.stringify(serviceLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      </Helmet>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="/drop-in" className="font-heading text-xl">
            <span className="text-gold">Salute</span> Goshominami
          </a>
          <Link to="/" className="text-sm text-foreground/80 hover:text-gold transition-colors font-body">
            日本語サイトへ →
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4 font-body">For Travelers</p>
          <h1 className="font-heading text-4xl md:text-6xl mb-6 leading-tight">
            Drop-in Personal Training in Kyoto
          </h1>
          <p className="text-gold font-body text-base md:text-lg mb-4 tracking-wide">
            English-speaking trainer — no Japanese needed.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground font-body mb-4 leading-relaxed">
            Keep your fitness routine while traveling. No membership needed.
          </p>
          <p className="text-base text-muted-foreground font-body mb-10 leading-relaxed max-w-2xl mx-auto">
            A drop-in gym for tourists and travelers in Kyoto. Book a single one-time session with an English-speaking personal trainer, right near the Kyoto Imperial Palace (Gosho).
          </p>
          <a
            href={VISITOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCtaClick({ type: "dropin", location: "drop_in_hero", label: "Book Now", url: VISITOR_URL, language: "en" })}
            className="gold-gradient inline-block px-10 py-4 text-white font-medium rounded-sm text-base"
          >
            Book Now
          </a>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body">Included</p>
            <h2 className="font-heading text-3xl md:text-4xl">What's Included</h2>
          </div>
          <ul className="space-y-4 max-w-2xl mx-auto">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3 font-body">
                <Check className="w-5 h-5 text-gold shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Price */}
      <section className="section-padding section-dark">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body">Price</p>
          <h2 className="font-heading text-3xl md:text-4xl mb-8">Simple, Transparent Pricing</h2>
          <div className="inline-block bg-background rounded-sm px-12 py-10 border border-border">
            <p className="font-heading text-5xl md:text-6xl text-gold mb-2">¥8,000</p>
            <p className="font-body text-muted-foreground mb-4">per session (approx. $55 USD)</p>
            <p className="font-body text-sm text-muted-foreground">※ Cash and credit card accepted</p>
          </div>
        </div>
      </section>

      {/* How to Book */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body">Booking</p>
            <h2 className="font-heading text-3xl md:text-4xl">How to Book</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "01", t: "Get in Touch", d: "Send us a DM on Instagram or a message on LINE." },
              { n: "02", t: "Pick a Time", d: "Tell us your preferred date and time." },
              { n: "03", t: "Show Up & Train", d: "Just come — we provide everything you need!" },
            ].map((s) => (
              <div key={s.n} className="bg-secondary rounded-sm p-6">
                <p className="font-heading text-3xl text-gold mb-3">{s.n}</p>
                <h3 className="font-body font-semibold mb-2">{s.t}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body">FAQ</p>
            <h2 className="font-heading text-3xl md:text-4xl">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="bg-secondary rounded-sm p-6">
                <h3 className="font-body font-semibold mb-2 text-foreground">Q. {f.q}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">A. {f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-padding section-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body">Location</p>
            <h2 className="font-heading text-3xl md:text-4xl">Find Us</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="rounded-sm overflow-hidden aspect-[4/3]">
              <iframe
                src="https://maps.google.com/maps?q=%E3%83%91%E3%83%BC%E3%82%BD%E3%83%8A%E3%83%AB%E3%82%B8%E3%83%A0Salute%E5%BE%A1%E6%89%80%E5%8D%97&output=embed&hl=en&z=17"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.3) contrast(1.1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Salute Goshominami location map"
              />
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-1" />
                <div>
                  <h3 className="font-body font-semibold mb-1">Address</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    Plaza Goshominami 2F, 533-1 Bishamoncho,<br />
                    Nakagyo-ku, Kyoto 604-0981
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Train className="w-5 h-5 text-gold shrink-0 mt-1" />
                <div>
                  <h3 className="font-body font-semibold mb-1">Nearest Station</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    8-minute walk from Marutamachi Station (Karasuma Line)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trainer */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body">Trainer</p>
          <h2 className="font-heading text-3xl md:text-4xl mb-8">Your Trainer</h2>
          <div className="bg-secondary rounded-sm p-8 md:p-10">
            <h3 className="font-heading text-2xl mb-2">Kanta Munemoto</h3>
            <p className="text-gold font-body text-sm mb-6">Certified Nutritionist & Personal Trainer</p>
            <ul className="space-y-3 text-left max-w-xl mx-auto font-body text-muted-foreground">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gold shrink-0 mt-1" />
                <span>Over 140 clients trained per month</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gold shrink-0 mt-1" />
                <span>Specializing in body composition, weight management, and strength training</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-footer text-footer-foreground px-6 py-12">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="font-heading text-2xl">
            <span className="text-gold">Salute</span> Goshominami
          </div>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.instagram.com/salute_goshominami/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-footer-foreground/70 hover:text-gold transition-colors flex items-center gap-2 font-body text-sm"
            >
              <Instagram className="w-4 h-4" /> Instagram
            </a>
            <a
              href="https://lin.ee/UMVDzWF"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCtaClick({ type: "line", location: "drop_in_footer", label: "LINE", url: "https://lin.ee/UMVDzWF", language: "en" })}
              className="text-footer-foreground/70 hover:text-gold transition-colors flex items-center gap-2 font-body text-sm"
            >
              <MessageCircle className="w-4 h-4" /> LINE
            </a>
            <a
              href="mailto:info@kyoto-salute.com"
              className="text-footer-foreground/70 hover:text-gold transition-colors flex items-center gap-2 font-body text-sm"
            >
              <Mail className="w-4 h-4" /> Email
            </a>
          </div>
          <p className="text-footer-foreground/40 text-xs font-body">
            © {new Date().getFullYear()} Salute Goshominami
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DropIn;