'use strict';
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

var PORT = parseInt(process.env.PORT || 3000, 10);
var COMMON_CHUNK = 'common-chunk';
var VENDOR_CHUNK = 'vendor-chunk';

var entries = {
  app: './src/app'
};

entries[VENDOR_CHUNK] = [
  'webpack/hot/only-dev-server',
  'global',
  'react',
  'react-dom',
  'normalize.css',
  'webpack-dev-server/client?http://localhost:' + PORT
];

var htmlWebpackPlugins = Object.keys(entries)
  .map(function(name) {
    return new HtmlWebpackPlugin({
      title: 'JavaScript Workshop',
      filename: name + '.html',
      chunks: [COMMON_CHUNK, VENDOR_CHUNK, name]
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
    root: [
      path.resolve('./node_modules'),
      path.resolve('./packages')
    ],
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel-loader?cacheDirectory'],
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
    new webpack.optimize.CommonsChunkPlugin({
        names: [COMMON_CHUNK, VENDOR_CHUNK],
        minChunks: 3
    }),
    new ExtractTextWebpackPlugin('[name].css'),
    new webpack.DefinePlugin({
      '__DEVELOPMENT__': true,
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new webpack.NoErrorsPlugin()
  ])
};
