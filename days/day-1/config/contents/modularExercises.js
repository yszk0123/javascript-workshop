'use strict';
var globby = require('globby');
var fs = require('fs');

var Extractor = require('../utils/Extractor');
var ContentType = require('../ContentType');

var titleExtractor = new Extractor()
  .addRule(/([^\/]+)\/index\.js$/, (_, title) => title);

module.exports = globby
  .sync('*/index.js', { cwd: './src/modular-exercises' })
  .sort()
  .map(function(filePath) {
    var title = titleExtractor.execute(filePath);

    return {
      type: ContentType.ModularExercise,
      title: title,
      path: title,
      absolutePath: '/modular-exercises/' + title,
      absoluteFilePath: '/modular-exercises/' + filePath,
      filePath: filePath,
      value: fs.readFileSync('./src/modular-exercises/' + title + '/README.md', 'utf8')
    };
  });
