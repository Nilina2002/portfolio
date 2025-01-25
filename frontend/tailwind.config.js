/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#342E37', // Add your custom color here
      },
      fontFamily: {
        myFont:['Aurach Bi', "sans-serif"],
        myFont2:['Love Amour Blank', "Times New Roman"],
      },
    },
  },
  plugins: [],
}
