/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mainColor': '#252525',
        'txtColor': '#f0f0f0'
      },
      fontFamily: {
        'inter': ["Inter tight", "sans-serif"]
      }
    },
  },
  plugins: [],
}
