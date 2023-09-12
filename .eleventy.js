module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/dist/**/*");
  eleventyConfig.addPassthroughCopy("./src/dist/");

    return {
      dir: {
        input: "src",
        output: "_site",
      },
    }
};