module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx }"],
  theme: {
    extend: {
      colors: {
        "weather-primary": "#44B09E",
        "weather-secondary": "#01BAEF",
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
