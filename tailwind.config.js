/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        editorial: ['Cormorant Garamond', 'serif'],
      },
      colors: {
        mono: {
          bg: '#000000',
          offblack: '#0D0D0D',
          charcoal: '#1A1A1A',
          border: 'rgba(255, 255, 255, 0.1)',
          gray: '#A1A1AA',
        }
      }
    },
  },
  plugins: [],
}
