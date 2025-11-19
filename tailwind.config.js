/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: [
    "./Components/**/*.html",
    "./Pages/**/*.html",
    "./Emails/**/*.html",
    "./Snippets/**/*.html",
    "./Assets/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.red,
        secondary: colors.gray,
        mainBg: '#FFFFFF',
        lightBg: '#FFFFFF',
        gray: {
          1000: '#1E1E1E'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}
