import { useRef } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useParallax";
import { Badge } from "@/components/ui/badge";

const ranks = [
  {
    name: "Ashigaru",
    description: "Boots on the ground — ship code, learn fast.",
    icon: "足",
    rank: 1,
    orbBg: "linear-gradient(180deg, #2b1640, #180a2b)",
    orbColor: "#e9dcff",
    titleColor: "#b39dff",
    glowColors:
      "linear-gradient(90deg, rgba(125,85,255,0.9), rgba(80,40,170,0.6))",
    ringGradient:
      "radial-gradient(circle at 30% 20%, rgba(125,85,255,0.26), rgba(80,40,170,0.08) 45%, transparent 60%), linear-gradient(120deg, rgba(125,85,255,0.22), rgba(130,60,255,0.06))",
    badge: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" fill="currentColor" opacity="0.2" />
        <circle cx="16" cy="16" r="10" fill="currentColor" opacity="0.4" />
        <circle cx="16" cy="16" r="6" fill="currentColor" />
        <circle cx="16" cy="16" r="3" fill="#ffffff" opacity="0.8" />
      </svg>
    ),
  },
  {
    name: "Shinobi",
    description: "Ghost in the stack — stealthy, precise.",
    icon: "忍",
    rank: 2,
    orbBg: "linear-gradient(180deg, #082925, #06261f)",
    orbColor: "#d6fff0",
    titleColor: "#7eead6",
    glowColors:
      "linear-gradient(90deg, rgba(0,210,170,0.9), rgba(0,130,110,0.6))",
    ringGradient:
      "radial-gradient(circle at 60% 30%, rgba(0,210,170,0.16), rgba(0,130,110,0.06) 45%, transparent 60%), linear-gradient(120deg, rgba(0,210,170,0.12), rgba(0,120,120,0.03))",
    badge: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path
          d="M16 4L24 12L16 20L8 12L16 4Z"
          fill="currentColor"
          opacity="0.3"
        />
        <path d="M16 8L20 12L16 16L12 12L16 8Z" fill="currentColor" />
        <circle cx="16" cy="12" r="2" fill="#ffffff" opacity="0.9" />
      </svg>
    ),
  },
  {
    name: "Rōnin",
    description: "Lone wolf coder — sharp, unpredictable.",
    icon: "浪",
    rank: 3,
    orbBg: "linear-gradient(180deg, #2b1a0e, #1a0f07)",
    orbColor: "#fff3e6",
    titleColor: "#ffcc99",
    glowColors:
      "linear-gradient(90deg, rgba(255,180,90,0.9), rgba(220,120,30,0.6))",
    ringGradient:
      "radial-gradient(circle at 50% 20%, rgba(255,180,90,0.12), rgba(220,120,30,0.06) 45%, transparent 60%), linear-gradient(120deg, rgba(255,180,90,0.12), rgba(255,145,30,0.03))",
    badge: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path
          d="M8 8L24 8L20 16L24 24L8 24L12 16L8 8Z"
          fill="currentColor"
          opacity="0.3"
        />
        <path
          d="M12 12L20 12L18 16L20 20L12 20L14 16L12 12Z"
          fill="currentColor"
        />
        <rect x="14" y="14" width="4" height="4" fill="#ffffff" opacity="0.9" />
      </svg>
    ),
  },
  {
    name: "Hatamoto",
    description: "Flag-bearer — lead squads, set the tempo.",
    icon: "旗",
    rank: 4,
    orbBg: "linear-gradient(180deg, #071033, #041028)",
    orbColor: "#e9f3ff",
    titleColor: "#9ecfff",
    glowColors:
      "linear-gradient(90deg, rgba(80,160,255,0.9), rgba(40,100,220,0.6))",
    ringGradient:
      "radial-gradient(circle at 30% 30%, rgba(80,160,255,0.14), rgba(40,100,220,0.06) 45%, transparent 60%), linear-gradient(120deg, rgba(80,160,255,0.12), rgba(40,100,220,0.03))",
    badge: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path
          d="M16 4L26 8L22 16L26 24L16 28L6 24L10 16L6 8L16 4Z"
          fill="currentColor"
          opacity="0.3"
        />
        <path
          d="M16 8L22 10L20 16L22 22L16 24L10 22L12 16L10 10L16 8Z"
          fill="currentColor"
        />
        <circle cx="16" cy="16" r="3" fill="#ffffff" opacity="0.9" />
      </svg>
    ),
  },
  {
    name: "Shōgun",
    description: "Warlord of bytes — architect of legend.",
    icon: "将",
    rank: 5,
    orbBg: "linear-gradient(180deg, #2a0910, #16040a)",
    orbColor: "#fff0f6",
    titleColor: "#ff9bb1",
    glowColors:
      "linear-gradient(90deg, rgba(255,80,120,0.9), rgba(200,40,90,0.6))",
    ringGradient:
      "radial-gradient(circle at 50% 30%, rgba(255,80,120,0.16), rgba(200,40,90,0.06) 45%, transparent 60%), linear-gradient(120deg, rgba(255,80,120,0.12), rgba(180,30,80,0.03))",
    badge: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path
          d="M16 2L28 6L26 16L28 26L16 30L4 26L6 16L4 6L16 2Z"
          fill="currentColor"
          opacity="0.2"
        />
        <path
          d="M16 6L24 8L23 16L24 24L16 26L8 24L9 16L8 8L16 6Z"
          fill="currentColor"
          opacity="0.4"
        />
        <path
          d="M16 10L20 11L19 16L20 21L16 22L12 21L13 16L12 11L16 10Z"
          fill="currentColor"
        />
        <circle cx="16" cy="16" r="2" fill="#ffffff" />
        <path d="M14 13L18 13L18 19L14 19Z" fill="#ffffff" opacity="0.6" />
      </svg>
    ),
  },
];

const RanksSection = () => {
  const { ref: intersectionRef, hasIntersected } = useIntersectionObserver(0.1);

  // Reverse the ranks order so Shogun is at the top (highest) and Ashigaru at bottom (lowest)
  const timelineRanks = [...ranks].reverse();

  return (
    <motion.section id="ranks-section" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0F1A] via-[#0A0B14] to-[#050609] -z-10" />

      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full bg-gradient-to-r from-indigo-600/8 to-purple-600/8 blur-[120px] -z-10" />

      <motion.div
        ref={intersectionRef as any}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-light tracking-tighter text-white mb-4 sm:mb-6">
            Climb the Code Dojo
          </h2>
          <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto font-light leading-relaxed px-4">
            Progress through the medieval Japanese hierarchy. From Ashigaru to Shogun.
          </p>
        </motion.div>

        {/* Timeline Container - Mobile First */}
        <div className="relative">
          {/* Vertical Timeline Line - Hidden on mobile, visible on larger screens */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-white/20 via-white/10 to-white/5 rounded-full"></div>

          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-16">
            {timelineRanks.map((rank, index) => (
              <motion.div
                key={rank.name}
                initial={{ opacity: 0, y: 40 }}
                animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="relative"
              >
                {/* Mobile Layout (Stack vertically) */}
                <div className="md:hidden">
                  <div className="bg-gradient-to-b from-white/[0.08] to-white/[0.02] rounded-2xl p-4 sm:p-6 shadow-depth-lg backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                    {/* Mobile Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center shadow-depth-md border-2 border-white/10"
                          style={{
                            background: rank.orbBg,
                            color: rank.orbColor,
                          }}
                        >
                          <div className="text-lg font-bold">{rank.icon}</div>
                        </div>
                        <div>
                          <span 
                            className="text-xs font-medium px-2 py-1 rounded-full block mb-1"
                            style={{ 
                              background: `${rank.orbBg}40`,
                              color: rank.titleColor 
                            }}
                          >
                            Level {rank.rank}
                          </span>
                          <h3
                            className="text-lg font-bold tracking-wide"
                            style={{ color: rank.titleColor }}
                          >
                            {rank.name}
                          </h3>
                        </div>
                      </div>
                      <div className="text-xl opacity-80">{rank.badge}</div>
                    </div>

                    {/* Description */}
                    <p className="text-white/70 text-sm leading-relaxed mb-4">
                      {rank.description}
                    </p>

                    {/* Progress Indicator */}
                    <div className="flex items-center gap-1.5">
                      {[...Array(rank.rank)].map((_, i) => (
                        <div
                          key={i}
                          className="w-2 h-2 rounded-full"
                          style={{ background: rank.titleColor, opacity: 0.6 }}
                        />
                      ))}
                      {[...Array(5 - rank.rank)].map((_, i) => (
                        <div
                          key={i + rank.rank}
                          className="w-2 h-2 rounded-full bg-white/20"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Desktop Layout (Timeline) */}
                <div className={`hidden md:flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}>
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center shadow-depth-md border-4 border-white/10"
                      style={{
                        background: rank.orbBg,
                        color: rank.orbColor,
                      }}
                    >
                      <div className="text-xl font-bold">{rank.icon}</div>
                    </div>
                    
                    {/* Glow effect */}
                    <div
                      className="absolute inset-0 rounded-full blur-md opacity-50 -z-10"
                      style={{ background: rank.glowColors }}
                    />
                  </div>

                  {/* Content Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? "mr-auto pr-8" : "ml-auto pl-8"}`}>
                    <div className="bg-gradient-to-b from-white/[0.08] to-white/[0.02] rounded-2xl p-6 shadow-depth-lg backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                      {/* Rank Level Indicator */}
                      <div className="flex items-center justify-between mb-4">
                        <span 
                          className="text-sm font-medium px-3 py-1 rounded-full"
                          style={{ 
                            background: `${rank.orbBg}40`,
                            color: rank.titleColor 
                          }}
                        >
                          Level {rank.rank}
                        </span>
                        <div className="text-2xl opacity-80">{rank.badge}</div>
                      </div>

                      {/* Rank Name */}
                      <h3
                        className="text-2xl font-bold mb-3 tracking-wide"
                        style={{ color: rank.titleColor }}
                      >
                        {rank.name}
                      </h3>

                      {/* Description */}
                      <p className="text-white/70 text-sm leading-relaxed">
                        {rank.description}
                      </p>

                      {/* Progress Indicator */}
                      <div className="mt-4 flex items-center gap-2">
                        {[...Array(rank.rank)].map((_, i) => (
                          <div
                            key={i}
                            className="w-2 h-2 rounded-full"
                            style={{ background: rank.titleColor, opacity: 0.6 }}
                          />
                        ))}
                        {[...Array(5 - rank.rank)].map((_, i) => (
                          <div
                            key={i + rank.rank}
                            className="w-2 h-2 rounded-full bg-white/20"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Achievement Badge for Shogun */}
                  {rank.name === "Shōgun" && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 text-yellow-300 px-4 py-2 rounded-full text-xs font-medium border border-yellow-400/30">
                        ⚡ Master Rank
                      </div>
                    </div>
                  )}
                </div>

                {/* Achievement Badge for Shogun - Mobile */}
                {rank.name === "Shōgun" && (
                  <div className="md:hidden mt-3 text-center">
                    <div className="inline-block bg-gradient-to-r from-yellow-400/20 to-orange-400/20 text-yellow-300 px-3 py-1 rounded-full text-xs font-medium border border-yellow-400/30">
                      ⚡ Master Rank
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default RanksSection;
