/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/components/**.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kumhb: ["Kumbh Sans"],
      },
    },
  },
  plugins: [],
};
