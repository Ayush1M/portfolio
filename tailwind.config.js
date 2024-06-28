/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode : "selector",
  theme: {
    screens : {
      "sm" : "425px",
      "md" : "768px",
      "lg" : "1024px",
    },
    fontFamily : {
      'inconsolata' : ["Inconsolata", "monospace"]
    },
    extend: {
      keyframes : {
        wave : {
          '0%': { transform: 'rotate(0deg)' },
          '15%': { transform: 'rotate(14deg)' },
          '30%': { transform: 'rotate(-8deg)' },
          '40%': { transform: 'rotate(14deg)' },
          '50%': { transform: 'rotate(-4deg)' },
          '60%': { transform: 'rotate(10deg)' },
          '70%': { transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(0deg)'},
        }
      },
      animation : {
        waving : 'wave 2s linear infinite',
      },
      colors : {
        "primary-color" : "#000000",
        "secondary-color" : "#FFFFFF"
      },
    },
  },
  plugins: [],
}