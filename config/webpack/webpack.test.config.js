const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.config');
const config = require('../index');

module.exports = webpackMerge(
  commonConfig(config),
  {
    devtool: 'inline-source-map'
  }
);