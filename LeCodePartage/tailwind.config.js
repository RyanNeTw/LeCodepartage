/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-red': '#DA2C38',
        'dark-red': '#951C24',
        'light-blue': '#347BB1',
        'dark-blue': '#0D1F2D',
        'white-color': '#FFFCFB',
        'black-color': '#222222'
      },
    },
  },
  plugins: [],
}

