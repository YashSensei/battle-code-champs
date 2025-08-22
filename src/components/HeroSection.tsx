import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const { ref: heroRef, isVisible } = useScrollAnimation(0.2);

  return (
    <section
      ref={heroRef as any}
      className="relative min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className={`scroll-animate ${isVisible ? 'animate-in' : ''}`}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-light tracking-tighter text-white mb-6 leading-[1.1]">
            Battle Code
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Champions
            </span>
          </h1>
        </div>
        
        <div className={`scroll-animate ${isVisible ? 'animate-in' : ''}`} style={{ transitionDelay: '0.2s' }}>
          <p className="text-xl sm:text-2xl md:text-3xl text-white/70 mb-8 max-w-4xl mx-auto font-light leading-relaxed">
            Where code warriors clash, algorithms reign supreme, and legends are
            forged in the fires of competition.
          </p>
        </div>
        
        <div className={`scroll-animate-scale ${isVisible ? 'animate-in' : ''}`} style={{ transitionDelay: '0.4s' }}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href="#ranks-section"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-300 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-[0_8px_32px_rgba(99,102,241,0.3)] hover:shadow-[0_12px_40px_rgba(99,102,241,0.4)] hover:scale-105 hover:-translate-y-1"
            >
              <span className="relative z-10">Enter the Arena</span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="#features-section"
              className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white/90 transition-all duration-300 border-2 border-white/20 rounded-2xl hover:border-white/40 hover:bg-white/5 hover:scale-105"
            >
              Explore Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;