const plugin = require("tailwindcss/plugin");

function calculateClamp(min, max, unit = "rem") {
  // https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/

  const pixelsPerRem = 16;
  const minW = 640 / pixelsPerRem; // responsive sm
  const maxW = 1536 / pixelsPerRem; // responsive 2xl
  const slope = (max - min) / (maxW - minW);
  const yAxisIntersection = -minW * slope + min;

  return `clamp(${min}${unit}, ${yAxisIntersection}rem + ${
    slope * 100
  }vw, ${max}${unit})`;
}

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
          calculateClamp(1, 2.5),
          { lineHeight: calculateClamp(1.5, 3) },
        ],
        "dynamic-2xl": [
          calculateClamp(1.5, 3),
          { lineHeight: calculateClamp(1.75, 3.5) },
        ],
        "dynamic-5xl": [
          calculateClamp(3, 5),
          { lineHeight: calculateClamp(4, 11) },
        ],
        "dynamic-6xl": [
          calculateClamp(3.5, 5.5),
          { lineHeight: calculateClamp(4, 11) },
        ],
      },
    },
  },
  plugins: [
    require("tailwindcss-debug-screens"),
    plugin(function ({ addUtilities, addComponents, e, prefix, config }) {
      const textIndents = {
        ".indent": {
          "text-indent": calculateClamp(3, 5),
        },
      };
      addUtilities(textIndents);
    }),
  ],
  purge: ["./src/**/*.{js,md,njk,svg}"],
};
