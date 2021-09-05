module.exports = (config) => {
  config.addPassthroughCopy({ public: "./" });
  config.setBrowserSyncConfig({
    files: ["dist/**/*"],
    open: true,
    // Tweak for Turbolinks & Browserstack Compatibility
    snippetOptions: {
      rule: {
        match: /<\/head>/i,
        fn: function (snippet, match) {
          return snippet + match;
        },
      },
    },
  });
  config.setDataDeepMerge(true);

  config.addFilter("bust", (url) => {
    const [urlPart, paramPart] = url.split("?");
    const params = new URLSearchParams(paramPart || "");
    params.set("v", Date.now());
    return `${urlPart}?${params}`;
  });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
