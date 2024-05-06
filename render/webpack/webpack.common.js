const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './render/src/index',
  output: {
    filename: '[name].[hash:8].js',
    path: path.join(__dirname, '../dist-main'),
  },
  target: 'electron-renderer',
  resolve: {
    // 引入的默认后缀名,一个个找
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src/'), // 这样配置后 @ 可以指向 src 目录
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.less$/, // 正则表达式匹配 CSS 文件
        use: [
          'style-loader', // 将 CSS 插入到 DOM
          'css-loader', // 解析 CSS 文件并将其转换为模块
          'less-loader',
          {
            loader: 'postcss-loader', // 使用 PostCSS 插件
            options: {
              postcssOptions: {
                plugins: [
                  require('autoprefixer'), // 添加浏览器前缀
                ],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [],
};
