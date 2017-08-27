const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.config');
const colorsSupported = require('supports-color');
const config = require('../index');

module.exports = webpackMerge(
  commonConfig(config),
  {
    devtool: 'cheap-source-map',
    entry: {
      app: [config.webpack.entries.app]
    },
    output: {
      filename: 'js/[name].js',
      publicPath: '/',
      path: path.join(config.clientAppRoot, 'src')
    },
    devServer: {
      port: config.devServer.port,
      host: config.devServer.host,
      inline: true,
      historyApiFallback: {
        disableDotRule: true
      },
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
      },
      stats: {
        colors: colorsSupported,
        chunks: false,
        errorDetails: true,
        children: false
      }
    },
    plugins: [
      // Automatically move all modules defined outside of application directory to vendor bundle.
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: (module, count) => {
          return module.resource && module.resource.indexOf(config.clientAppRoot) === -1;
        }
      })
    ]
  }
);
