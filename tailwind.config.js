/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        orange: {
          300: "#FFA726",
          400: "#FB8C00",
        },
      },
      rotate: {
        6: "6deg",
      },
      fontFamily: {
        brusher: ["Brusher", "cursive"], // fallback to cursive
      },
    },
  },
  plugins: [],
};
