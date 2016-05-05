"use strict";
var commonConfig = require("../config/common/config");
var webpack = require("webpack");

module.exports = {
  resolve: commonConfig.webpack.resolve,
  module: {
    loaders: commonConfig.webpack.module.loaders
      .filter(function(loader) { return loader.loader.indexOf("babel") !== 0 ; })
  },
  postcss: commonConfig.webpack.postcss,
  plugins: [
    new webpack.DefinePlugin({
      // TODO: Don't use environment variable
      "__STORYBOOK_BASEDIR__": "'../src/" + (process.env.STORYBOOK_BASEDIR || "") + "'",

      "__DEVELOPMENT__": true
    })
  ]
};
