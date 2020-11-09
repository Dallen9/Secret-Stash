const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  style: {
    postcss: {
      plugins: [
        purgecss({
          content: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.js'],
          css: ['./src/App.css'],
          safelist: ['button', 'segment', 'seg', 'card', 'a', 
          'body', 'h1', 'h2', 'h3', 'container', 'color', 'style', 'i', 'input', 'form' ]
        }),
      ],
    },
  },
  
}
