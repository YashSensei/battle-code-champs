import { useState } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useParallax";
import { sendWaitlistAcknowledgement } from "@/lib/email";

const ComingSoonSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { ref: intersectionRef, hasIntersected } = useIntersectionObserver(0.1);

  const isValidEmail = (value: string) =>
    /[^\s@]+@[^\s@]+\.[^\s@]+/.test(value);

  const handleNotifyMe = async () => {
    const trimmed = email.trim();
    
    // Reset states
    setErrorMessage("");
    setIsLoading(true);

    // Validate email
    if (!trimmed || !isValidEmail(trimmed)) {
      setErrorMessage("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    try {
      console.log("Attempting to send email to:", trimmed);
      await sendWaitlistAcknowledgement(trimmed);
      console.log("Email sent successfully!");
      setIsSubmitted(true);
    } catch (err) {
      console.error("Failed to send acknowledgement email:", err);
      setErrorMessage("Failed to send confirmation email. Please try again or contact us directly.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="early-access-section" className="relative py-40 overflow-hidden">
      {/* Background with enhanced gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050609] via-[#0A0B14] to-[#0D0F1A] -z-10" />

      {/* Multiple background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] rounded-full bg-gradient-to-r from-indigo-600/15 to-purple-600/15 blur-[140px] -z-10" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-blue-500/12 to-indigo-500/12 blur-[80px] -z-10" />

      <motion.div
        ref={intersectionRef as any}
        className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8 text-center"
      >
        {/* Status indicators */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {[
            {
              icon: "🚀",
              label: "Beta Launch",
              status: "Q2 2025",
            },
            {
              icon: "⚡",
              label: "Live Battles",
              status: "In Development",
            },
            {
              icon: "🏆",
              label: "Tournament Mode",
              status: "Coming Soon",
            },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className="glass-dark px-6 py-4 rounded-2xl flex items-center gap-4 text-white/70 shadow-depth-md"
              initial={{ opacity: 0, y: 30 }}
              animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <span className="text-2xl">{item.icon}</span>
              <div className="text-left">
                <div className="text-white font-medium text-sm">
                  {item.label}
                </div>
                <div className="text-white/50 text-xs">{item.status}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-600/20 to-teal-600/20 text-emerald-300 text-sm mb-8 shadow-depth-sm">
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            Platform Development in Progress
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-light tracking-tighter text-white mb-8 leading-tight">
            The Future of{" "}
            <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-400 bg-clip-text text-transparent font-medium">
              Code Battles
            </span>{" "}
            is Almost Here
          </h2>
          <p className="text-xl md:text-2xl text-white/60 max-w-4xl mx-auto font-light leading-relaxed">
            Join thousands of developers eagerly waiting to experience the most
            advanced competitive programming platform ever built. Be among the
            first to shape the future of coding competitions.
          </p>
        </motion.div>

        {/* Email signup form - Enhanced & Responsive */}
        <motion.div
          className="max-w-2xl mx-auto mb-20 px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="glass-dark rounded-3xl p-4 sm:p-6 lg:p-8 shadow-depth-xl backdrop-blur-xl">
            <h3 className="text-xl sm:text-2xl font-medium text-white mb-3 sm:mb-4 font-display">
              Get Early Access
            </h3>
            <p className="text-white/60 text-sm mb-6 sm:mb-8 font-light">
              Be the first to experience Code Bets. Early members get exclusive
              perks and lifetime benefits.
            </p>
            
            {/* Mobile-first responsive form */}
            <div className="glass-dark rounded-2xl sm:rounded-full p-2 sm:p-3 shadow-depth-lg mb-6">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 sm:h-14 bg-transparent border-0 text-white placeholder-white/50 px-4 sm:px-6 focus:outline-none text-sm sm:text-base font-light rounded-xl sm:rounded-none"
                  disabled={isSubmitted || isLoading}
                />
                <button
                  onClick={handleNotifyMe}
                  disabled={isSubmitted || isLoading || !email.trim()}
                  className="h-12 sm:h-14 px-6 sm:px-8 rounded-xl sm:rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-sm sm:text-base shadow-depth-md transition-all duration-300 disabled:opacity-75 button-depth whitespace-nowrap"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span className="hidden sm:inline">Sending...</span>
                      <span className="sm:hidden">...</span>
                    </div>
                  ) : isSubmitted ? (
                    <span className="hidden sm:inline">✓ Welcome to the Waitlist!</span>
                  ) : (
                    <>
                      <span className="hidden sm:inline">Join Waitlist</span>
                      <span className="sm:hidden">Join</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-300 text-sm">
                {errorMessage}
              </div>
            )}

            {/* Success Message - Responsive */}
            {isSubmitted && (
              <div className="mb-4 p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-300 text-sm">
                <span className="hidden sm:inline">🎉 Success! You've been added to our waitlist. Check your email for confirmation.</span>
                <span className="sm:hidden">🎉 Added to waitlist! Check your email.</span>
              </div>
            )}
            
            {/* Privacy and benefits - Responsive */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 text-xs text-white/40">
              <span className="text-center sm:text-left">
                <span className="hidden sm:inline">No spam, pinky promise 😉. Your privacy is our priority.</span>
                <span className="sm:hidden">No spam 😉 Privacy first.</span>
              </span>
              <div className="flex items-center gap-2 sm:gap-4 text-center sm:text-left">
                <span>✓ Early access</span>
                <span>✓ Exclusive perks</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature highlights */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            {
              icon: "⚡",
              title: "Lightning Fast",
              desc: "Sub-second response times for real-time coding battles",
            },
            {
              icon: "🛡️",
              title: "Ultra Secure",
              desc: "Enterprise-grade security with fair play enforcement",
            },
            {
              icon: "🌍",
              title: "Global Community",
              desc: "Connect with developers worldwide in epic code duels",
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              className="glass-dark glass-hover rounded-2xl p-6 shadow-depth-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-white font-medium mb-2 font-display">
                {feature.title}
              </h3>
              <p className="text-white/60 text-sm font-light leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ComingSoonSection;
