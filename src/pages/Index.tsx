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
      "京都市中京区で安いパーソナルジムならSalute 御所南｜無料体験実施中｜河原町丸太町";
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
