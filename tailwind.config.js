/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        oro: {
          DEFAULT: '#C9A84C',
          claro: '#E8C96A',
          oscuro: '#A07830',
          brillo: '#F5DC8A',
        },
        tinta: {
          DEFAULT: '#0A0A0A',
          testimonios: 'rgba(5,5,8,0.9)',
          nosotros: 'rgba(8,8,12,0.88)',
        },
        hueso: '#F2EDE4',
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      maxWidth: {
        '7xl': '80rem',
      },
    },
  },
  plugins: [],
}
