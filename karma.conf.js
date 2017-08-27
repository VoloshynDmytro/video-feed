const webpack = require('webpack');
const isDocker = require('is-docker')();
const webpackConfig = require('./config/webpack/webpack.test.config');

module.exports = function(config) {
  config.set({
    browsers:  ['ChromeCustom'],
    customLaunchers: {
      ChromeCustom: {
        base: 'ChromeHeadless',
        // We must disable the Chrome sandbox when running Chrome inside Docker (Chrome's sandbox needs
        // more permissions than Docker allows by default)
        flags: isDocker ? ['--no-sandbox'] : []
      }
    },
    frameworks: [
      'jasmine',
      'jasmine-matchers'
    ],
    reporters:  ['mocha'],
    logLevel: config.LOG_INFO,
    autoWatch: false,
    singleRun: true,
    colors: true,
    port: 9876,

    basePath: '',
    plugins: [
      require('karma-jasmine'),
      require('karma-jasmine-matchers'),
      require('karma-chrome-launcher'),
      require('karma-mocha-reporter'),
      require('karma-sourcemap-loader'),
      require('karma-webpack')
    ],
    files: ['webpack.karma.context.js'],
    preprocessors: { 'webpack.karma.context.js': ['webpack', 'sourcemap'] },
    exclude: [],
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    }
  });
};