const resolveConfig = require('tailwindcss/resolveConfig')
const tailwindConfig = require('./tailwind.config.js')
const fullConfig = resolveConfig(tailwindConfig)

console.log('primary-600:', fullConfig.theme.colors.primary[600])
console.log('primary-500:', fullConfig.theme.colors.primary[500])
