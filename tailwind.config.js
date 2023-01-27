/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        
        blue: "#7DBCDE",
        red: "#F34C19",
        yellow: "#FBC40E",
        grey: "#ededed",
        "deep-blue" : "#010026",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
        navy: "#00004d",
        rhino: "#14365d",
        green: "#228B22",
        orange: "#F0B27A",
        purple: "#A569BD"
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81,66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%",
          "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%",
      }),
      fontFamily:{
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"]
      },
      content: {
        brush: "url(./assets/brush.png)",
        person1: "url(./assets/person-1.png)",
        person2: "url(./assets/person-2.png)",
        person3: "url(./assets/person-3.png)",
      },
      screens : {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      }
      
    },
  },
  plugins: [],
}
