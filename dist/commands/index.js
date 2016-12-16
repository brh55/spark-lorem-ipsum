'use strict';

var generate = require('./generate');
var help = require('./help');

function commandFactory() {
  return new commands();
}

function commands() {
  this.generate = generate;
  this.help = help;
}

module.exports = commandFactory();