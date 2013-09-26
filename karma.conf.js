// Karma configuration file
// See http://karma-runner.github.io/0.10/config/configuration-file.html
module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      // libraries
      
      'lib/angular.js',
      'lib/angular-mocks.js',

      // our app
      'js/*.js',

      // tests
      'test/*.js',

      // templates
      'templates/*.html'
    ],

    // generate js files from html templates
    preprocessors: {
      'templates/*.html': 'ng-html2js'
    },

    autoWatch: true,
    browsers: ['Chrome']
  });
};