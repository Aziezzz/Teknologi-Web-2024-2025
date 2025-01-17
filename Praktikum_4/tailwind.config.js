/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.{html,js}'],
  theme: {
    extend: ['light', 'dark', 'cupcake'],
  },
  plugins: [require('daisyui')],
};
