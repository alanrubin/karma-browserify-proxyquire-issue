var cover = require('browserify-istanbul');

var coverOptions = {
  ignore: ['**/*test.js']
  //defaultIgnore: true
};

module.exports = function(karma) {

  karma.set({
    frameworks: ['browserify', 'mocha', 'chai-sinon'],

    files: [
      'test/*.js'
    ],

    preprocessors: {
      'test/*.js': [ 'browserify' ]
    },

    browsers:['Chrome'],

    //autoWatch: true,
    singleRun: true,

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
      extensions : ['.js'],
      configure: function (bundle) {
        bundle.on('prebundle', function () {
          bundle
            .plugin('proxyquire-universal')
            .transform(cover(coverOptions))
        });
      }
    }
  });
};