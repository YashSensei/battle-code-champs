import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PointsSection from "@/components/PointsSection";
import RanksSection from "@/components/RanksSection";
import ComingSoonSection from "@/components/ComingSoonSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Dynamic gradient colors that change based on scroll
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "linear-gradient(135deg, #0A0B14 0%, #0D0F1A 50%, #050609 100%)",
      "linear-gradient(135deg, #0D0F1A 0%, #0A0B14 50%, #0E1424 100%)",
      "linear-gradient(135deg, #0A0B14 0%, #050609 50%, #0D0F1A 100%)",
      "linear-gradient(135deg, #050609 0%, #0E1424 50%, #0A0B14 100%)",
      "linear-gradient(135deg, #0E1424 0%, #0A0B14 50%, #050609 100%)",
      "linear-gradient(135deg, #020306 0%, #050609 50%, #0A0B14 100%)",
    ]
  );

  // Floating orbs that move with scroll
  const orb1Y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const orb3Y = useTransform(scrollYProgress, [0, 1], ["50%", "-50%"]);

  const orb1Opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.3, 0.1, 0.4]
  );
  const orb2Opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.2, 0.4, 0.2, 0.3]
  );
  const orb3Opacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.8, 1],
    [0.4, 0.2, 0.5, 0.2]
  );

  return (
    <div ref={containerRef} className="min-h-screen relative">
      {/* Live gradient background */}
      <motion.div
        className="fixed inset-0 -z-50"
        style={{ background: backgroundColor }}
      />

      {/* Animated gradient orbs */}
      <motion.div
        className="fixed w-[800px] h-[800px] rounded-full blur-[120px] -z-40"
        style={{
          background:
            "radial-gradient(closest-side, rgba(99,102,241,0.4), rgba(147,51,234,0.2), transparent 70%)",
          left: "10%",
          y: orb1Y,
          opacity: orb1Opacity,
        }}
      />

      <motion.div
        className="fixed w-[600px] h-[600px] rounded-full blur-[100px] -z-40"
        style={{
          background:
            "radial-gradient(closest-side, rgba(147,51,234,0.4), rgba(236,72,153,0.2), transparent 70%)",
          right: "10%",
          y: orb2Y,
          opacity: orb2Opacity,
        }}
      />

      <motion.div
        className="fixed w-[700px] h-[700px] rounded-full blur-[140px] -z-40"
        style={{
          background:
            "radial-gradient(closest-side, rgba(59,130,246,0.3), rgba(99,102,241,0.2), transparent 70%)",
          left: "50%",
          transform: "translateX(-50%)",
          y: orb3Y,
          opacity: orb3Opacity,
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
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
