
/* jshint node:true */
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app')

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    sassOptions: {
      // needed when using bootstrap-sass,
      // good idea in general
      precision: 8
    }

  })

  return app.toTree()
}

