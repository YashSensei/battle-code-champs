import { useRef, useMemo } from "react";
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
  const { ref: intersectionRef } = useIntersectionObserver(0.1);

  // Display ranks in ascending order (Ashigaru → Shōgun) - memoized for performance
  const timelineRanks = useMemo(
    () => [...ranks].sort((a, b) => a.rank - b.rank),
    []
  );

  return (
    <section id="ranks-section" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0F1A] via-[#0A0B14] to-[#050609] -z-10" />

      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full bg-gradient-to-r from-indigo-600/8 to-purple-600/8 blur-[120px] -z-10" />

      <div
        ref={intersectionRef as any}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-light tracking-tighter text-white mb-4 sm:mb-6">
            Climb the Code Dojo
          </h2>
          <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto font-light leading-relaxed px-4">
            Progress through the medieval Japanese hierarchy. From Ashigaru to
            Shogun.
          </p>
        </div>

        {/* Timeline Container - Mobile First */}
        <div className="relative">
          {/* Enhanced Vertical Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-0">
            <div className="w-[2px] h-full bg-gradient-to-b from-white/40 via-white/25 to-white/10 rounded-full" />
          </div>

          {/* Mobile Vertical Connecting Line */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-[2px] z-0">
            <div className="h-full bg-gradient-to-b from-white/40 via-white/25 to-white/10 rounded-full" />
          </div>

          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-16">
            {timelineRanks.map((rank, index) => (
              <div key={rank.name} className="relative">
                {/* Mobile Layout (Stack vertically) */}
                <div className="md:hidden">
                  <div className="relative bg-white/[0.05] rounded-3xl p-6 shadow-[0_12px_24px_rgba(0,0,0,0.15),0_4px_8px_rgba(0,0,0,0.1)] backdrop-blur-[24px] transform-gpu ml-16">
                    {/* Connecting line to timeline */}
                    <div className="absolute -left-16 top-8 w-16 h-[2px] bg-gradient-to-r from-white/40 to-transparent" />
                    {/* Mobile timeline node */}
                    <div
                      className="absolute -left-[4.5rem] top-6 w-12 h-12 rounded-2xl flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.2)] backdrop-blur-sm bg-white/[0.08]"
                      style={{ background: rank.orbBg, color: rank.orbColor }}
                    >
                      <div className="text-sm font-bold">{rank.icon}</div>
                    </div>
                    {/* Mobile Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-[0_8px_16px_rgba(0,0,0,0.15),0_2px_4px_rgba(0,0,0,0.1)] backdrop-blur-sm bg-white/[0.08] relative overflow-hidden"
                          style={{
                            background: rank.orbBg,
                            color: rank.orbColor,
                          }}
                        >
                          <div className="text-lg font-bold">{rank.icon}</div>
                        </div>
                        <div>
                          <span
                            className="text-xs font-medium px-3 py-1 rounded-full block mb-1 bg-white/[0.08] shadow-[0_2px_4px_rgba(0,0,0,0.1)] backdrop-blur-sm"
                            style={{ color: rank.titleColor }}
                          >
                            Level {rank.rank}
                          </span>
                          <h3
                            className="text-xl font-semibold tracking-wide"
                            style={{ color: rank.titleColor }}
                          >
                            {rank.name}
                          </h3>
                        </div>
                      </div>
                      <div className="text-2xl opacity-80">{rank.badge}</div>
                    </div>

                    {/* Description */}
                    <p className="text-white/60 text-sm leading-relaxed mb-6 font-light">
                      {rank.description}
                    </p>

                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-white/50 font-medium">
                          Progress
                        </span>
                        <span className="text-xs text-white/70 font-semibold">
                          {rank.rank}/5
                        </span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            background: rank.glowColors,
                            width: `${(rank.rank / 5) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout (Timeline) */}
                <div
                  className={`hidden md:flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-[0_12px_24px_rgba(0,0,0,0.2),0_4px_8px_rgba(0,0,0,0.1)] backdrop-blur-sm bg-white/[0.08] relative overflow-hidden"
                      style={{ background: rank.orbBg, color: rank.orbColor }}
                    >
                      <div className="text-xl font-bold z-10">{rank.icon}</div>
                    </div>
                  </div>

                  {/* Connector from node to card */}
                  <div
                    className={`hidden md:block absolute top-1/2 h-[2px] ${
                      index % 2 === 0
                        ? "right-[calc(50%+2.5rem)] w-14 bg-gradient-to-l from-white/50 to-transparent"
                        : "left-[calc(50%+2.5rem)] w-14 bg-gradient-to-r from-white/50 to-transparent"
                    }`}
                  />

                  {/* Content Card */}
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? "mr-auto pr-8" : "ml-auto pl-8"
                    }`}
                  >
                    <div className="relative rounded-3xl p-8 bg-white/[0.05] shadow-[0_20px_32px_rgba(0,0,0,0.15),0_8px_16px_rgba(0,0,0,0.1)] backdrop-blur-[24px] transform-gpu">
                      {/* Rank Level Indicator */}
                      <div className="flex items-center justify-between mb-6">
                        <span
                          className="text-sm font-medium px-4 py-1.5 rounded-full bg-white/[0.08] shadow-[0_2px_4px_rgba(0,0,0,0.1)] backdrop-blur-sm"
                          style={{ color: rank.titleColor }}
                        >
                          Level {rank.rank}
                        </span>
                        <div className="text-3xl opacity-80">{rank.badge}</div>
                      </div>

                      {/* Rank Name */}
                      <h3
                        className="text-3xl font-semibold mb-4 tracking-wide"
                        style={{ color: rank.titleColor }}
                      >
                        {rank.name}
                      </h3>

                      {/* Description */}
                      <p className="text-white/60 text-base leading-relaxed mb-6 font-light">
                        {rank.description}
                      </p>

                      {/* Progress Bar */}
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-white/50 font-medium">
                            Progress
                          </span>
                          <span className="text-sm text-white/70 font-semibold">
                            {rank.rank}/5
                          </span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{
                              background: rank.glowColors,
                              width: `${(rank.rank / 5) * 100}%`,
                            }}
                          />
                        </div>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RanksSection;
