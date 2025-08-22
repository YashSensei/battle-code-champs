import { useRef, useMemo, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentRankIndex, setCurrentRankIndex] = useState(0);

  // Display ranks in ascending order (Ashigaru → Shōgun) - memoized for performance
  const timelineRanks = useMemo(
    () => [...ranks].sort((a, b) => a.rank - b.rank),
    []
  );

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    const section = sectionRef.current;
    const container = containerRef.current;

    // Create horizontal scroll animation
    const horizontalTween = gsap.to(container, {
      x: () => -(container.scrollWidth - window.innerWidth),
      ease: "none",
      duration: 1
    });

    // Create scroll trigger for horizontal scroll
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: () => `+=${container.scrollWidth - window.innerWidth + window.innerHeight}`,
      pin: true,
      animation: horizontalTween,
      scrub: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        // Update current rank index based on scroll progress
        const progress = self.progress;
        const newIndex = Math.min(
          Math.floor(progress * timelineRanks.length),
          timelineRanks.length - 1
        );
        setCurrentRankIndex(newIndex);
      }
    });

    // Animate individual rank cards
    timelineRanks.forEach((_, index) => {
      const rankCard = section.querySelector(`[data-rank="${index}"]`);
      if (rankCard) {
        gsap.set(rankCard, { scale: 0.8, opacity: 0.4 });
        
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: () => `+=${container.scrollWidth - window.innerWidth + window.innerHeight}`,
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            const cardProgress = Math.max(0, Math.min(1, 
              (progress * timelineRanks.length) - index + 0.5
            ));
            
            gsap.to(rankCard, {
              scale: cardProgress > 0.5 ? 1.1 : 0.8,
              opacity: cardProgress > 0.3 ? 1 : 0.4,
              duration: 0.3,
              ease: "power2.out"
            });
          }
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [timelineRanks]);

  return (
    <section 
      ref={sectionRef} 
      id="ranks-section" 
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0F1A] via-[#0A0B14] to-[#050609] -z-10" />

      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full bg-gradient-to-r from-indigo-600/8 to-purple-600/8 blur-[120px] -z-10" />

      <div className="relative z-10 flex flex-col justify-center min-h-screen px-4 sm:px-6 lg:px-8 will-change-scroll">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-light tracking-tighter text-white mb-4 sm:mb-6">
            Climb the Code Dojo
          </h2>
          <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto font-light leading-relaxed">
            Progress through the medieval Japanese hierarchy. From Ashigaru to Shogun.
          </p>
        </div>

        {/* Horizontal scroll container */}
        <div className="relative w-full max-w-7xl mx-auto">
          <div 
            ref={containerRef}
            className="flex will-change-scroll"
            style={{ 
              width: `${timelineRanks.length * 100}vw`
            }}
          >
            {timelineRanks.map((rank, index) => (
              <div 
                key={rank.name}
                data-rank={index}
                className="flex-shrink-0 px-4 sm:px-8 w-screen"
              >
                <div className="flex flex-col items-center text-center max-w-md mx-auto">
                  {/* Rank Icon */}
                  <div 
                    className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-3xl flex items-center justify-center shadow-[0_20px_40px_rgba(0,0,0,0.3)] backdrop-blur-sm mb-6 sm:mb-8 transition-all duration-1000 ease-out will-change-scroll"
                    style={{ 
                      background: rank.orbBg, 
                      color: rank.orbColor,
                      transform: index === currentRankIndex ? 'scale(1.1)' : 'scale(1)',
                      opacity: Math.abs(index - currentRankIndex) <= 1 ? 1 : 0.4
                    }}
                  >
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold">{rank.icon}</div>
                  </div>

                  {/* Badge */}
                  <div className="mb-4 sm:mb-6 opacity-80 text-4xl sm:text-5xl md:text-6xl">
                    {rank.badge}
                  </div>

                  {/* Rank Info */}
                  <div className="space-y-3 sm:space-y-4">
                    <span
                      className="text-sm font-medium px-4 py-2 rounded-full bg-white/[0.08] shadow-[0_2px_4px_rgba(0,0,0,0.1)] backdrop-blur-sm inline-block"
                      style={{ color: rank.titleColor }}
                    >
                      Level {rank.rank}
                    </span>
                    
                    <h3
                      className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide"
                      style={{ color: rank.titleColor }}
                    >
                      {rank.name}
                    </h3>

                    <p className="text-white/60 text-base sm:text-lg leading-relaxed font-light px-4">
                      {rank.description}
                    </p>

                    {/* Progress Bar */}
                    <div className="space-y-2 sm:space-y-3 w-full max-w-xs mx-auto">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-white/50 font-medium">Progress</span>
                        <span className="text-white/70 font-semibold">{rank.rank}/5</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-800 ease-out"
                          style={{
                            background: rank.glowColors,
                            width: `${(rank.rank / 5) * 100}%`,
                          }}
                        />
                      </div>
                    </div>

                    {/* Master Rank Badge for Shogun */}
                    {rank.name === "Shōgun" && (
                      <div className="mt-4">
                        <div className="inline-block bg-gradient-to-r from-yellow-400/20 to-orange-400/20 text-yellow-300 px-4 py-2 rounded-full text-sm font-medium border border-yellow-400/30">
                          ⚡ Master Rank
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-8 sm:mt-12 space-x-2">
            {timelineRanks.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: index === currentRankIndex ? '#ffffff' : 'rgba(255, 255, 255, 0.3)',
                  transform: index === currentRankIndex ? 'scale(1.5)' : 'scale(1)'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RanksSection;
