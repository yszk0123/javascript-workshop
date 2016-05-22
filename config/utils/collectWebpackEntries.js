'use strict';

var fs = require('fs');
var path = require('path');

var EXCLUDE_PATTERN = /^\./;

var stripSuffix = function(path) {
  return path.split('.').slice(0, -1).join('.');
};

module.exports = function collectEntries(root, prefix) {
  return fs.readdirSync(root)
    .filter(function(name) { return !EXCLUDE_PATTERN.test(name); })
    .reduce(function(entries, name) {
      var resolvedPath = require.resolve(path.join('..', '..', root, name));
      entries[prefix + name] = [stripSuffix(resolvedPath)];
      return entries;
    }, {});
};
