/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'background-main': '#0B1A24',
        'light-gray': '#CCDCF0',
        'light-white': '#F0FEFF'
      },
      screens:{
        'xl': {'max': '1280px'},
        'lg': {'max': '1024px'},
        'md': {'max': '768px'},
        'sm': {'max': '640px'}
      }
      
    },
  },
  plugins: [],
}

