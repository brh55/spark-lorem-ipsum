'use strict';

function help(bot, trigger) {
  bot.say(prompt(trigger));
}

function prompt(trigger) {
  return 'Hello, ' + trigger.displayName + ' following the examples below to start generating: \n\n\n            - make 5 paragraphs \n\n\n            - generate 4 words \n\n\n            - create 20 sentences \n\n\n            - create 3 paragraphs';
}

module.exports = help;