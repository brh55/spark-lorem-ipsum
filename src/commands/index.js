'use strict';

const generate = require('./generate');
const help = require('./help');

function commandFactory() {
  return new commands;
}

function commands() {
  this.generate = generate;
  this.help = help;
}

module.exports = commandFactory();
