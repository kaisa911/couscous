const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function htmlWebpackPlugin(mode) {
  return new HtmlWebpackPlugin({
    template: path.join(__dirname, '../src/index.html'),
    filename: 'index.html',
  });
}
module.exports = {
  htmlWebpackPlugin,
};
