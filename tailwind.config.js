/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: '#F15A22',
        'orange-hover': '#d44e1a',
        dark: '#111111',
        'dark-card': '#1a1a1a',
        'dark-section': '#0d0d0d',
        cream: '#FFF5EB',
        peach: '#FDDCBC',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
