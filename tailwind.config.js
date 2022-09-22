/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./pages/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#383770',
        'light-purple': '#9BA2E6',
        'light-blue': '#74BEFF',
      }
    },
  },
  plugins: [require('tailwindcss-font-inter')],
}
