/** @type {import('tailwindcss').Config} */
export default {

  content: ["./**/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        main: '#43423d',
        secondary: '#878784',
        background: '#f5f3ea',
      },

      fontFamily: {
        dm: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
