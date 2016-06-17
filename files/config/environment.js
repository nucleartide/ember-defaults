
/* jshint node: true */

var developmentENV = require('./environment-development')
var testENV = require('./environment-test')
var productionENV = require('./environment-production')

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-defaults',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',

    EmberENV: {
      FEATURES: {
      }
    },

    APP: {
    }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/'
    ENV.locationType = 'none'

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false
    ENV.APP.LOG_VIEW_LOOKUPS = false

    ENV.APP.rootElement = '#ember-testing'
  }

  if (environment === 'development') Object.assign(ENV, developmentENV)
  if (environment === 'test') Object.assign(ENV, testENV)
  if (environment === 'production') Object.assign(ENV, productionENV)

  return ENV
}

