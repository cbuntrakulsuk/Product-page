/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/components/**.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      lg: "900px",
    },
    extend: {
      fontFamily: {
        kumhb: ["Kumbh Sans"],
      },
      colors: {
        orange: "#ff7d1a",
        paleOrange: "#ffede0",
        white: "rgb(255 255 255)",
        gray: "#9A9A9C",
      },
      animation: {
        cartBounce: "bounce 1s ease-in-out 5",
      },
    },
  },
  plugins: [],
};
