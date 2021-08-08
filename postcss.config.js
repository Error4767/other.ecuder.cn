const glob = require("glob-all");
module.exports = {
  plugins: [
    // Purge unused CSS from .js and .jsx files
    require('@fullhuman/postcss-purgecss')({
      // You'll want to modify this glob if you're using TypeScript
      content: glob.sync('src/**/*.{js,jsx}', { nodir: true }),
      extractors: [
        {
          extractor: (content)=> {
            // 选取类名
            const normalSelectors = (content.match(/(bulma|classes)\.\w+/g) || []).map(token=> token.replace(/.*\./, ""));
            // 选取 kekab-case 风格的类名
            const kekabCaseSelectors = (content.match(/(bulma|classes)\[("|').*("|')\]/g) || []).map(token=> token.replace(/.*\[("|')/, "").replace(/("|')\]/, ""));
            // 选取 tag
            const tagSelectors = (content.match(/<\w+(>|(\s|.*))/g) || []).map(token=> token.replace(/[<>\s]/g, ""));

            let selectors = [...new Set([...normalSelectors, ...kekabCaseSelectors, ...tagSelectors])];
            return selectors;
          },
          extensions: ['js', 'jsx']
        }
      ]
    }),
    require('cssnano')
  ]
}