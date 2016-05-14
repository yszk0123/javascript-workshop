'use strict';
var assign = require('object-assign');
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

var docs = require('./contents/docs');
var legacyExercises = require('./contents/legacyExercises');
var modularExercises = require('./contents/modularExercises');
var collectWebpackEntries = require('./utils/collectWebpackEntries');

var contents = legacyExercises.concat(modularExercises).concat(docs);

var entries = assign(
  collectWebpackEntries('./src/entries', ''),
  collectWebpackEntries('./src/modular-exercises', 'modular-exercises-')
);
entries.app.push('webpack/hot/dev-server');

var htmlWebpackPlugins = Object.keys(entries)
  .map(function(name) {
    return new HtmlWebpackPlugin({
      title: 'JavaScript Workshop (day 1)',
      filename: name + '.html',
      chunks: [name]
    });
  });

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  node: {
    __dirname: false
  },
  entry: entries,
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
    publicPath: 'http://localhost:3000/assets/'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, '..', 'src'),
          path.resolve(__dirname, '..', 'test')
        ]
      },
      {
        test: /\.css?$/,
        loader: ExtractTextWebpackPlugin.extract(
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[local]---[hash:base64:5]',
          'postcss-loader'
        ),
        include: [
          path.resolve(__dirname, '..', 'src'),
          path.resolve(__dirname, '..', 'test')
        ]
      },
      {
        test: /\.css?$/,
        loader: ExtractTextWebpackPlugin.extract('style-loader', 'css-loader'),
        include: path.resolve(__dirname, '..', 'node_modules')
      },
      {
        test: /\.(md|html)$/,
        loader: 'file-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ]
  },
  postcss: [autoprefixer],
  devServer: {
    // hot: true,
    // inline: true,
    contentBase: './src',
    publicPath: 'http://localhost:3000/assets/',
    historyApiFallback: {
      index: 'http://localhost:3000/assets/app.html'
    },
  },
  plugins: htmlWebpackPlugins.concat([
    new ExtractTextWebpackPlugin('[name].css'),
    new webpack.DefinePlugin({
      '__INITIAL_STATE__': JSON.stringify(contents),
      '__DEVELOPMENT__': true,
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new webpack.NoErrorsPlugin()
  ])
};
