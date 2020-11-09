const purify = require("purify-css")
const htmlFiles = ['./src/**/*.html', './src/**/*.jsx', './src/**/*.js']
const cssFiles = ['**/src/css/*.css'];
const opts = {
    output: './build/static/css'
}
purify(htmlFiles, cssFiles, opts, function (res) {
    log(res);
});