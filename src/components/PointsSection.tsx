import { useRef, memo } from "react";
import { useIntersectionObserver } from "@/hooks/useParallax";

const points = [
  {
    value: "+10",
    title: "Victory Rewards",
    description:
      "Earn 10 points for every successful duel victory. Consistency pays off.",
    icon: "🏆",
    iconBg: "from-purple-600/30 to-indigo-600/30",
  },
  {
    value: "100",
    title: "Welcome Bonus",
    description:
      "Start your journey with 100 points. Build momentum from day one.",
    icon: "🎯",
    iconBg: "from-indigo-600/30 to-purple-600/30",
  },
  {
    value: "-10",
    title: "Learn from Defeat",
    description:
      "Minimal point loss keeps you motivated. Every defeat teaches valuable lessons.",
    icon: "⚡",
    iconBg: "from-indigo-600/30 to-purple-600/30",
  },
];

// Memoized point card component
const PointCard = memo(({ point }: { point: (typeof points)[0] }) => (
  <div
    className="glass-dark rounded-2xl p-8 shadow-depth-lg h-full"
    style={{
      contain: "layout style paint",
      willChange: "transform",
      transform: "translateZ(0)",
    }}
  >
    <div className="relative z-10">
      {/* Icon */}
      <div
        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${point.iconBg} flex items-center justify-center mb-6 shadow-lg`}
      >
        <span className="text-2xl">{point.icon}</span>
      </div>

      {/* Value */}
      <div className="mb-6">
        <span className="text-4xl md:text-5xl font-display font-light text-white tracking-tight">
          {point.value}
        </span>
        <span className="text-white/60 text-lg ml-2">points</span>
      </div>

      {/* Content */}
      <h3 className="text-xl font-medium text-white mb-3">{point.title}</h3>
      <p className="text-white/60 leading-relaxed font-light">
        {point.description}
      </p>
    </div>
  </div>
));

PointCard.displayName = "PointCard";

const PointsSection = () => {
  const { ref: intersectionRef } = useIntersectionObserver(0.1);

  return (
    <section
      id="points-section"
      className="relative py-32 overflow-hidden -mt-1"
    >
      {/* Background - seamlessly blends into ranks section */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F1117] via-[#0D0F1A] to-[#0D0F1A] -z-10" />

      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-gradient-to-r from-indigo-600/5 to-purple-600/5 blur-[100px] -z-10" />

      <div
        ref={intersectionRef as any}
        className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8"
      >
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light tracking-tighter text-white mb-6">
            Point System
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
            Participate in matches, compete with the best, and watch your
            ranking soar.
          </p>
        </div>

        {/* Points grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point) => (
            <PointCard key={point.title} point={point} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PointsSection;
