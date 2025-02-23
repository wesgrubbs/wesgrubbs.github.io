/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#295496",
        "primary-black": "#131313",
        "primary-orange": "#e14414",
        "primary-yellow": "#fdaa08",
        "primary-red": "#fb3735",

        // Greys
        grey: {
          100: "#2d2926",
          90: "#58514b",
          80: "#847971",
          70: "#aba29c",
          60: "#d0cbc8",
        },
      },
      fontFamily: {
        "meta-sans": ['"Meta Sans"', '"Fira Sans"', "sans-serif"],
        "meta-serif": ['"Meta Serif"', "serif"],
        "meta-serif-italic": ['"Meta Serif Italic"', "serif"],
      },
    },
  },
  plugins: [],
};
