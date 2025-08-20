import HeroSection from '@/components/HeroSection';
import PointsSection from '@/components/PointsSection';
import RanksSection from '@/components/RanksSection';
import ComingSoonSection from '@/components/ComingSoonSection';

const Index = () => {
  return (
    <main className="bg-background text-foreground">
      <HeroSection />
      <PointsSection />
      <RanksSection />
      <ComingSoonSection />
    </main>
  );
};

export default Index;
