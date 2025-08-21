import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom colors for the competitive programming theme
        ink: {
          50: "#F8FAFC",
          900: "#111827",
        },
        panel: "#FFFFFF",
        surface: "#FAFAFB",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(0,0,0,0.25)",
        glass: "0 8px 24px rgba(0,0,0,0.15)",
        float: "0 10px 40px rgba(0,0,0,0.2)",
        subtle: "0 2px 8px rgba(0,0,0,0.1)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shine: {
          "0%": { transform: "translateX(-100%)" },
          "50%, 100%": { transform: "translateX(100%)" },
        },
        "gradient-shift": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        "scroll-fade": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        parallax: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-50px)" },
        },
        aurora: {
          "0%, 100%": {
            transform:
              "translateX(-50%) translateY(-50%) rotate(0deg) scale(1)",
            opacity: "0.3",
          },
          "33%": {
            transform:
              "translateX(-50%) translateY(-50%) rotate(120deg) scale(1.1)",
            opacity: "0.5",
          },
          "66%": {
            transform:
              "translateX(-50%) translateY(-50%) rotate(240deg) scale(0.9)",
            opacity: "0.4",
          },
        },
        "grid-flow": {
          "0%": { transform: "translateX(0) translateY(0)" },
          "100%": { transform: "translateX(-50px) translateY(-50px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in": "slide-in 0.3s ease-out",
        float: "float 3s ease-in-out infinite",
        shine: "shine 2s ease-in-out infinite",
        "gradient-shift": "gradient-shift 3s ease infinite",
        "scroll-fade": "scroll-fade 0.6s ease-out",
        parallax: "parallax 1s linear infinite",
        aurora: "aurora 20s linear infinite",
        "grid-flow": "grid-flow 20s linear infinite",
      },
      fontFamily: {
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.075em",
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "0",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }: any) {
      const newUtilities = {
        ".glass": {
          "@apply bg-white/30 backdrop-blur-[10px] backdrop-saturate-150 ring-1 ring-black/5":
            {},
        },
        ".glass-dark": {
          "@apply bg-white/5 backdrop-blur-[10px] backdrop-saturate-150 ring-1 ring-white/10":
            {},
        },
        ".card-float": {
          "@apply rounded-[24px] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]":
            {},
        },
        ".pill": {
          "@apply rounded-full px-4 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.15)]":
            {},
        },
      };
      addUtilities(newUtilities);
    },
  ],
} satisfies Config;

export default config;
