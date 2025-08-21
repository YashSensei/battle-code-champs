import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        scrolled ? "py-3" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between ${
            scrolled ? "glass-dark" : ""
          } rounded-full px-4 py-2 transition-all duration-300 ring-1 ${
            scrolled ? "ring-white/10" : "ring-transparent"
          }`}
        >
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white">
              <svg
                width="16"
                height="16"
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
            <span className="font-display text-base md:text-lg text-white tracking-tight">
              Code Bets
            </span>
          </div>

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
            <a
              href="#"
              className="text-white/70 hover:text-white transition-colors"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white transition-colors"
            >
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="h-9 px-4 rounded-full border-white/15 text-white hover:bg-white/10 hover:border-white/20 btn-press"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1.5"
              >
                <path
                  d="M8 8C9.65685 8 11 6.65685 11 5C11 3.34315 9.65685 2 8 2C6.34315 2 5 3.34315 5 5C5 6.65685 6.34315 8 8 8Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 14C2 11.7909 4.68629 10 8 10C11.3137 10 14 11.7909 14 14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Sign in
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
