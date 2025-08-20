import { useEffect, useState } from 'react';
import { useParallax } from '@/hooks/useParallax';
import { Card } from '@/components/ui/card';

const PointsSection = () => {
  const scrollY = useParallax();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('points-section');
      if (element) {
        const rect = element.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight && rect.bottom > 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="points-section"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
    >
      {/* Parallax Background Elements */}
      <div 
        className="absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <div className="absolute top-20 right-20 w-64 h-64 bg-neon-purple/10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-neon-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
            Power Up Your Skills
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Sign Up Bonus */}
          <Card className={`p-8 bg-card/50 backdrop-blur-sm border-border hover:border-neon-blue transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{ transitionDelay: '0.2s' }}>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold">100</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-neon-blue">Welcome Bonus</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sign up with your account and instantly receive <span className="text-neon-cyan font-semibold">100 points</span> to kickstart your coding journey!
              </p>
            </div>
          </Card>

          {/* Win Points */}
          <Card className={`p-8 bg-card/50 backdrop-blur-sm border-border hover:border-neon-purple transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{ transitionDelay: '0.4s' }}>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold">+10</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-neon-purple">Victory Rewards</h3>
              <p className="text-muted-foreground leading-relaxed">
                Dominate your opponents and earn <span className="text-neon-purple font-semibold">+10 points</span> for every successful duel victory!
              </p>
            </div>
          </Card>

          {/* Loss Points */}
          <Card className={`p-8 bg-card/50 backdrop-blur-sm border-border hover:border-neon-pink transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{ transitionDelay: '0.6s' }}>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-neon-pink to-destructive rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold">-10</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-neon-pink">Learn from Defeat</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every loss costs <span className="text-neon-pink font-semibold">-10 points</span>, but brings you closer to mastery. Rise stronger!
              </p>
            </div>
          </Card>
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{ transitionDelay: '0.8s' }}>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Participate in matches, compete with the best, and watch your points soar as you climb the leaderboards in the most competitive coding environment ever created.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PointsSection;