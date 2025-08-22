import { memo } from "react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const FeatureCard = memo(
  ({
    children,
    className = "",
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div
        className={`glass-dark glass-hover rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-depth-lg backdrop-blur-xl ${className}`}
        style={{
          contain: "layout style paint",
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      >
        {children}
      </div>
    );
  }
);

FeatureCard.displayName = "FeatureCard";

const FeaturesSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);
  const { ref: cardsRef, visibleItems } = useStaggeredAnimation(6, 150);

  const features = [
    {
      title: "Real-Time Code Battles",
      description: "Face off against developers worldwide in live coding duels. Every algorithm matters, every optimization counts.",
      gradient: "from-blue-500/20 to-purple-600/20",
      border: "border-blue-500/30",
    },
    {
      title: "Medieval Ranking System", 
      description: "Climb from Ashigaru to Shōgun through our unique Japanese hierarchy. Honor your code, honor your rank.",
      gradient: "from-amber-500/20 to-orange-600/20",
      border: "border-amber-500/30",
    },
    {
      title: "Global Leaderboards",
      description: "Compete for glory on worldwide rankings. See how your skills stack up against the best coders on Earth.",
      gradient: "from-green-500/20 to-emerald-600/20", 
      border: "border-green-500/30",
    },
    {
      title: "Algorithm Challenges",
      description: "Master data structures, dynamic programming, and complex algorithms through progressively difficult challenges.",
      gradient: "from-red-500/20 to-pink-600/20",
      border: "border-red-500/30",
    },
    {
      title: "Code Review & Analysis",
      description: "Get detailed feedback on your solutions. Learn from defeats, optimize your victories.",
      gradient: "from-indigo-500/20 to-blue-600/20",
      border: "border-indigo-500/30", 
    },
    {
      title: "Community Tournaments",
      description: "Join massive tournaments with hundreds of participants. Forge alliances, make rivals, build your legend.",
      gradient: "from-purple-500/20 to-violet-600/20",
      border: "border-purple-500/30",
    }
  ];

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 -mt-1">
      {/* Blended background gradient - transitions from hero to points section */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0F1A] via-[#0A0B14] to-[#0F1117] -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header - Responsive */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-light tracking-tighter text-white mb-4 sm:mb-6">
            Powerful building blocks
          </h2>
          <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto font-light leading-relaxed px-4">
            Everything you need for a competitive programming arena, crafted
            with modern design and cutting-edge technology.
          </p>
        </div>

        {/* Masonry grid layout - Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          {/* AI Challenge Handling - Large card - Responsive */}
          <FeatureCard className="lg:col-span-7">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-indigo-600/30 to-purple-600/30 flex items-center justify-center shadow-depth-md flex-shrink-0">
                <svg
                  width="20"
                  height="20"
                  className="sm:w-6 sm:h-6 lg:w-7 lg:h-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 2A2.5 2.5 0 0 0 7 4.5V7H4.5A2.5 2.5 0 0 0 2 9.5V16.5A2.5 2.5 0 0 0 4.5 19H7V21.5A2.5 2.5 0 0 0 9.5 24H16.5A2.5 2.5 0 0 0 19 21.5V19H21.5A2.5 2.5 0 0 0 24 16.5V9.5A2.5 2.5 0 0 0 21.5 7H19V4.5A2.5 2.5 0 0 0 16.5 2H9.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-indigo-300"
                  />
                  <path
                    d="M12 8L14 10L12 12L10 10L12 8Z"
                    fill="currentColor"
                    className="text-indigo-300"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-display font-medium text-white mb-2 sm:mb-3">
                  AI Challenge Handling
                </h3>
                <p className="text-white/70 text-sm sm:text-base lg:text-lg font-light leading-relaxed">
                  Upload or paste problems; we auto-generate comprehensive tests
                  and validate solutions with intelligent analysis.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                { label: "Unit Tests", icon: "✓", color: "text-emerald-400" },
                { label: "Edge Cases", icon: "⚡", color: "text-yellow-400" },
                { label: "Time Limits", icon: "⏱", color: "text-blue-400" },
                { label: "Auto Scoring", icon: "🎯", color: "text-purple-400" },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-depth-sm bg-gradient-to-br from-indigo-600/15 to-purple-600/15`}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span
                      className={`text-base sm:text-lg ${item.color} flex-shrink-0`}
                    >
                      {item.icon}
                    </span>
                    <span className="text-white font-medium text-sm sm:text-base">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </FeatureCard>

          {/* Real-time Duels - Medium card */}
          <FeatureCard className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600/30 to-indigo-600/30 flex items-center justify-center shadow-depth-sm">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-300"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-display font-medium text-white">
                Real-time Duels
              </h3>
            </div>
            <p className="text-white/70 font-light leading-relaxed mb-6">
              Head-to-head matches with instant scoring, fair time controls, and
              clean code diff views.
            </p>
            <div className="bg-gradient-to-br from-indigo-600/10 to-purple-600/10 rounded-2xl p-6 shadow-depth-sm">
              <div className="text-sm text-white/60 font-light italic mb-4">
                "Start a 10-minute Python duel — Data Structures category"
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  <span className="text-xs text-white/50">
                    Live match ready
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-500/30 flex items-center justify-center shadow-depth-sm">
                    <span className="text-xs text-white">VS</span>
                  </div>
                </div>
              </div>
            </div>
          </FeatureCard>

          {/* Multi-platform - Compact card */}
          <FeatureCard className="lg:col-span-4">
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600/30 to-purple-600/30 flex items-center justify-center mx-auto mb-4 shadow-depth-sm">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2"
                    y="3"
                    width="20"
                    height="14"
                    rx="2"
                    ry="2"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-indigo-300"
                  />
                  <line
                    x1="8"
                    y1="21"
                    x2="16"
                    y2="21"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-indigo-300"
                  />
                  <line
                    x1="12"
                    y1="17"
                    x2="12"
                    y2="21"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-indigo-300"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-display font-medium text-white mb-3">
                Multi-platform
              </h3>
              <p className="text-white/70 text-sm font-light leading-relaxed mb-6">
                Battle on desktop, tablet, or phone. State sync keeps your
                focus.
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-8 rounded bg-gradient-to-br from-purple-600/30 to-indigo-600/30 relative shadow-depth-sm">
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-white/20 rounded-t"></div>
                  </div>
                  <span className="text-xs text-white/40">Desktop</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-8 h-11 rounded bg-gradient-to-br from-indigo-600/30 to-purple-600/30 relative shadow-depth-sm">
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-white/20"></div>
                  </div>
                  <span className="text-xs text-white/40">Tablet</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-6 h-10 rounded bg-gradient-to-br from-purple-600/30 to-indigo-600/30 relative shadow-depth-sm">
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-white/20"></div>
                  </div>
                  <span className="text-xs text-white/40">Mobile</span>
                </div>
              </div>
            </div>
          </FeatureCard>

          {/* Personalized - Wide card */}
          <FeatureCard className="lg:col-span-8">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600/30 to-indigo-600/30 flex items-center justify-center shadow-depth-sm">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-purple-300"
                      />
                      <circle
                        cx="12"
                        cy="7"
                        r="4"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-purple-300"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-medium text-white">
                      Personalized for you
                    </h3>
                    <p className="text-white/70 font-light">
                      Pick languages, difficulty bands, and formats. Save custom
                      presets.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-3 lg:w-64">
                {[
                  { label: "JS", color: "from-yellow-500/25 to-orange-500/25" },
                  { label: "PY", color: "from-blue-500/25 to-indigo-500/25" },
                  { label: "C++", color: "from-cyan-500/25 to-blue-500/25" },
                  { label: "JAVA", color: "from-red-500/25 to-orange-500/25" },
                  { label: "GO", color: "from-cyan-400/25 to-blue-400/25" },
                  { label: "RUST", color: "from-orange-600/25 to-red-600/25" },
                  { label: "TS", color: "from-blue-600/25 to-indigo-600/25" },
                  { label: "C#", color: "from-purple-500/25 to-indigo-500/25" },
                ].map((lang) => (
                  <div
                    key={lang.label}
                    className={`aspect-square rounded-xl bg-gradient-to-br ${lang.color} flex items-center justify-center shadow-depth-sm`}
                  >
                    <span className="text-xs font-medium text-white/80">
                      {lang.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
