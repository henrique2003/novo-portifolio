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
        ligther: "#FFFFFF",
        "ocean-blue": "#00D1F7",
        grayrer: "#A2A2A2"
      }
    },
  },
  plugins: [],
}

