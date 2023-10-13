/** @type {import('tailwindcss').Config} */

/*eslint-env node*/
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './src/index.html'],
  theme: {
    extend: {
      keyframes: {
        grow: {
          '0%': { transform: 'rotate(0deg) scale(0)' },
          '30%': { transform: 'rotate(360deg) scale(1)' },
          '50%': { transform: 'rotate(360deg) scale(2)' },
          '100%': { transform: 'rotate(360deg) scale(2)' },
        },
      },
      animation: {
        'grow-spinning': 'grow 1s ease-in infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: ['light', 'dark', 'cupcake', 'retro'],
  },
};
