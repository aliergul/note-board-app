/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        main: "#FEF9D9",
        secondary: "#DBE2EF",
        palette_light: "#3F72AF",
        palette_dark: "#112D4E",
        color1: "#D2E0FB",
        color2: "#FEF9D9",
        color3: "#DEE5D4",
        color4: "#8EACCD",
      },
      backgroundImage: {
        "custom-bg": "linear-gradient(135deg, #6e8efb, #a777e3)",
      },
    },
  },
  plugins: [],
};
