const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = (config) => {
  config.addPlugin(pluginRss);
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

  // https://jouni.kantola.se/blog/2021-02-05/permalinks-for-eleventy-headings/#text-and-snippet-headings
  config.addShortcode("anchor", (tag, text, classList = "") => {
    const slug = config.getFilter("slug");
    const id = slug(text).replace(/[^\w-]/g, "");

    return `
<${tag} id="${id}" class="group anchor-offset${classList && `${classList}`}">
  <span>${text}</span>
  <a class="transition duration-200 ease-in-out opacity-0 group-hover:opacity-100 " href="#${id}">#</a>
</${tag}>
    `;
  });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
