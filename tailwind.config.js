
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#faf8ef",
        board: "#bbada0",
        tileBase: "#cdc1b4",
        accent: "#8f7a66",
        textSoft: "#776e65",
      },
      fontFamily: {
        ui: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
