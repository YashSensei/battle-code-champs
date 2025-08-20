import { useEffect, useState } from 'react';
import { useParallax } from '@/hooks/useParallax';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ranks = [
  { name: 'Silver', color: 'from-gray-400 to-gray-500', description: 'Your coding journey begins', minPoints: 0 },
  { name: 'Gold', color: 'from-yellow-400 to-yellow-600', description: 'Rising through the ranks', minPoints: 500 },
  { name: 'Platinum', color: 'from-cyan-400 to-cyan-600', description: 'Elite programmer status', minPoints: 1000 },
  { name: 'Diamond', color: 'from-blue-400 to-blue-600', description: 'Exceptional coding skills', minPoints: 2000 },
  { name: 'Dominator', color: 'from-purple-400 to-purple-600', description: 'Fear-inducing presence', minPoints: 5000 },
  { name: 'Crusher', color: 'from-red-400 to-red-600', description: 'Unstoppable force of code', minPoints: 10000 },
  { name: 'King', color: 'from-neon-blue via-neon-purple to-neon-cyan', description: 'Ultimate coding supremacy', minPoints: 25000 }
];

const RanksSection = () => {
  const scrollY = useParallax();
  const [isVisible, setIsVisible] = useState(false);
  const [animatedRanks, setAnimatedRanks] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('ranks-section');
      if (element) {
        const rect = element.getBoundingClientRect();
        const visible = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(visible);
        
        if (visible && animatedRanks.length === 0) {
          // Stagger rank animations
          ranks.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedRanks(prev => [...prev, index]);
            }, index * 200);
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animatedRanks.length]);

  return (
    <section 
      id="ranks-section"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
    >
      {/* Parallax Background */}
      <div 
        className="absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <div className="absolute top-10 left-10 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-cyan/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-blue bg-clip-text text-transparent">
            Rise Through the Ranks
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every battle brings you closer to greatness. Climb the competitive ladder and prove your coding supremacy across seven legendary ranks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ranks.map((rank, index) => (
            <Card 
              key={rank.name}
              className={`p-6 bg-card/30 backdrop-blur-sm border-border hover:border-neon-blue transition-all duration-700 transform ${
                animatedRanks.includes(index) ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'
              } ${rank.name === 'King' ? 'md:col-span-2 lg:col-span-3 xl:col-span-4' : ''}`}
            >
              <div className={`text-center ${rank.name === 'King' ? 'py-8' : ''}`}>
                {/* Rank Badge */}
                <div className={`w-16 h-16 ${rank.name === 'King' ? 'w-24 h-24' : ''} bg-gradient-to-r ${rank.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-glow-pulse`}>
                  <span className={`font-bold text-background ${rank.name === 'King' ? 'text-2xl' : 'text-lg'}`}>
                    {rank.name === 'King' ? '👑' : index + 1}
                  </span>
                </div>

                {/* Rank Name */}
                <h3 className={`font-bold mb-2 bg-gradient-to-r ${rank.color} bg-clip-text text-transparent ${rank.name === 'King' ? 'text-4xl' : 'text-2xl'}`}>
                  {rank.name}
                </h3>

                {/* Description */}
                <p className={`text-muted-foreground mb-4 ${rank.name === 'King' ? 'text-lg' : 'text-sm'}`}>
                  {rank.description}
                </p>

                {/* Points Requirement */}
                <Badge variant="outline" className={`border-border ${rank.name === 'King' ? 'text-lg px-4 py-2' : ''}`}>
                  {rank.minPoints === 0 ? 'Starting Rank' : `${rank.minPoints}+ points`}
                </Badge>

                {rank.name === 'King' && (
                  <div className="mt-6">
                    <p className="text-lg text-neon-cyan font-semibold">
                      The ultimate achievement in competitive programming
                    </p>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{ transitionDelay: '1.4s' }}>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Each rank represents mastery, dedication, and countless hours of competitive programming excellence. 
            Will you have what it takes to wear the crown?
          </p>
        </div>
      </div>
    </section>
  );
};

export default RanksSection;