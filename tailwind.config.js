/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/App.{js,ts,tsx}', './src/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        secondary: '#4B5563',
        danger: '#EF4444',
        border: '#E5E7EB',

        text: {
          primary: '#111827',
          secondary: '#6B7280',
          muted: '#9CA3AF',
        },
      },

      fontFamily: {
        signika: ['SignikaRegular'],
        'signika-medium': ['SignikaMedium'],
        'signika-semibold': ['SignikaSemiBold'],
        'signika-bold': ['SignikaBold'],
        'signika-light': ['SignikaLight'],
      },
    },
  },
  plugins: [],
};
