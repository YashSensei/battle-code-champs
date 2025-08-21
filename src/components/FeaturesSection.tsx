import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useParallax";

const FeatureCard = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const { ref: intersectionRef, hasIntersected } = useIntersectionObserver(0.1);

  return (
    <motion.div
      ref={intersectionRef as any}
      initial={{ opacity: 0 }}
      animate={hasIntersected ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={`glass-dark rounded-3xl p-8 shadow-2xl ring-1 ring-white/5 backdrop-blur-xl ${className}`}
    >
      {children}
    </motion.div>
  );
};

const FeaturesSection = () => {
  const { ref: intersectionRef, hasIntersected } = useIntersectionObserver(0.2);

  return (
    <section className="relative py-32 -mt-1">
      {/* Blended background gradient - transitions from hero to points section */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0F1A] via-[#0A0B14] to-[#0F1117] -z-10" />

      <motion.div
        ref={intersectionRef as any}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={hasIntersected ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light tracking-tighter text-white mb-6">
            Powerful building blocks
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto font-light leading-relaxed">
            Everything you need for a competitive programming arena, crafted
            with modern design and cutting-edge technology.
          </p>
        </motion.div>

        {/* Masonry grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* AI Challenge Handling - Large card */}
          <FeatureCard delay={0.1} className="lg:col-span-7">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600/30 to-purple-600/30 ring-1 ring-white/10 flex items-center justify-center shadow-xl">
                <svg
                  width="28"
                  height="28"
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
              <div>
                <h3 className="text-2xl font-display font-medium text-white mb-3">
                  AI Challenge Handling
                </h3>
                <p className="text-white/70 text-lg font-light leading-relaxed">
                  Upload or paste problems; we auto-generate comprehensive tests
                  and validate solutions with intelligent analysis.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Unit Tests", icon: "✓", color: "text-emerald-400" },
                { label: "Edge Cases", icon: "⚡", color: "text-yellow-400" },
                { label: "Time Limits", icon: "⏱", color: "text-blue-400" },
                { label: "Auto Scoring", icon: "🎯", color: "text-purple-400" },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className={`rounded-2xl p-4 ring-1 ring-white/10 ${
                    index % 2 === 0
                      ? "bg-gradient-to-br from-indigo-600/15 to-purple-600/15"
                      : "bg-gradient-to-br from-purple-600/15 to-indigo-600/15"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-lg ${item.color}`}>{item.icon}</span>
                    <span className="text-white font-medium">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </FeatureCard>

          {/* Real-time Duels - Medium card */}
          <FeatureCard delay={0.2} className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600/30 to-indigo-600/30 ring-1 ring-white/10 flex items-center justify-center">
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
            <div className="bg-gradient-to-br from-indigo-600/10 to-purple-600/10 rounded-2xl ring-1 ring-white/10 p-6">
              <div className="text-sm text-white/60 font-light italic mb-4">
                "Start a 10-minute Python duel — Data Structures category"
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                  <span className="text-xs text-white/50">
                    Live match ready
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-500/30 ring-1 ring-white/20 flex items-center justify-center">
                    <span className="text-xs text-white">VS</span>
                  </div>
                </div>
              </div>
            </div>
          </FeatureCard>

          {/* Multi-platform - Compact card */}
          <FeatureCard delay={0.3} className="lg:col-span-4">
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600/30 to-purple-600/30 ring-1 ring-white/10 flex items-center justify-center mx-auto mb-4">
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
                {/* Desktop */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-8 rounded bg-gradient-to-br from-purple-600/30 to-indigo-600/30 ring-1 ring-white/10 relative">
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-white/20 rounded-t"></div>
                  </div>
                  <span className="text-xs text-white/40">Desktop</span>
                </div>
                {/* Tablet */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-8 h-11 rounded bg-gradient-to-br from-indigo-600/30 to-purple-600/30 ring-1 ring-white/10 relative">
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-white/20"></div>
                  </div>
                  <span className="text-xs text-white/40">Tablet</span>
                </div>
                {/* Mobile */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-6 h-10 rounded bg-gradient-to-br from-purple-600/30 to-indigo-600/30 ring-1 ring-white/10 relative">
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-white/20"></div>
                  </div>
                  <span className="text-xs text-white/40">Mobile</span>
                </div>
              </div>
            </div>
          </FeatureCard>

          {/* Personalized - Wide card */}
          <FeatureCard delay={0.4} className="lg:col-span-8">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600/30 to-indigo-600/30 ring-1 ring-white/10 flex items-center justify-center">
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
                ].map((lang, i) => (
                  <div
                    key={lang.label}
                    className={`aspect-square rounded-xl bg-gradient-to-br ${lang.color} ring-1 ring-white/10 flex items-center justify-center`}
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
      </motion.div>
    </section>
  );
};

export default FeaturesSection;
