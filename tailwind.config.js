module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#91b8ce",
          DEFAULT: "#3C6B86",
          dark: "#1f4961",
        },
      },
      width: {
        "102": "26rem",
        "104": "28rem",
        "106": "30rem",
        "107": "35rem",
      },
      height: {
        "102": "26rem",
        "104": "28rem",
        "106": "30rem",
        "107": "35rem",
        "1/7": "85%",
        "2/7": "90%",
        "3/7": "93%",
        "4/7": "95%",
      },
      maxHeight: {
        "102": "26rem",
        "104": "28rem",
        "106": "30rem",
        "107": "35rem",
        "1/7": "85%",
        "2/7": "90%",
        "3/7": "93%",
        "4/7": "95%",
      },
    },
    fontFamily: {
      poppins: ["Poppins"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
