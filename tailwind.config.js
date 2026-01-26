/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/App.{js,ts,tsx}', './src/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
};
