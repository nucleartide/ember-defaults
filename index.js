
var RSVP = require('rsvp')
var stringUtil = require('./utils/string')

module.exports = {
  locals: function(options) {
    var ui = this.ui
    var entity = options.entity
    var rawName = entity.name
    var name = stringUtil.dasherize(rawName)
    var namespace = stringUtil.classify(rawName)

    var options = {
      name: name,
      modulePrefix: name,
      namespace: namespace,
      emberCLIVersion: '2.5.1'
    }

    console.log(JSON.stringify(options, null, 2))
    return RSVP.Promise.resolve(options)
  }
}

