
/* jshint node:true */
/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app')

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    sassOptions: {
      includePaths: [
        'bower_components/bootstrap-sass/assets/stylesheets'
      ],

      // for bootstrap-sass
      precision: 8
    },

    'ember-font-awesome': {
      useScss: true
    },

    // for ember-concurrency
    babel: {
      includePolyfill: true
    }
  })

  app.import('bower_components/bootstrap-sass/assets/javascripts/bootstrap.js')
  return app.toTree()
}

