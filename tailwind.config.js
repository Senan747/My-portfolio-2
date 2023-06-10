/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'gega-red': '#bc1a45',
        'gega-melon': '#ffd369',
        'gega-grey': '#dddddd',
        'gega-white': '#f7f7f7',
        'gega-black': '#1F1F1F',
        'gega-light': '#999999',
        'gega-green': '#28E98C',
      },
    },
  },
  plugins: [],
}

