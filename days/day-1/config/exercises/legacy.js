'use strict';
var globby = require('globby');
var fs = require('fs');

var Extractor = require('../utils/Extractor');
var ExerciseType = require('../ExerciseType');

var titleExtractor = new Extractor()
  .addRule(/([^\/]+)\/index\.html$/, (_, title) => title);

module.exports = globby
  .sync('*/index.html', { cwd: './src/legacy-exercises' })
  .sort()
  .map(function(filePath) {
    var dir = filePath.replace(/\/index.html$/, '');
    var title = titleExtractor.execute(filePath);

    return {
      type: ExerciseType.Legacy,
      tags: ['es5'],
      title: title,
      path: title,
      absolutePath: '/legacy-exercises/' + title,
      absoluteFilePath: '/legacy-exercises/' + filePath,
      value: fs.readFileSync('./src/legacy-exercises/' + dir + '/README.md', 'utf8')
    };
  });
