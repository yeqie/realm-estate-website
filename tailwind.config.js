/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [ './src/**/*.js', './public/index.html' ],
  theme: {
    extend: {
      fontFamily: {
        'sans': [ 'Inter', ...defaultTheme.fontFamily.sans ]
      },
      backgroundImage: {
        'hero': 'url("./resources/hero-bg.jpg")'
      }
    },
  },
  plugins: [ require('@tailwindcss/line-clamp') ],
}
