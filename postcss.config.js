const pfm = require("postcss-font-magician");

module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    pfm({
      variants: {
        Raleway: {
          300: [],
          400: [],
          700: [],
        },
        "Playfair Display": {
          300: [],
          400: [],
          700: [],
        },
      },
      foundries: ["google"],
    }),
  ],
};
