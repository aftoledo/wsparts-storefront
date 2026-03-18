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
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
          950: 'var(--color-primary-950)',
        },
        secondary: colors.gray,
        mainBg: 'var(--color-main-bg)',
        lightBg: '#FFFFFF',
        lightBlue: '#00B0FF',
        ligthGreen: '#81C784',
        facebook: '#1877F2',
        customText: 'var(--color-text-base)',
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
  safelist: [
    {
      pattern: /^wake-.*/,
    }
  ]
}
