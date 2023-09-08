/** @type {import('tailwindcss').Config} */

/*eslint-env node*/
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './src/index.html'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: ['light', 'dark', 'cupcake', 'retro'],
  },
};
