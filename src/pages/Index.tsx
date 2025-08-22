import { useRef } from "react";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PointsSection from "@/components/PointsSection";
import RanksSection from "@/components/RanksSection";
import ComingSoonSection from "@/components/ComingSoonSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="min-h-screen relative">
      {/* Static gradient background */}
      <div
        className="fixed inset-0 -z-50"
        style={{
          background:
            "linear-gradient(135deg, #0A0B14 0%, #0D0F1A 50%, #050609 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main className="relative">
          <HeroSection />
          <FeaturesSection />
          <PointsSection />
          <RanksSection />
          <ComingSoonSection />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
