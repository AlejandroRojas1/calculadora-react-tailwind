/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        noBlur: '5px 5px 0px 0px rgba(0, 0, 0, 0.25)',
        noBlurButton: '2px 2px 0px 0px rgba(0, 0, 0, 0.25)',
      }
    },
    container: {
      center: true,
    }
  },
  plugins: [],
}