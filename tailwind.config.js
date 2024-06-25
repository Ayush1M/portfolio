/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode : "selector",
  theme: {
    fontFamily : {
      'inconsolata' : ["Inconsolata", "monospace"]
    },
    extend: {
      colors : {
        "primary-color" : "#000000",
        "secondary-color" : "#FFFFFF"
      },
    },
  },
  plugins: [],
}