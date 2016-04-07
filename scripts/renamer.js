
var fs = require('fs')
var dasherize = require('dasherize')
var pascalCase = require('pascal-case')

var name = process.argv[2]
if (!name) {
  console.log('no name provided')
  process.exit(1)
}

// app/index.html
var indexHTML = String(fs.readFileSync('app/index.html'))
indexHTML = indexHTML.replace('EmberDefaults', pascalCase(name))
indexHTML = indexHTML.replace(/ember-defaults/g, dasherize(name))
fs.writeFileSync('app/index.html', indexHTML)

// bower.json
var bowerJSON = JSON.parse(fs.readFileSync('bower.json'))
bowerJSON.name = dasherize(name)
fs.writeFileSync('bower.json', JSON.stringify(bowerJSON, null, 2))

// config/environment.js
var ENV = String(fs.readFileSync('config/environment.js'))
ENV = ENV.replace('ember-defaults', dasherize(name))
fs.writeFileSync('config/environment.js', ENV)

// package.json
var packageJSON = JSON.parse(fs.readFileSync('package.json'))
packageJSON.name = dasherize(name)
packageJSON.description = 'Small description for ' + dasherize(name) + ' goes here'
fs.writeFileSync('package.json', JSON.stringify(packageJSON, null, 2))

// tests/index.html
var indexHTML = String(fs.readFileSync('tests/index.html'))
indexHTML = indexHTML.replace('EmberDefaults', pascalCase(name))
indexHTML = indexHTML.replace(/ember-defaults/g, dasherize(name))
fs.writeFileSync('tests/index.html', indexHTML)

