import { useEffect } from "react";
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

const Index = () => {
  useEffect(() => {
    document.title =
      "京都市中京区の格安パーソナルジムならSalute御所南｜無料体験実施中｜河原町丸太町";
  }, []);

  return (
    <div className="min-h-screen" style={{ paddingTop: "var(--banner-offset, 0px)" }}>
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
