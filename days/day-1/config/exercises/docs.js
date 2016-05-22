'use strict';
var globby = require('globby');
var fs = require('fs');

var Extractor = require('../utils/Extractor');
var ExerciseType = require('../ExerciseType');

var titleExtractor = new Extractor()
  .addRule(/([^\/]+)\/README\.md$/, function(_, title) { return title; })
  .addRule(/([^\/]+)\.md$/, function(_, title) { return title; });

module.exports = globby
  .sync(['*.md', '*/index.md'], { cwd: './docs' })
  .sort()
  .map(function(filePath) {
    var title = titleExtractor.execute(filePath);

    return {
      type: ExerciseType.Doc,
      tags: ['doc'],
      title: title,
      path: title,
      absolutePath: '/docs/' + title,
      script: null,
      doc: {
        absolutePath: '/docs/' + filePath,
        value: fs.readFileSync('./docs/' + filePath, 'utf8')
      },
      files: []
    };
  });
