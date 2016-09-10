module.exports = function(config) {
  var webpackTest = require('./config/webpack.test.js');

  var configuration = {
    basePath: '',
    frameworks: ['jasmine'],
    files: [{ pattern: './config/karma-test-shim.js', watched: false }],
    preprocessors: { './config/karma-test-shim.js': ['coverage', 'webpack', 'sourcemap'] },
    webpack: webpackTest,
    webpackServer: { noInfo: true },
    webpackMiddleware: { stats: 'errors-only' },
    coverageReporter: {
      dir : 'coverage/',
      reporters: [
        { type: 'text-summary' },
        { type: 'json' },
        { type: 'html' }
      ]
    },
    reporters: [ 'mocha', 'coverage' ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true
  };

  config.set(configuration);
}
