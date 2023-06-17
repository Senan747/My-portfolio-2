/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        '75': '75%',
        '50': '50%',
        '30': '30%'
      },
      borderWidth: {
        '1': '1px',
        '0.5': '0.5px',
      },
      colors: {
        'gega-red': '#bc1a45',
        'gega-melon': '#ffd369',
        'gega-grey': '#dddddd',
        'gega-white': '#f7f7f7',
        'gega-black': '#1F1F1F',
        'gega-light': '#999999',
        'gega-green': '#28E98C',
        'gega-dark': '#191919',
      },
    },
  },
  plugins: [],
};
