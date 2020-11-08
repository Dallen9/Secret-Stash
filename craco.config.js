const PurgecssPlugin = require('purgecss-webpack-plugin')
var UglifyJsPlugin = require("uglifyjs-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const glob = require('glob')
const path = require('path')

module.exports = {
  webpack: {
    alias: {
      react: path.resolve(__dirname, './node_modules/react'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html"
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      }),
      new PurgecssPlugin({
        paths: glob.sync(`${path.join(__dirname, 'src')}/**/*`,  { nodir: true }),
      }),
    ],
    configure: {
      module: {
        rules: [
    
          // css file: extract to css file with mini extract plugin
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"]
          }
        ]
      },
      optimization: {
        minimizer: [new UglifyJsPlugin()]
      },
    }
  }
};
