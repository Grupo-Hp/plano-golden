/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#092E57',
        secondary: '#D69A2C',
      },
      fontSize: {
        super: '12rem'
      },
    }
  },
  plugins: [],
}