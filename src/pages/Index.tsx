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
      "京都で安いパーソナルジムならSalute御所南｜1回¥4,000～・入会金¥0｜京都市中京区";
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
