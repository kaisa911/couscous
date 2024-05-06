const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const { htmlWebpackPlugin } = require('./htmlWebpackPlugin');
const mode = 'development';

module.exports = merge(common, {
  mode,
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    static: {
      directory: path.join(__dirname, 'build'),
      serveIndex: true,
    },
    historyApiFallback: {
      index: './index.html',
    },
    compress: false,
    port: 8080,
  },
  plugins: [htmlWebpackPlugin(mode), new webpack.HotModuleReplacementPlugin()],
});
