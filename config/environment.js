
/* jshint node: true */

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

  if (environment === 'development') {
  }

  if (environment === 'test') {
    ENV.baseURL = '/'
    ENV.locationType = 'none'
    ENV.APP.LOG_ACTIVE_GENERATION = false
    ENV.APP.LOG_VIEW_LOOKUPS = false
    ENV.APP.rootElement = '#ember-testing'
  }

  if (environment === 'production') {
  }

  return ENV
}

