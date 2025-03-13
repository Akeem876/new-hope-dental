/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // This disables dark mode
  theme: {
    extend: {
      colors: {
        golddd: '#FFD700'
      }
    },
  },
  plugins: [],
}