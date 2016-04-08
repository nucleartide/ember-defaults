
# Ember Defaults

When starting a new Ember project, I find myself configuring and installing the
same things over and over. This project intends to be a better starting point
for my own use cases; it may or may not work for you.

## Features

![](https://github.com/jmhobbs/cultofthepartyparrot.com/blob/master/parrots/parrot.gif)
![](https://github.com/jmhobbs/cultofthepartyparrot.com/blob/master/parrots/parrot.gif)
![](https://github.com/jmhobbs/cultofthepartyparrot.com/blob/master/parrots/parrot.gif)
![](https://github.com/jmhobbs/cultofthepartyparrot.com/blob/master/parrots/parrot.gif)

- [x] fewer dotfiles
- [x] no semicolons
- [x] optional curly braces
- [x] collected wisdom from the Ember community

## Includes

#### Helpers

- [x] ember-truth-helpers
- [x] ember-route-action-helper
- [x] ember-moment

#### CSS

- [x] ember-cli-sass
- [x] bootstrap-sass
- [x] ember-font-awesome
- [x] ember-component-css

#### Async

- [x] ember-ajax 2.0.0 for latest features
- [x] ember-concurrency

## Install

```bash
git clone https://github.com/nucleartide/ember-defaults
rm -rf .git && git init
npm i && bower i
node scripts/rename-project.js <your_project_name_here>
ember serve
```

