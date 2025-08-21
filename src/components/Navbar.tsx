import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToFooter = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        scrolled ? "py-3" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between ${
            scrolled ? "glass-navbar" : ""
          } rounded-full px-4 py-2 transition-all duration-300`}
        >
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white mr-3 shadow-depth-sm">
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 2L14 5V11L8 14L2 11V5L8 2Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <span className="font-display text-xl text-white font-medium tracking-tight">
              codebets
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a
              href="#points-section"
              className="text-white/70 hover:text-white transition-colors"
            >
              Points
            </a>
            <a
              href="#ranks-section"
              className="text-white/70 hover:text-white transition-colors"
            >
              Ranks
            </a>
            <button
              onClick={scrollToFooter}
              className="text-white/70 hover:text-white transition-colors"
            >
              Contact
            </button>
            <button
              onClick={() => smoothScrollTo('faq-section')}
              className="text-white/70 hover:text-white transition-colors"
            >
              FAQ
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="h-9 px-4 rounded-full border-white/15 text-white hover:bg-white/10 hover:border-white/20 button-depth"
              onClick={() => {
                const element = document.getElementById('early-access-section');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Early Access
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
