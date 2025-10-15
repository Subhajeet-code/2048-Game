// tailwind.config.js (replace extend.colors block)
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#1E1E2F",
        board: "#2D3254",
        tileBase: "#404266",
        accent: "#06b6d4",
        textSoft: "#3a53d3ff",
        gold: "#f6c84c",
        success: "#10b981",
      },
      boxShadow: {
        tile: "0 6px 18px rgba(23,19,18,0.12)",
      },
      fontFamily: {
        ui: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
