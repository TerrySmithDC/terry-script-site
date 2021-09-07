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
        sans: ["Raleway"],
        serif: ['"Playfair Display"'],
      },
      fontSize: {
        dynamic: [
          calculateClamp(1, 1.5),
          { lineHeight: calculateClamp(1.25, 1.75) },
        ],
        "dynamic-lg": [
          calculateClamp(1.125, 2),
          { lineHeight: calculateClamp(1.5, 3) },
        ],
        "dynamic-xl": [
          calculateClamp(1.25, 2.5),
          { lineHeight: calculateClamp(1.75, 3.25) },
        ],
        "dynamic-2xl": [
          calculateClamp(1.5, 3),
          { lineHeight: calculateClamp(2, 3.5) },
        ],
        "dynamic-3xl": [
          calculateClamp(1.875, 3.75),
          { lineHeight: calculateClamp(4, 4.5) },
        ],
        "dynamic-4xl": [
          calculateClamp(2.25, 5),
          { lineHeight: calculateClamp(4, 5.5) },
        ],
        "dynamic-5xl": [
          calculateClamp(3, 6),
          { lineHeight: calculateClamp(4.5, 6) },
        ],
        "dynamic-6xl": [
          calculateClamp(3.75, 8),
          { lineHeight: calculateClamp(5, 7.5) },
        ],
        "dynamic-7xl": [
          calculateClamp(4.5, 10),
          { lineHeight: calculateClamp(5.5, 12.5) },
        ],
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
