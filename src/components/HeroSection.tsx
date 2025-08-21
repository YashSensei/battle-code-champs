import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background with enhanced gradients - same as ComingSoonSection */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050609] via-[#0A0B14] to-[#0D0F1A] -z-10" />

      {/* Multiple background glows - same as ComingSoonSection */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] rounded-full bg-gradient-to-r from-indigo-600/15 to-purple-600/15 blur-[140px] -z-10" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-blue-500/12 to-indigo-500/12 blur-[80px] -z-10" />

      <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center relative z-10 py-32">

        {/* Main heading */}
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-light tracking-tighter text-white mb-8 leading-[0.9]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          Master Code.{" "}
          <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-400 bg-clip-text text-transparent font-medium">
            Beat Rivals.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-white/60 mb-16 max-w-3xl mx-auto font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          The ultimate platform for competitive programming duels. Clean code,
          fair battles, instant results.
        </motion.p>

        {/* Feature preview cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {/* Real-time Battles */}
          <div className="glass-dark rounded-2xl p-8 shadow-2xl ring-1 ring-white/5">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600/30 to-purple-600/30 ring-1 ring-white/10 flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
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
                    className="text-indigo-300"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white">
                Real-time Battles
              </h3>
            </div>
            <p className="text-white/60 text-sm font-light leading-relaxed">
              Face opponents live with synchronized timers and instant feedback
              on every line of code.
            </p>
          </div>

          {/* Smart Matching */}
          <div className="glass-dark rounded-2xl p-8 shadow-2xl ring-1 ring-white/5">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/30 to-indigo-600/30 ring-1 ring-white/10 flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-300"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-300"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white">Smart Matching</h3>
            </div>
            <p className="text-white/60 text-sm font-light leading-relaxed">
              Advanced algorithms ensure fair matches based on skill level and
              programming style.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
