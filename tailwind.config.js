/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "hscreen": "50vh",
        "h-17": "68px"
      },
      colors: {
        "primary": "#88ED24",
        "dark": "#0C1B00",
        "light": "#F5EFED",
        "secondary": " #64BA0E"
      },
      fontFamily: {
        "title": "Londrina Solid, cursive"
      },
      screens: {
        "sm": "500px",
      }

    },
  },
  plugins: [],
}


// #568259