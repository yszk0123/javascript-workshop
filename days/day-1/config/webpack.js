'use strict';
var assign = require('object-assign');
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

var ExerciseType = require('./ExerciseType');
var collectExercises = require('./collectExercises');
var docs = require('./exercises/docs');
var collectWebpackEntries = require('./utils/collectWebpackEntries');

var PORT = parseInt(process.env.PORT || 3000, 10);
var COMMON_CHUNK = 'common-chunk';

var legacy = collectExercises('legacy-exercises', ExerciseType.Legacy, ['es5'], true);
var modular = collectExercises('modular-exercises', ExerciseType.Modular, ['es6']);
var exercises = legacy
  .concat(modular)
  .concat(docs)
  .sort(function comparator(a, b) {
    return a.title.localeCompare(b.title);
  });

var entries = assign(
  collectWebpackEntries('./src/entries', ''),
  collectWebpackEntries('./src/modular-exercises', 'modular-exercises-')
);
Object.keys(entries).forEach(function(key) {
  entries[key] = ['webpack/hot/only-dev-server'].concat(entries[key]);
});
entries[COMMON_CHUNK] = ['webpack-dev-server/client?http://localhost:' + PORT];

var htmlWebpackPlugins = Object.keys(entries)
  .map(function(name) {
    return new HtmlWebpackPlugin({
      title: 'JavaScript Workshop (day 1)',
      filename: name + '.html',
      chunks: [name, COMMON_CHUNK]
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
    publicPath: 'http://localhost:' + PORT + '/assets/'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel-loader'],
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
    publicPath: 'http://localhost:' + PORT + '/assets/',
    historyApiFallback: {
      index: 'http://localhost:' + PORT + '/assets/app.html'
    },
    port: PORT
  },
  plugins: htmlWebpackPlugins.concat([
    new ExtractTextWebpackPlugin('[name].css'),
    new webpack.DefinePlugin({
      '__INITIAL_STATE__': JSON.stringify(exercises),
      '__DEVELOPMENT__': true,
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new webpack.NoErrorsPlugin()
  ])
};
