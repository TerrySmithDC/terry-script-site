module.exports = {
  mode: "jit",
  darkMode: false,
  corePlugins: {
    container: false,
  },
  theme: {
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
