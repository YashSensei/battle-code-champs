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

  return (
    <section id="ranks-section" className="relative py-32 overflow-hidden">
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
          initial={{ opacity: 0, y: 30 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light tracking-tighter text-white mb-6">
            Climb the Code Dojo
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto font-light leading-relaxed">
            Climb the digital shogunate. Only the strongest endure.
          </p>
        </motion.div>

        {/* Ranks grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {ranks.map((rank, index) => (
            <motion.div
              key={rank.name}
              initial={{ opacity: 0, y: 40 }}
              animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gradient-to-b from-white/[0.02] to-white/[0.01] rounded-[18px] p-7 shadow-depth-lg h-full text-center relative overflow-visible">
                {/* Japanese glyph */}
                <div className="text-[28px] mb-[18px] opacity-95 tracking-wider">
                  {rank.icon}
                </div>

                {/* Rank Badge/Orb */}
                <div className="relative mx-auto mb-4">
                  {/* Glowing ring */}
                  <div
                    className="absolute inset-[-8px] rounded-full blur-[12px] opacity-95 z-0"
                    style={{ background: rank.ringGradient }}
                  />

                  {/* Main orb with badge */}
                  <div
                    className="relative w-[84px] h-[84px] rounded-full grid place-items-center font-bold text-lg z-10 mx-auto shadow-depth-md"
                    style={{
                      background: rank.orbBg,
                      color: rank.orbColor,
                    }}
                  >
                    {rank.badge}
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-bold mb-[6px] tracking-wide"
                  style={{ color: rank.titleColor }}
                >
                  {rank.name}
                </h3>

                {/* Description */}
                <p className="text-[13px] text-white/60 mb-[14px] leading-relaxed">
                  {rank.description}
                </p>

                {/* Bottom glow effect */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 bottom-[-20px] w-[70%] h-[46px] rounded-full opacity-[0.06] blur-[18px] pointer-events-none z-[1]"
                  style={{ background: rank.glowColors }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Shogun card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full"
        >
          <div className="bg-gradient-to-b from-white/[0.02] to-white/[0.01] rounded-3xl p-12 shadow-depth-xl text-center relative overflow-hidden">
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
              <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600/20 to-purple-600/20 text-indigo-200 text-lg font-light shadow-depth-md">
                10,000+ points required
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default RanksSection;
