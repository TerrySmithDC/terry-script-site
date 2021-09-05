module.exports = {
  mode: "jit",
  darkMode: false,
  theme: {
    container: {
      center: true,
    },
    debugScreens: {
      position: ["bottom", "right"],
    },
    extend: {
      fontFamily: {
        serif: ["Raleway"],
        sans: ['"Playfair Display"'],
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
  purge: ["./src/**/*.{js,md,njk,svg}"],
};
