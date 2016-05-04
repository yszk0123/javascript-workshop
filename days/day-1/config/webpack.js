"use strict";
var webpack = require("webpack");
var path = require("path");
var ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
var globby = require("globby");
var autoprefixer = require("autoprefixer");

module.exports = {
  devtool: "cheap-module-eval-source-map",
  node: {
    __dirname: false
  },
  entry: {
    "app": [
      "./src/entries/app/index",
      "webpack/hot/dev-server",
      // "webpack-dev-server/client?http://localhost:3000/build"
    ]
  },
  output: {
    path: path.resolve("./dist"),
    filename: "[name].js",
    publicPath: "http://localhost:3000/assets/"
  },
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx", ".json"]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        include: [
          path.resolve(__dirname, "..", "src"),
          path.resolve(__dirname, "..", "test")
        ]
      },
      {
        test: /\.css?$/,
        loader: ExtractTextWebpackPlugin.extract(
          "style-loader",
          "css-loader?modules&importLoaders=1&localIdentName=[local]---[hash:base64:5]",
          "postcss-loader"
        ),
        include: [
          path.resolve(__dirname, "..", "src"),
          path.resolve(__dirname, "..", "test")
        ]
      },
      {
        test: /\.css?$/,
        loader: ExtractTextWebpackPlugin.extract("style-loader", "css-loader"),
        include: path.resolve(__dirname, "..", "node_modules")
      },
      {
        test: /\.(md|html)$/,
        loader: "file-loader"
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  },
  postcss: [autoprefixer],
  devServer: {
    // hot: true,
    // inline: true,
    contentBase: "./src",
    publicPath: "http://localhost:3000/assets/",
    historyApiFallback: {
      index: "http://localhost:3000/entries/app/index.html"
    },
  },
  plugins: [
    new ExtractTextWebpackPlugin("style.css"),
    new webpack.DefinePlugin({
      "__EXERCISES__": JSON.stringify(globby.sync("exercises/*/index.html", { cwd: "./src" })),
      "__DOCUMENTS__": JSON.stringify(globby.sync("./{src,test,docs}/**/*.md", { realpath: true }).map(function(filename) {

        return {
          filename: filename,
          content: fs.readFileSync(filename, "utf8")
        };
      })),
      "__DEVELOPMENT__": true,
      "process.env": {
        "NODE_ENV": JSON.stringify("development")
      }
    }),
    new webpack.NoErrorsPlugin()
  ]
};
