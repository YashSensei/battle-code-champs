const Footer = () => {
  return (
    <footer className="relative bg-[#050609] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020306] to-[#050609] -z-10" />

      <div className="relative z-10 w-full px-6 lg:px-8 py-16">
        {/* Main content - full width */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-8">
            {/* Left section - Logo */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-depth-sm">
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
                <span className="text-white/60 font-light hover:text-white/80 transition-colors cursor-pointer">
                  Privacy
                </span>
                <span className="text-white/60 font-light hover:text-white/80 transition-colors cursor-pointer">
                  Terms
                </span>
                <span className="text-white/60 font-light hover:text-white/80 transition-colors cursor-pointer">
                  Contact
                </span>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-3">
                {/* Twitter */}
                <a
                  href="https://x.com/Yash__Sensei"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white/60 hover:bg-white/10 transition-all shadow-depth-sm cursor-pointer"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/yash-agrawal-208841307/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white/60 hover:bg-white/10 transition-all shadow-depth-sm cursor-pointer"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                {/* Email */}
                <a
                  href="mailto:yashagrawalrkt123@gmail.com"
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white/60 hover:bg-white/10 transition-all shadow-depth-sm cursor-pointer"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.91L12 10.09l9.454-6.269h.91c.904 0 1.636.732 1.636 1.636z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-white/10 text-center">
            <p className="text-white/40 text-sm font-light">
              © 2025 Code Bets. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
