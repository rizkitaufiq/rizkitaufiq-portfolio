/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "ffff",
        default: "#EAE4D5",
        primary: "#000000",
        secondary: "#B6B09F",
      },

      keyframes: {
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(50%)" },
        },
        scrollRight: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "scroll-left": "scrollLeft 30s linear infinite",
        "scroll-right": "scrollRight 30s linear infinite",
      },
    },
  },
  plugins: [require("daisyui")],
};
