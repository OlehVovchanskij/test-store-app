/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/App.{js,ts,tsx}', './src/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        card: 'rgb(var(--card))',
        border: 'rgb(var(--border))',

        primary: 'rgb(var(--primary))',
        secondary: 'rgb(var(--secondary))',
        danger: 'rgb(var(--danger))',

        textPrimary: 'rgb(var(--text-primary))',
        textSecondary: 'rgb(var(--text-secondary))',
        textMuted: 'rgb(var(--text-muted))',
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
