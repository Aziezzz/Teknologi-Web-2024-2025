/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./Praktikum_4/src/*.{html,js}'],
  theme: {
    extend: ['light', 'dark', 'cupcake'],
  },
  plugins: [require('daisyui')],
};
