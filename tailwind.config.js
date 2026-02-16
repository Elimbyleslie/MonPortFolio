/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "text-hoverClr",
    "text-mainClr",
    "hover:text-hoverClr",
    "hover:text-mainClr",
    "bg-white",
    "text-white",
    "border-white",
    "hover:bg-white",
    "hover:bg-gray-100",
    // Classes du menu hamburger
    "md:hidden",
    "md:flex",
  ],
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
