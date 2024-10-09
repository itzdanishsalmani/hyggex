/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #F5F9FF 0.5%, #E4E4E4 8%, #E4E4E4 92%, #F5F9FF 100%)',
      },
      fontFamily: {
        jeju: ['Jeju Gothic', 'sans-serif'], 
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors:{
        primaryColor:'#06286E',
        darkBlue:'#0F2669',
        textLightBlue:'#0F2669CC',
        buttonBlue: '#407FFF',
        bgDemoButton:'#407FFF33',
        textDemoButton:'#5189FCCC',
        bgTrustedBy:'#407FFF0A',
        textIndustry:'#6B6B6B',
      }
    },
  },
  plugins: [],
}

// textDemoButton #5189FCCC
// darkblue #0F2669