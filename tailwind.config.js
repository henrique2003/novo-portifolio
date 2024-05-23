/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        darker: "#070707",
        ligther: "#FFFFFF"
      }
    },
  },
  plugins: [],
}

