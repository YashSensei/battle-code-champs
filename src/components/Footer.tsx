import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-[#050609] overflow-hidden">
      {/* Minimal glass background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020306] to-[#050609] -z-10" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8 py-16">
        {/* Main content */}
        <motion.div
          className="glass-dark rounded-3xl p-8 lg:p-12 shadow-2xl ring-1 ring-white/5 backdrop-blur-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* Left section - Logo */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg ring-1 ring-white/10">
                <svg
                  width="24"
                  height="24"
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
              <div>
                <span className="font-display text-2xl text-white font-medium tracking-tight block">
                  codebets
                </span>
                <span className="text-white/50 text-sm font-light">
                  Competitive Programming Arena
                </span>
              </div>
            </div>

            {/* Right section - Links & Social */}
            <div className="flex items-center gap-12">
              {/* Navigation */}
              <div className="hidden md:flex items-center gap-8 text-sm">
                <span className="text-white/60 font-light">Privacy</span>
                <span className="text-white/60 font-light">Terms</span>
                <span className="text-white/60 font-light">Contact</span>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-3">
                {[
                  "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                  "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z",
                  "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599-.111 1.041-.6 1.041-1.133 0-.56-.02-2.04-.031-4.005-3.338.724-4.042-1.614-4.042-1.614-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825 1.124 4.785-1.594 8.202-6.086 8.202-11.386 0-6.627-5.373-12-12-12z",
                ].map((icon, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 rounded-xl glass-dark ring-1 ring-white/10 flex items-center justify-center text-white/40 shadow-lg"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d={icon} />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <p className="text-white/40 text-sm font-light">
              © 2025 Code Bets. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
