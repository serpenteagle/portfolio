const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const sandbox = {
  mode: 'development',
  output: {
    path: path.join(__dirname, 'sandbox'),
    filename: 'bundle.js',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: path.join(__dirname, 'sandbox'),
    port: 9000,
    hot: true,
    historyApiFallback: true
  },
};

module.exports = merge(common, sandbox);
