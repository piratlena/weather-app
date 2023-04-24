module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx }"],
  theme: {
    extend: {
      colors: {
        "weather-primary": "#BDD8FE",
        "weather-secondary": "#EEC0C6",
      },
    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"],
    },

    container: {
      padding: "2rem",
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
    },
  },
  plugins: [],
};
