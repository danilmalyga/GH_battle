// 1. entry
// 2.output
// 3.loader
//4.plugins

var path = require('path');
var HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), //???????/?????
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.(css)$/, use: ['style-loader', 'css-loader'] },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './app/index.html',
    }),
  ],
};
