import { useParallax } from '@/hooks/useParallax';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-battle-arena.jpg';

const HeroSection = () => {
  const scrollY = useParallax();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-3xl animate-glow-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan bg-clip-text text-transparent animate-text-glow">
            CODE BETS
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-8 rounded-full" />
        </div>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-foreground">
            Welcome to the <span className="text-neon-cyan">Ultimate</span> Platform
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Where competitive programmers engage in <span className="text-neon-purple font-semibold">1v1 code duels</span>. 
            Battle it out in real-time coding challenges, climb the ranks, and prove your coding supremacy in the most 
            <span className="text-neon-blue font-semibold"> gamified programming arena</span> ever created.
          </p>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Enter the Arena
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neon-cyan rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;