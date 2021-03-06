const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  darkMode: false,
  verticalRhythm: {
    mode: "dynamic",
    clampMultiplier: 1.5,
    scale: "fifth",
    lineHeightMultiplier: 1.2,
  },
  theme: {
    container: {
      center: true,
    },
    debugScreens: {
      position: ["bottom", "right"],
    },
    // factor: {
    //   custom: [
    //     4,
    //     {
    //       lineHeightMod: 0.8,
    //       headerSpacingAfter: 10,
    //     },
    //   ],
    // },
    extend: {
      fontFamily: {
        sans: ["Raleway"],
        serif: ['"Playfair Display"'],
      },
      backgroundImage: {
        "gradient-radial-to-tr":
          "radial-gradient(115% 90% at 0% 100%, var(--tw-gradient-stops))",
        "gradient-radial-to-tl":
          "radial-gradient(115% 90% at 100% 100%, var(--tw-gradient-stops))",
        "gradient-radial-to-br":
          "radial-gradient(90% 115% at 0% 0%, var(--tw-gradient-stops))",
        "gradient-radial-to-bl":
          "radial-gradient(90% 115% at 100% 0%, var(--tw-gradient-stops))",
      },
      maxWidth: {
        para: "100ch",
      },
    },
  },
  plugins: [
    require("tailwindcss-debug-screens"),
    require("tailwindcss-vertical-rythm"),
  ],
  purge: ["./src/**/*.{js,md,njk,svg}", "./.eleventy.js"],
};
