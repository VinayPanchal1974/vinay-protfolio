/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'custom': '12px',
        'custom-1': '20px',
      },
      colors: {
        'primary': 'rgb(242,245,249)',
        'white': 'white',
        'primaryBorder': '#dcdfe2',
        'card1': '#ffeeda',
        'card2': '#f2f7fc',
        'contactForm': '#f8fbfb',
        'facebook':'#1977f2',
        'linkidin':'#0177b5',
        'info':'#f2f5f9'
      },
    },
  },
  plugins: [],
}