const { scales, easing } = require("./constants");
const { basicValue, clampValue } = require("./utils");

module.exports = function config({ config, theme }) {
  const ppr = config("verticalRhythm.ppr") || 16;
  const baseSize = config("verticalRhythm.base.size") || 1;
  const baseLineHeight = config("verticalRhythm.base.lineHeight") || 1;
  const unit = config("verticalRhythm.unit") || "rem";
  const capHeight = config("verticalRhythm.capHeight") || 0.68;
  const headerSpacingBefore =
    config("verticalRhythm.headerSpacing.before") || 0;
  const headerSpacingAfter = config("verticalRhythm.headerSpacing.after") || 0;
  const lineHeightMod = config("verticalRhythm.lineHeightMultiplier") || 1;
  const clampMultiplier = config("verticalRhythm.clampMultiplier") || 2;

  const minScreen = theme("screens.md").slice(0, -2); // theme() returns a px value so we strip the px
  const maxScreen = theme("screens.2xl").slice(0, -2);

  const createValue =
    config("verticalRhythm.mode") === "dynamic"
      ? clampValue({ minScreen, maxScreen, clampMultiplier, ppr, unit })
      : basicValue({ unit });

  let scale = scales["major third"]; // Default
  if (typeof config("verticalRhythm.scale") === "string") {
    scale = scales[config("verticalRhythm.scale")];
  } else if (typeof config("verticalRhythm.scale") === "number") {
    scale = config("verticalRhythm.scale");
  }

  return {
    baseSize,
    baseLineHeight,
    capHeight,
    headerSpacingBefore,
    headerSpacingAfter,
    lineHeightMod,
    createValue,
    scale,
    ppr,
    unit,
  };
};
