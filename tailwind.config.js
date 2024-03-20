/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "white": '#ffffff',
        'grey': '#D1D1C7',
        'dark-grey':'#161616',
        'moody-grey': '#232323',
        'calm-grey': '#17181b'
      }
    },
  },
  plugins: [],
}