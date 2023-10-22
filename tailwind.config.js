/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      'hero': ['AppleGaramond'],
    },
    backgroundImage: {
      'hero-pattern': "url('/src/background/Background-fix.png')",
    },
  },
  screens: {
    'md': '376px',
    'xl': '769px',
  },
  plugins: [],
};
