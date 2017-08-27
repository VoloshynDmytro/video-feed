const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.config');
const config = require('../index');

module.exports = webpackMerge(
  commonConfig(config),
  {
    devtool: 'cheap-source-map',
    entry: {
      app: [config.webpack.entries.app]
    },
    output: {
      filename: 'js/[name].[hash].js',
      publicPath: '/',
      path: config.publicRoot
    },
    plugins: [
      // Reduces bundles total size
      new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compress: {
          warnings: false
        },

        mangle: {
         keep_fnames: true,
          // You can specify all variables that should not be mangled.
          // For example if your vendor dependency doesn't use modules
          // and relies on global variables. Most of angular modules relies on
          // angular global variable, so we should keep it unchanged
         except: ['$super', '$', 'exports', 'require', 'angular', '']
        }
      }),
      // Automatically move all modules defined outside of application directory to vendor bundle.
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: (module, count) => {
          return module.resource && module.resource.indexOf(config.clientAppRoot) === -1;
        }
      }),
      new webpack.optimize.DedupePlugin()
    ]
  }
);
