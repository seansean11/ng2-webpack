var helpers = require('./config/helpers');

exports.config = {
  baseUrl: 'http://localhost:8080/',
  specs: [
    helpers.root('src/**/**.e2e.ts'),
    helpers.root('src/**/*.e2e.ts')
  ],
  framework: 'jasmine2',
  allScriptsTimeout: 11000,
  jasmineNodeOpts: {
    showTiming: true,
    showColors: true,
    isVerbose: false,
    includeStackTrace: false,
    defaultTimeoutInterval: 400000
  },
  directConnect: true,
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['show-fps-counter-true']
    }
  },
  onPrepare: function() {
    browser.ignoreSunchronization = true;
  },
  useAllAngular2AppRoots: true
};
