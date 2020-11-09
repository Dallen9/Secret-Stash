const purgecss = require('@fullhuman/postcss-purgecss');
const purify = require("purify-css")

module.exports = {
  style: {
    postcss: {
      plugins: [
        purify ({
        })const htmlFiles = ['./src/**/*.html', './src/**/*.jsx', './src/**/*.js']
        // purgecss({
        //   content: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.js'],
        //   safelist: []
        // }),
      ],
    },
  },
  
}
