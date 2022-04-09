module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/styles/base.css");
    eleventyConfig.addPassthroughCopy("./src/scripts");

    return {
        dir: {
            input: "src",
        },
    };
};