
# Ember Defaults

When starting a new Ember project, I find myself configuring and installing the
same things over and over. This project intends to be a better starting point
for my own use cases; it may or may not work for you.

## Features

- [x] fewer dotfiles
- [x] no semicolons
- [x] optional curly braces
- [x] collected wisdom from the Ember community ![](https://github.com/jmhobbs/cultofthepartyparrot.com/blob/master/parrots/parrot.gif)

## Includes

#### CSS

- [x] ember-cli-sass
- [x] bootstrap-sass
- [x] ember-font-awesome
- [x] ember-component-css

#### Helpers

- [x] ember-truth-helpers
- [x] ember-route-action-helper

#### Misc.

- [x] ember-ajax 2.0.0 for latest features

## Install

```bash
$ git clone https://github.com/nucleartide/ember-defaults
$ rm -rf .git && git init
$ npm i && bower i
$ node scripts/rename-project.js <your project name here>
$ ember serve
```

