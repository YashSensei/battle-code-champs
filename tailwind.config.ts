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
        "panel-dark": "#0A0B14",
        ink: {
          DEFAULT: "#111827",
          muted: "#6B7280",
        },
        panel: "#FFFFFF",
        surface: "#FAFAFB",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "card-desktop": "24px",
        "card-mobile": "20px",
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(0,0,0,0.25)",
        glass: "0 8px 24px rgba(0,0,0,0.15)",
        float: "0 10px 40px rgba(0,0,0,0.2)",
        subtle: "0 2px 8px rgba(0,0,0,0.1)",
        // Enhanced realistic shadows for depth
        "depth-sm": "0 2px 8px rgba(0,0,0,0.3), 0 1px 3px rgba(0,0,0,0.4)",
        "depth-md": "0 8px 24px rgba(0,0,0,0.4), 0 4px 12px rgba(0,0,0,0.5)",
        "depth-lg": "0 16px 48px rgba(0,0,0,0.5), 0 8px 24px rgba(0,0,0,0.6)",
        "depth-xl": "0 24px 64px rgba(0,0,0,0.6), 0 12px 32px rgba(0,0,0,0.7)",
        // Glass-specific realistic shadows
        "glass-depth":
          "0 12px 32px rgba(0,0,0,0.4), 0 6px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
        "glass-hover":
          "0 20px 48px rgba(0,0,0,0.5), 0 10px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15)",
        // Button shadows
        "button-depth": "0 4px 12px rgba(0,0,0,0.4), 0 2px 6px rgba(0,0,0,0.3)",
        "button-hover":
          "0 8px 24px rgba(0,0,0,0.5), 0 4px 12px rgba(0,0,0,0.4)",
        "button-press": "0 2px 6px rgba(0,0,0,0.3), 0 1px 3px rgba(0,0,0,0.2)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
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
            transform: "rotate(0deg) scale(1)",
            opacity: "0.3",
          },
          "33%": {
            transform: "rotate(120deg) scale(1.1)",
            opacity: "0.5",
          },
          "66%": {
            transform: "rotate(240deg) scale(0.9)",
            opacity: "0.4",
          },
        },
        "grid-flow": {
          "0%, 100%": {
            transform: "translateX(0px) translateY(0px)",
            opacity: "0.4",
          },
          "50%": {
            transform: "translateX(20px) translateY(-10px)",
            opacity: "0.6",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        shine: "shine 3s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease-in-out infinite",
        "scroll-fade": "scroll-fade 0.6s ease-out",
        parallax: "parallax 10s ease-in-out infinite",
        aurora: "aurora 20s ease-in-out infinite",
        "grid-flow": "grid-flow 15s ease-in-out infinite",
      },
      fontFamily: {
        sans: [
          "Inter var",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "Space Grotesk var",
          "Space Grotesk",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
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
          "@apply bg-white/30 backdrop-blur-[10px] backdrop-saturate-150 shadow-glass-depth":
            {},
        },
        ".glass-dark": {
          "@apply bg-panel-dark/80 backdrop-blur-[10px] backdrop-saturate-150 shadow-glass-depth":
            {},
        },
        ".glass-navbar": {
          "background": "linear-gradient(135deg, rgba(10, 11, 20, 0.8) 0%, rgba(13, 15, 26, 0.8) 50%, rgba(5, 6, 9, 0.8) 100%)",
          "@apply backdrop-blur-[10px] backdrop-saturate-150 ring-1 ring-white/10 shadow-glass-depth": {},
        },
        ".glass-hover": {
          "@apply hover:shadow-glass-hover transition-all duration-300": {},
        },
        ".card-float": {
          "@apply rounded-card-desktop shadow-depth-lg": {},
        },
        ".card-elevated": {
          "@apply shadow-depth-xl transform hover:translate-y-[-4px] hover:shadow-depth-xl transition-all duration-300":
            {},
        },
        ".pill": {
          "@apply rounded-full px-4 py-2 shadow-depth-sm": {},
        },
        ".button-depth": {
          "@apply shadow-button-depth hover:shadow-button-hover active:shadow-button-press transition-all duration-200":
            {},
        },
      };
      addUtilities(newUtilities);
    },
  ],
} satisfies Config;

export default config;
