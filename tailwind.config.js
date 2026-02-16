/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors:{
        mainClr:"#009E88",
        textClr:"#374151",
        hoverClr:"#048D83",
        white:"#fff",
      },

    },
  },
  plugins: [],
}

