import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TrainerSection from "@/components/TrainerSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import AccessSection from "@/components/AccessSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";

const Index = () => {
  useEffect(() => {
    document.title =
      "京都で安いパーソナルジムなら御所南のSalute｜無料体験実施中・1回¥4,000～｜中京区";

    const description =
      "京都市中京区・御所南のパーソナルジムSalute御所南。無料体験実施中！京都で安いパーソナルジムをお探しの方へ。1回¥4,000～・入会金¥0・手ぶらOK。栄養士トレーナーが完全マンツーマンで指導。初心者歓迎、まずは無料体験へ。丸太町駅徒歩8分。";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <TrainerSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <AccessSection />
      <CTASection />
      <Footer />
      <MobileCTABar />
    </div>
  );
};

export default Index;
