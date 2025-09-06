/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    colors: {
      scheme: {
        700: '#013220', //dark green
        600: '#331a00', //dark brown
        400: '#8B4513', //cinnamon
        300: '#B69F66', // beige
        200: '#BDA875', //light beige
        175: '#d9c4b0', //light brown
        150: '#ffe6cc', // white
      }
    },
    fontFamily: 
    {
      inter: ['var(--font-vidaloka)','var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],

    },
  },
  plugins: [],
}