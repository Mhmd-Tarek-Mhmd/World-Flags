/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito Sans", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  plugins: [],
};
