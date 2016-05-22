'use strict';

function Extractor() {
  this.rules = [];
};

Extractor.prototype.addRule = function(pattern, handler) {
  this.rules.push({
    pattern: typeof pattern === 'string' ? new RegExp(pattern): pattern,
    handler
  });

  return this;
};

Extractor.prototype.execute = function(input) {
  var i, rule, match;

  for (i = 0; i < this.rules.length; i += 1) {
    rule = this.rules[i];
    match = rule.pattern.exec(input);
    if (match) {
      return rule.handler.apply(this, match);
    }
  }

  return null;
};

module.exports = Extractor;
