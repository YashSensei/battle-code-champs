<<<<<<< HEAD
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useParallax";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ranks = [
  {
    name: "Ashigaru",
    color: "from-indigo-400 to-purple-500",
    description: "Foot soldier — the path begins",
    minPoints: 0,
    icon: "足",
  },
  {
    name: "Shinobi",
    color: "from-indigo-300 to-purple-400",
    description: "Warrior bound by code",
    minPoints: 500,
    icon: "忍",
  },
  {
    name: "Rōnin",
    color: "from-indigo-200 to-purple-300",
    description: "Banner guard of the elite",
    minPoints: 1500,
    icon: "浪",
  },
  {
    name: "Hatamoto",
    color: "from-indigo-100 to-purple-200",
    description: "Lord of many battles",
    minPoints: 4000,
    icon: "旗",
  },
  {
    name: "Shōgun",
    color: "from-white to-indigo-100",
    description: "Supreme warlord of code",
    minPoints: 10000,
    icon: "将",
  },
];

const RanksSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const { ref: intersectionRef, hasIntersected } = useIntersectionObserver(0.2);

  const y = useSpring(useTransform(scrollYProgress, [0, 1], ["3%", "-3%"]));

  return (
    <motion.section
      ref={containerRef}
      id="ranks-section"
      className="relative py-32 overflow-hidden"
      style={{ y }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0F1A] via-[#0A0B14] to-[#050609] -z-10" />

      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full bg-gradient-to-r from-indigo-600/8 to-purple-600/8 blur-[120px] -z-10" />

      <motion.div
        ref={intersectionRef as any}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8"
      >
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light tracking-tighter text-white mb-6">
            Feudal Ranks of Honor
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto font-light leading-relaxed">
            Progress through the medieval Japanese hierarchy. Earn your crest.
=======
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
      
      console.log('Scroll Debug:', {
        rectTop: rect.top,
        rectBottom: rect.bottom,
        sectionHeight,
        windowHeight
      });
      
      // Calculate when section is in view
      const isInView = rect.top < windowHeight && rect.bottom > 0;
      
      if (isInView) {
        // Calculate scroll progress within the section
        // When rect.top is 0, we're at the start of the section
        // When rect.top is negative, we've scrolled into the section
        const scrolledIntoSection = Math.max(0, -rect.top);
        const maxScroll = sectionHeight - windowHeight;
        const sectionProgress = Math.min(1, scrolledIntoSection / maxScroll);
        
        console.log('Progress Debug:', {
          scrolledIntoSection,
          maxScroll,
          sectionProgress
        });
        
        setScrollProgress(sectionProgress);
        
        // Calculate which rank to show based on scroll progress
        const totalRanks = ranks.length;
        const rankIndex = Math.floor(sectionProgress * (totalRanks - 1));
        const clampedIndex = Math.max(0, Math.min(totalRanks - 1, rankIndex));
        
        console.log('Rank Debug:', {
          rankIndex,
          clampedIndex,
          currentRank: ranks[clampedIndex]?.name
        });
        
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
      style={{ height: `${ranks.length * 50}vh` }}
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
>>>>>>> refs/remotes/upstream/main
          </p>
        </motion.div>

<<<<<<< HEAD
        {/* Ranks grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {ranks.map((rank, index) => (
            <motion.div
              key={rank.name}
              initial={{ opacity: 0, y: 30 }}
              animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="glass-dark rounded-3xl p-8 shadow-2xl ring-1 ring-white/5 h-full text-center">
                {/* Rank Icon */}
                <div className="text-4xl mb-6 text-white/90 font-light">
                  {rank.icon}
                </div>

                {/* Crest badge */}
                <div className="mx-auto mb-8">
                  <div
                    className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${rank.color} shadow-2xl ring-1 ring-white/10 mx-auto`}
                  >
                    <div className="absolute inset-[2px] rounded-full bg-[#0A0B14]/80 backdrop-blur-md" />
                    <div className="relative w-full h-full flex items-center justify-center">
                      <span className="font-display text-lg font-medium text-white">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3
                    className={`text-2xl font-display font-medium mb-3 bg-gradient-to-r ${rank.color} bg-clip-text text-transparent`}
                  >
                    {rank.name}
                  </h3>
                  <p className="text-white/60 text-sm font-light mb-6 leading-relaxed">
                    {rank.description}
                  </p>
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 ring-1 ring-white/10 text-white/70 text-sm font-light">
                    {rank.minPoints === 0
                      ? "Starting Rank"
                      : `${rank.minPoints}+ points`}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Shogun card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-dark rounded-3xl p-12 shadow-2xl ring-1 ring-white/5 text-center relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-purple-600/10 to-transparent rounded-3xl" />

            <div className="relative z-10">
              <div className="text-6xl mb-8 text-white/90">将</div>
              <h3 className="text-5xl font-display font-light mb-4 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
                Shogun
              </h3>
              <p className="text-white/70 text-xl mb-8 font-light max-w-2xl mx-auto">
                The pinnacle of coding mastery. Supreme warlord commanding
                respect across all battlefields.
              </p>
              <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600/20 to-purple-600/20 ring-1 ring-white/10 text-indigo-200 text-lg font-light">
                10,000+ points required
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
=======
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
>>>>>>> refs/remotes/upstream/main
  );
};

export default RanksSection;
