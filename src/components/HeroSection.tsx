import { useIntersectionObserver } from "@/hooks/useParallax";

const HeroSection = () => {
  const { ref: intersectionRef } = useIntersectionObserver(0.1);

  return (
    <section
      ref={intersectionRef as any}
      className="relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Background with enhanced gradients - same as ComingSoonSection */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050609] via-[#0A0B14] to-[#0D0F1A] -z-10" />

      {/* Multiple background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] rounded-full bg-gradient-to-r from-indigo-600/15 to-purple-600/15 blur-[140px] -z-10" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradie¸nt-to-tl from-blue-500/12 to-indigo-500/12 blur-[80px] -z-10" />

      <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center relative z-10 py-32">
        {/* Main heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-light tracking-tighter text-white mb-8 leading-[0.9]">
          Master Code.
          <br />
          <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-400 bg-clip-text text-transparent font-medium">
            Beat Rivals.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/60 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
          The ultimate platform for competitive programming duels. Clean code,
          fair battles, instant results.
        </p>

        {/* Feature preview cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1: Challenge Engine */}
          <div className="glass-dark glass-hover card-float p-8 md:p-10 text-left shadow-depth-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600/30 to-purple-600/30 flex items-center justify-center shadow-depth-sm">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L22 8.5V15.5L12 22L2 15.5V8.5L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path d="M12 8V16" stroke="currentColor" strokeWidth="2" />
                  <path d="M8 10L16 14" stroke="currentColor" strokeWidth="2" />
                  <path d="M8 14L16 10" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold text-white">
                Smart Challenge Engine
              </h3>
            </div>
            <p className="text-white/70 mb-6">
              Auto-generated test cases, real-time validation, and intelligent
              difficulty scaling for perfectly balanced duels.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="px-3 py-2 rounded-lg bg-white/5 text-white/80 text-sm shadow-depth-sm">
                Instant feedback
              </div>
              <div className="px-3 py-2 rounded-lg bg-white/5 text-white/80 text-sm shadow-depth-sm">
                Fair matching
              </div>
            </div>
          </div>

          {/* Card 2: Real-time Duels */}
          <div className="glass-dark glass-hover card-float p-8 md:p-10 text-left shadow-depth-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/30 to-indigo-600/30 flex items-center justify-center shadow-depth-sm">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold text-white">
                Live Battle Arena
              </h3>
            </div>
            <p className="text-white/70 mb-6">
              Face opponents in real-time with synchronized timers, live code
              execution, and instant ranking updates.
            </p>
            <div className="bg-white/5 rounded-xl p-4 shadow-depth-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/80 text-sm">Current Duel</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <span className="text-white/60 text-xs">08:42 left</span>
                </div>
              </div>
              <div className="text-white/60 text-sm">
                Python • Data Structures
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
