'use strict';

var loremIpsum = require('lorem-ipsum');
var output = loremIpsum();

function generate(bot, trigger) {
  var ipsumText = createIpsum(trigger.text);
  bot.say({ markdown: ipsumText });
}

function createIpsum(phrase) {
  return loremIpsum({
    count: getCount(phrase),
    units: getUnit(phrase),
    sentenceLowerBound: 4,
    sentenceUpperBound: 9,
    paragraphLowerBound: 2,
    paragraphUpperBound: 6,
    format: 'plain',
    suffix: '\n\n'
  });
}

function getCount(text) {
  if (typeof text === 'string') {
    var request = text.match(/(create.|generate.|make.)\s*\d+/i);

    return request ? parseInt(request[0].match(/\d+/)[0]) : null;
  }
}

function getUnit(text) {
  if (typeof text === 'string') {
    var units = text.match(/(word.|sentence.|paragraph.)/i);

    return units ? units[0] : null;
  }
}

module.exports = generate;