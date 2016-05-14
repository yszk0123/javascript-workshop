'use strict';
var globby = require('globby');
var fs = require('fs');

var Extractor = require('../utils/Extractor');
var ContentType = require('../ContentType');

var titleExtractor = new Extractor()
  .addRule(/([^\/]+)\/README\.md$/, function(_, title) { return title; })
  .addRule(/([^\/]+)\.md$/, function(_, title) { return title; });

module.exports = globby
  .sync(['*.md', '*/index.md'], { cwd: './docs' })
  .sort()
  .map(function(filePath) {
    var title = titleExtractor.execute(filePath);

    return {
      type: ContentType.Doc,
      title: title,
      path: title,
      absolutePath: '/docs/' + title,
      absoluteFilePath: '/docs/' + filePath,
      filePath: filePath,
      value: fs.readFileSync('./docs/' + filePath, 'utf8')
    };
  });
