/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          950: "#070B14",
          900: "#0B1120",
          850: "#0F172A",
          800: "#1E293B",
          700: "#334155",
        },
        accent: {
          cyan: "#38BDF8",
          blue: "#3B82F6",
          indigo: "#6366F1",
          emerald: "#10B981",
        },
        primary: "#38BDF8",
        secondary: "#94A3B8",
        default: "#0F172A",
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "'Inter'", "system-ui", "sans-serif"],
      },
      keyframes: {
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scrollRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        "scroll-left": "scrollLeft 25s linear infinite",
        "scroll-right": "scrollRight 25s linear infinite",
        float: "float 4s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark"],
    darkTheme: "dark",
  },
};

