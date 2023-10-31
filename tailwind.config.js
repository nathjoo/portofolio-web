/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      'hero': ['Fraunces'],
      'body': ['Mulish'],
    },
    backgroundImage: {
      'hero-pattern': "url('/src/background/Background.png')",
    },
    colors: {
      'primary': '#FF774C',
      'secondary': '#242F65',
      'highlight': '#E8EFF0',
    },
  },
  screens: {
    'md': '376px',
    'xl': '769px',
    'xxl': '1441px',
  },
  plugins: [],
};
