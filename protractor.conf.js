const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
const utils = require('./test/e2e/common/utils/utils');

exports.config = {
  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  suites: {
    all: [
      './test/e2e/**/*.spec.js'
    ]
  },
  suite: 'all',
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['no-sandbox']
    }
  },
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  },
  onPrepare: () => {
    require('babel-core/register');
    require('babel-polyfill');

    // Cleanup artifacts dir
    utils.cleanupLogs();

    jasmine.getEnv().addReporter(new SpecReporter({
      displayStacktrace: 'none',
      prefixes: {
        success: '+ ',
        failure: 'x ',
        pending: '* '
      },
      suite: {
        displayNumber: true,    // display each suite number (hierarchical)
      },
      spec: {
        displayPending: true,   // display each pending spec
        displayDuration: true,  // display each spec duration
      }
    }));

    jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
      savePath: './test/e2e/reports/',
      cleanDestination: false
    }));

    // Collect screenshots for failed scenarios
    jasmine.getEnv().addReporter({
      specDone(result) {
        if (result.status === 'failed') {
          utils.takeScreenshot(result.fullName);
        }
      }
    });

    // Write browser's logs
    jasmine.getEnv().addReporter({
      specDone(result) {
        browser.manage().logs().get('browser').then((browserLog) => {
          utils.writeBrowserLog(result.fullName, browserLog);
        });
      }
    });

    browser.manage().window().setSize(1280, 1024);
    console.log('We are going to use the following baseUrl during the tests:', browser.baseUrl); // eslint-disable-line no-console

  }
};