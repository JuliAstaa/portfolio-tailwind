/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        changeToDark: {
          "0%": {
            "background-color": "white",
            color: "#0f172a",
          },
          "50%, 100%": {
            "background-color": "#0f172a",
            color: "white",
          },
        },
        changeToLight: {
          "0%": {
            "background-color": "#0f172a",
            color: "white",
          },
          "50%, 100%": {
            "background-color": "white",
            color: "#0f172a",
          },
        },
        spinningMoon: {
          "0%": {
            rotate: "180deg",
            color: "#0f172a",
          },
          "50%": {
            rotate: "360deg",
          },
          "100%": {
            color: "white",
            rotate: "360deg",
          },
        },
        spinningSun: {
          "0%": {
            rotate: "0",
            color: "white",
          },
          "50%": {
            rotate: "180deg",
          },
          "100%": {
            color: "#0f172a",
            rotate: "180deg",
          },
        },
      },

      animation: {
        darkMode: "changeToDark 1.5s ease-in-out infinite",
        lightMode: "changeToLight 1.5s ease-in-out infinite",
        spinningMoon: "spinningMoon 1.5s ease-in-out forwards",
        spinningSun: "spinningSun 1.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
