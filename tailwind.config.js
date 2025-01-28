/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'], // Paths ครอบคลุม JSX/TSX
  theme: {
    extend: {
      colors: {
        noteBackground: '#fdfcfb',
        noteBorder: '#d1d5db',
        noteHighlight: '#fbbf24', // สีปุ่มเหลือง
      },
      fontFamily: {
        sans: ['Poppins', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        rubik: ['Rubik Moonrocks', 'cursive'],
      },
    },
  },
  plugins: [],
};
