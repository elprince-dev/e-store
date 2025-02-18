/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFCE1A',
        secondary: '#0D0842',
        blckBg: '#F3F3F3',
        favorite: '#FF5841'
      },
      fontFamily:{
        primary: ['Montserrat', 'sans-serif'],  
        secondary: ['Nunito Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
});