/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'urbanist': ['Urbanist', 'sans-serif'],
        'prociono': ['Prociono', 'serif'],
      },
    },
  },
  plugins: [],
}

