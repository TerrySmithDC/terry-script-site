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
      fontSize: {
        dynamic: [
          "clamp(1.5rem, 2.5vw, 2rem)",
          { lineHeight: "clamp(1.75rem, 2.5vw, 2.5rem)" },
        ],
        "dynamic-5xl": [
          "clamp(3.5rem, 10vw, 8rem)",
          { lineHeight: "clamp(4rem, 10vw, 9rem)" },
        ],
        "dynamic-6xl": [
          "clamp(5rem, 12vw, 12rem)",
          { lineHeight: "clamp(4rem, 12vw, 9rem)" },
        ],
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
  purge: ["./src/**/*.{js,md,njk,svg}"],
};
