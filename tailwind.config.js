/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:['Roboto','sans-serif']
      },
      gridTemplateColumns:{
        '70/30':'70% 28%'
      },
      colors: {
        'pahe': '#bc014ff3',
        'navi': '#025151',
        'bground':'#0a2541',
        'hoverpahe': '#a70448f3',
      },
    },
  },
  plugins: [],
}