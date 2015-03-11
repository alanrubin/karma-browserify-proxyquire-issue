var cover = require('browserify-istanbul');

var coverOptions = {
  ignore: ['**/*test.js']
  //defaultIgnore: true
};

module.exports = function(karma) {

  karma.set({
    frameworks: ['browserify', 'mocha', 'chai-sinon'],

    files: [
      'test/*.js', 'test/*.coffee'
    ],

    preprocessors: {
      'test/*.js': [ 'browserify' ],
      'test/*.coffee': [ 'browserify' ]
    },

    browsers:['Chrome'],

    autoWatch: true,
    singleRun: false,

    logLevel:karma.LOG_DEBUG,

    reporters:[
      'growl', 'spec', 'coverage'
    ],

    coverageReporter: {
      type : 'html',
      dir: 'coverage/'
    },

    browserify: {
      debug: true,
      plugin: ['proxyquire-universal'],
      transform: ['coffee-reactify'],
      extensions : ['.js', '.coffee']
    }
  });
};