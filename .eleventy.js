module.exports = async function(eleventyConfig) {
  // Add Tabler icons plugin
  const tablerIcons = await import('@cdransf/eleventy-plugin-tabler-icons');
  eleventyConfig.addPlugin(tablerIcons.default);

  // Copy static assets
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("humans.txt");

  // Global data
  eleventyConfig.addGlobalData("name", "Bev A. Dransfeldt");
  eleventyConfig.addGlobalData("description", "Music | Marketing | Events | Advocacy | Parks");
  eleventyConfig.addGlobalData("favicon", "/assets/img/favicon.ico");

  // Permalink structure
  eleventyConfig.addGlobalData("permalink", "/{{ title }}/");

  // Ignore README.md specifically
  eleventyConfig.ignores.add("README.md");

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    },
    templateFormats: ["html", "md", "liquid"],
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
    dataTemplateEngine: "liquid"
  };
};
