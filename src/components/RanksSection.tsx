import { useEffect, useState, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ranks = [
  { name: 'Silver', symbol: '🥈', color: 'from-gray-400 to-gray-500', bgColor: 'bg-gray-500/10', borderColor: 'border-gray-400/30', description: 'Your coding journey begins', minPoints: 0 },
  { name: 'Gold', symbol: '🥇', color: 'from-yellow-400 to-yellow-600', bgColor: 'bg-yellow-500/10', borderColor: 'border-yellow-400/30', description: 'Rising through the ranks', minPoints: 500 },
  { name: 'Platinum', symbol: '💎', color: 'from-cyan-400 to-cyan-600', bgColor: 'bg-cyan-500/10', borderColor: 'border-cyan-400/30', description: 'Elite programmer status', minPoints: 1000 },
  { name: 'Diamond', symbol: '💠', color: 'from-blue-400 to-blue-600', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-400/30', description: 'Exceptional coding skills', minPoints: 2000 },
  { name: 'Dominator', symbol: '⚡', color: 'from-purple-400 to-purple-600', bgColor: 'bg-purple-500/10', borderColor: 'border-purple-400/30', description: 'Fear-inducing presence', minPoints: 5000 },
  { name: 'Crusher', symbol: '💥', color: 'from-red-400 to-red-600', bgColor: 'bg-red-500/10', borderColor: 'border-red-400/30', description: 'Unstoppable force of code', minPoints: 10000 },
  { name: 'King', symbol: '👑', color: 'from-neon-blue via-neon-purple to-neon-cyan', bgColor: 'bg-neon-blue/10', borderColor: 'border-neon-blue/30', description: 'Ultimate coding supremacy', minPoints: 25000 }
];

const RanksSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentRankIndex, setCurrentRankIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Calculate when section is in view
      const isInView = rect.top < windowHeight && rect.bottom > 0;
      
      if (isInView) {
        // Calculate scroll progress within the section
        const sectionStart = -rect.top;
        const sectionProgress = Math.max(0, Math.min(1, sectionStart / (sectionHeight - windowHeight)));
        
        setScrollProgress(sectionProgress);
        
        // Calculate which rank to show based on scroll progress
        const rankIndex = Math.floor(sectionProgress * ranks.length);
        const clampedIndex = Math.max(0, Math.min(ranks.length - 1, rankIndex));
        setCurrentRankIndex(clampedIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentRank = ranks[currentRankIndex];

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ height: `${ranks.length * 100}vh` }}
    >
      {/* Fixed content container */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background">
          <div className="absolute top-20 left-20 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-cyan/3 rounded-full blur-3xl" />
        </div>

        {/* Header */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center z-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-blue bg-clip-text text-transparent">
            Rise Through the Ranks
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Every battle brings you closer to greatness. Scroll to explore the competitive ladder.
          </p>
        </div>

        {/* Rank Progress Indicator */}
        <div className="absolute top-1/2 left-8 transform -translate-y-1/2 z-20">
          <div className="flex flex-col space-y-4">
            {ranks.map((rank, index) => (
              <div
                key={rank.name}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  index === currentRankIndex 
                    ? `bg-gradient-to-r ${rank.color} scale-150 shadow-lg` 
                    : index < currentRankIndex 
                      ? 'bg-neon-blue/50' 
                      : 'bg-border'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Main Rank Card */}
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <Card className={`p-12 ${currentRank.bgColor} backdrop-blur-sm ${currentRank.borderColor} border-2 transform transition-all duration-700 hover:scale-105`}>
            <div className="text-center">
              {/* Rank Symbol */}
              <div className="text-8xl mb-6 animate-glow-pulse">
                {currentRank.symbol}
              </div>

              {/* Rank Name */}
              <h3 className={`text-5xl font-bold mb-4 bg-gradient-to-r ${currentRank.color} bg-clip-text text-transparent`}>
                {currentRank.name}
              </h3>

              {/* Description */}
              <p className="text-xl text-muted-foreground mb-6">
                {currentRank.description}
              </p>

              {/* Points Requirement */}
              <Badge 
                variant="outline" 
                className={`text-lg px-6 py-2 ${currentRank.borderColor} border-2`}
              >
                {currentRank.minPoints === 0 ? 'Starting Rank' : `${currentRank.minPoints}+ points`}
              </Badge>

              {/* Special King Message */}
              {currentRank.name === 'King' && (
                <div className="mt-8 p-6 bg-neon-blue/10 border border-neon-blue/30 rounded-lg">
                  <p className="text-xl text-neon-cyan font-semibold">
                    👑 The ultimate achievement in competitive programming 👑
                  </p>
                  <p className="text-neon-blue/80 mt-2">
                    Only the most skilled warriors reach this legendary status
                  </p>
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* Bottom instruction */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center z-20">
          <p className="text-sm text-muted-foreground mb-2">
            Rank {currentRankIndex + 1} of {ranks.length}
          </p>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span className="text-xs">Keep scrolling to explore all ranks</span>
            <div className="animate-bounce">↓</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RanksSection;