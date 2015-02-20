
module.exports = function(karma) {

  karma.set({
    frameworks: ['browserify', 'mocha'],

    files: [
      'test/*.js'
    ],

    preprocessors: {
      'test/*.js': [ 'browserify' ]
    },

    browsers:['Chrome'],

    autoWatch: true,
    //singleRun: false,

    logLevel:karma.LOG_DEBUG,

    reporters:[
      'growl', 'spec'
    ],

    browserify: {
      debug: true,
      transform:[ ],
      plugin:[
        "proxyquire-universal"
      ]
    }
  });
};