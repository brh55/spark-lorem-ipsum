'use strict';

var Flint = require('node-flint');
var webhook = require('node-flint/webhook');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var config = require('./configs/config');
var commands = require('./commands/index');

app.use(bodyParser.json());

// Flint
var flint = new Flint(config);
flint.messageFormat = 'markdown';
flint.start();

// Flint Command Listeners
// 'Generate | Create | Make' but allow 1 char typo
flint.hears(/(create.|generate.|make.)/i, commands.generate, '[generate|make|create] [qty] [sentences|words|paragraphs]');
flint.hears(/help/i, commands.help);

app.post('/flint', webhook(flint));
var server = app.listen(config.port, function () {
  flint.debug('Flint listening on port %s', config.port);
});

process.on('SIGINT', function () {
  flint.debug('Shutting down...');
  server.close();
  flint.stop().then(function () {
    process.exit();
  });
});