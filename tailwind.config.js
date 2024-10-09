/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor:'#06286E',
        darkBlue:'#0F2669',
        threeImageText:'#0F2669',
        textLightBlue:'#0F2669CC',
        buttonBlue: '#407FFF',
        bgDemoButton:'#407FFF33',
        textDemoButton:'#5189FCCC'

      }
    },
  },
  plugins: [],
}