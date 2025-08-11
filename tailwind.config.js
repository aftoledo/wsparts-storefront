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
        primary: {
          100: 'oklch(93.6% 0.032 17.717)',
          200: 'oklch(80.8% .114 19.571)',
          300: 'oklch(70.4% .191 22.216)',
          400: 'oklch(63.7% .237 25.331)',
          500: 'oklch(57.7% .245 27.325)',
          600: 'oklch(50.5% .213 27.518)',
          700: 'oklch(44.4% .177 26.899)',
          800: 'oklch(39.6% .141 25.723)',
          900: 'oklch(25.8% .092 26.042)',       
        },
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
