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
          </p>
        </motion.div>

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
  );
};

export default RanksSection;
