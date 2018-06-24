const { resolve } = require("path");
const webpack = require("webpack");
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",

  entry: {
    background_scripts: "./src/background_scripts/main.js",
    popup: "./src/popup/main.js",
    options: "./src/options/main.js"
  },

  output: {
    path: resolve(__dirname, "addon"),
    filename: "[name].js",
    publicPath: "/"
  },

  resolve: {
    symlinks: false,
    cacheWithContext: false,
    extensions: [".js"]
  },

  module: {
    rules: [
      {
        include: path.resolve(__dirname, 'src'),
        test: /\.pug$/,
        use: {
          loader: 'pug-loader',
          options: {
            pretty: true
          }
        }
      },
      {
        include: path.resolve(__dirname, 'src'),
        test: /\.(sass|scss)$/,
        use: ['cache-loader', MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        include: path.resolve(__dirname, 'src'),
        test: /\.(png|jpg|jpeg|gif|woff2|wav)$/,
        use: ['cache-loader', "file-loader"]
      },
      {
        include: path.resolve(__dirname, 'src'),
        test: /\.js$/,
        loader: "babel-loader"
      }
    ]
  },

  plugins: [
    //new webpack.optimize.UglifyJsPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new HtmlWebpackPlugin({
      filename: "popup.html",
      template: "src/popup/index.pug",
      chunksSortMode: "dependency",
      chunks: ["popup"]
    }),
    new HtmlWebpackPlugin({
      filename: "options.html",
      template: "src/options/index.pug",
      chunksSortMode: "dependency",
      chunks: ["options"]
    })
  ]
};
