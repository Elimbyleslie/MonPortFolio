/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainClr: "#007A5A",
        textClr: "#374151",
        hoverClr: "#00583D",
        white: "#fff",
      },
    },
  },
  plugins: [],
};
