const plugin = require("tailwindcss/plugin");
const { createStyles } = require("./utils");
const pluginConfig = require("./config");

module.exports = plugin(function verticalRythem({ addBase, config, theme }) {
  const {
    ppr,
    baseSize,
    baseLineHeight,
    capHeight,
    headerSpacingBefore,
    headerSpacingAfter,
    lineHeightMod,
    createValue,
    scale,
    unit,
  } = pluginConfig({ config, theme });

  const styles = createStyles({
    baseSize,
    baseLineHeight,
    capHeight,
    headerSpacingBefore,
    headerSpacingAfter,
    lineHeightMod,
    createValue,
    scale,
    unit,
  });

  addBase({
    html: { fontSize: `${ppr}px`, lineHeight: baseLineHeight },
    body: { fontSize: `${ppr}px`, lineHeight: baseLineHeight },
    h1: styles(4),
    h2: styles(3),
    h3: styles(2),
    h4: styles(1),
    h5: styles(0),
    h6: styles(-0.5),
    p: styles(0),
    p: styles(0),
    ul: styles(0),
    ol: styles(0),
  });
});
