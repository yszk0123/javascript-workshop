'use strict';
var globby = require('globby');
var fs = require('fs');

var Extractor = require('../utils/Extractor');
var ExerciseType = require('../ExerciseType');

var titleExtractor = new Extractor()
  .addRule(/([^\/]+)\/index\.js$/, (_, title) => title);

module.exports = globby
  .sync('*/index.js', { cwd: './src/modular-exercises' })
  .sort()
  .map(function(originalFilePath) {
    var title = titleExtractor.execute(originalFilePath);
    var filePath = originalFilePath.replace(/\/index\.js$/, '.html');

    return {
      type: ExerciseType.Modular,
      tags: ['es6'],
      title: title,
      path: title,
      absolutePath: '/modular-exercises/' + title,
      absoluteFilePath: '/assets/modular-exercises-' + filePath,
      value: fs.readFileSync('./src/modular-exercises/' + title + '/README.md', 'utf8')
    };
  });
