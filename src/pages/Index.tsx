import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ConcernSection from "@/components/ConcernSection";
import FeaturesSection from "@/components/FeaturesSection";
import NumbersSection from "@/components/NumbersSection";
import TrainerSection from "@/components/TrainerSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FlowSection from "@/components/FlowSection";
import FAQSection from "@/components/FAQSection";
import AccessSection from "@/components/AccessSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";
import { useT } from "@/i18n/LanguageContext";

const BASE = "https://kyoto-salute.com";

const Index = () => {
  const { lang, t } = useT();

  useEffect(() => {
    document.title = t.meta.title;
    document.documentElement.lang =
      lang === "ja" ? "ja" : lang === "zh" ? "zh-Hans" : lang === "zhTW" ? "zh-Hant" : lang;
  }, [lang, t]);

  const path = lang === "ja" ? "/" : lang === "zhTW" ? "/zh-tw" : `/${lang}`;
  const ogLocale =
    lang === "ja" ? "ja_JP"
    : lang === "en" ? "en_US"
    : lang === "zh" ? "zh_CN"
    : lang === "zhTW" ? "zh_TW"
    : "ko_KR";

  return (
    <div className="min-h-screen immersive" style={{ paddingTop: "var(--banner-offset, 0px)" }}>
      <Helmet>
        <html lang={lang} />
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <link rel="canonical" href={`${BASE}${path}`} />
        <meta property="og:title" content={t.meta.title} />
        <meta property="og:description" content={t.meta.description} />
        <meta property="og:url" content={`${BASE}${path}`} />
        <meta property="og:locale" content={ogLocale} />
        <meta property="og:image" content={`${BASE}/og-image.jpg`} />
        <meta name="twitter:image" content={`${BASE}/og-image.jpg`} />
        <link rel="alternate" hrefLang="ja" href={`${BASE}/`} />
        <link rel="alternate" hrefLang="en" href={`${BASE}/en`} />
        <link rel="alternate" hrefLang="zh-Hans" href={`${BASE}/zh`} />
        <link rel="alternate" hrefLang="zh-Hant" href={`${BASE}/zh-tw`} />
        <link rel="alternate" hrefLang="ko" href={`${BASE}/ko`} />
        <link rel="alternate" hrefLang="x-default" href={`${BASE}/`} />
      </Helmet>
      <Header />
      <HeroSection />
      <ConcernSection />
      <FeaturesSection />
      <NumbersSection />
      <TrainerSection />
      <TestimonialsSection />
      <PricingSection />
      <FlowSection />
      <CTASection />
      <FAQSection />
      <AccessSection />
      <Footer />
      <MobileCTABar />
    </div>
  );
};

export default Index;
