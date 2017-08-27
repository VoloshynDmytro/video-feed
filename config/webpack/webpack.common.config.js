const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');

module.exports = (config) => {

  return {
    entry: {},
    cache: true,
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(\.test.js$|node_modules)/,
          loader: 'ng-annotate!babel'
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "eslint-loader",
        },
        {
          test: /\.styl$/,
          loader: ExtractTextPlugin.extract('style', 'css!postcss!stylus?resolve url&paths[]=node_modules&paths[]=src/assets')
        },
        {
          test: /\.pug$/,
          loader: 'pug'
        },
        {
          test: /\.html$/,
          loader: 'html'
        },
        {
          test: /\.(jpg|jpeg|gif|png)$/,
          exclude: /node_modules/,
          loader:'url-loader?limit=1024&name=images/[name].[hash].[ext]'
        },
        {
          test: /\.(woff|woff2|eot|ttf)$/,
          exclude: /node_modules/,
          loader: 'url-loader?limit=1024&name=fonts/[name].[hash].[ext]'
        }
      ],
      noParse: /angular\/angular.js/
    },
    postcss: () => {
      return [autoprefixer];
    },
    plugins: [
      new ProgressBarPlugin({
        clear: false,
        format: '  Building Assets: [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)'
      }),
      new ExtractTextPlugin('styles/[name].[chunkhash].css', {
        allChunks: true
      }),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify(config.env),
          'API_URL': JSON.stringify(config.apiUrl)
        }
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: config.templates.index,
        favicon: '',
        inject: 'body',
        hash: true,
        chunksSortMode: 'dependency',
        coreURL: config.apiUrl,
        env: config.env
      })
    ]
  };
};
