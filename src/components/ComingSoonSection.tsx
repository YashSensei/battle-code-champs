import { useEffect, useState } from 'react';
import { useParallax } from '@/hooks/useParallax';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

const ComingSoonSection = () => {
  const scrollY = useParallax();
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('coming-soon-section');
      if (element) {
        const rect = element.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight && rect.bottom > 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNotifyMe = () => {
    if (email) {
      // Handle email signup logic here
      console.log('Email signup:', email);
      setEmail('');
    }
  };

  return (
    <section 
      id="coming-soon-section"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Parallax Background */}
      <div 
        className="absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/50" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h2 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-blue bg-clip-text text-transparent animate-text-glow">
            COMING SOON
          </h2>
          
          <div className="h-1 w-48 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-12 rounded-full" />
        </div>

        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{ transitionDelay: '0.2s' }}>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-12 leading-relaxed">
            The ultimate competitive programming battleground is being forged. 
            <br />
            <span className="text-neon-cyan font-semibold">Prepare for the revolution.</span>
          </p>
        </div>

        <Card className={`p-8 bg-card/30 backdrop-blur-sm border-border max-w-2xl mx-auto transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{ transitionDelay: '0.4s' }}>
          <h3 className="text-2xl font-bold mb-6 text-neon-purple">Be the First to Enter the Arena</h3>
          <p className="text-muted-foreground mb-8">
            Join our exclusive waitlist and be among the first to experience the future of competitive programming. 
            Early access warriors will receive special bonuses!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-background/50 border-border focus:border-neon-blue"
            />
            <Button 
              variant="hero" 
              onClick={handleNotifyMe}
              className="sm:px-8"
            >
              Notify Me
            </Button>
          </div>
        </Card>

        <div className={`mt-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{ transitionDelay: '0.6s' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-xl font-bold text-neon-blue mb-2">Real-Time Battles</h4>
              <p className="text-muted-foreground">Live 1v1 coding duels with instant feedback</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-neon-purple mb-2">Global Leaderboards</h4>
              <p className="text-muted-foreground">Compete with programmers worldwide</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-neon-cyan mb-2">Epic Rankings</h4>
              <p className="text-muted-foreground">Rise from Silver to the legendary King rank</p>
            </div>
          </div>
        </div>

        {/* Animated Code Elements */}
        <div className="absolute top-10 right-10 text-neon-blue/20 font-mono text-sm animate-pulse">
          {'{ "status": "coming_soon" }'}
        </div>
        <div className="absolute bottom-10 left-10 text-neon-purple/20 font-mono text-sm animate-pulse" style={{ animationDelay: '0.5s' }}>
          {'while(true) { code(); }'}
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;