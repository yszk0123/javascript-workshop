'use strict';
var globby = require('globby');
var fs = require('fs');

var FILE_PATTERN = /\.(?:jsx?|css|html)$/;

module.exports = function collectExercises(namespace, type, tags, legacy) {
  const baseDir = './src/' + namespace + '/';

  return globby
    .sync('*/index.{js,jsx,html}', { cwd: baseDir })
    .sort()
    .map(function(originalFilePath) {
      var title = originalFilePath
        .replace(/([^\/]+)\/index\.(?:jsx?|html)$/, function(_, t) {
          return t;
        });
      var absoluteHtmlPath = originalFilePath
        .replace(/\/index\.(?:jsx?|html)$/, '.html');
      var exerciseBasePath = baseDir + title + '/';

      return {
        type: type,
        tags: tags,
        title: title,
        path: title,
        absolutePath: '/' + namespace + '/' + title,
        script: {
          absolutePath: legacy ?
            '/' + namespace + '/' + title + '/index.html' :
            '/assets/' + namespace + '-' + title + '.html'
        },
        doc: {
          absolutePath: '/assets/' + namespace + '-' + title + '/README.md',
          value: fs.readFileSync(baseDir + title + '/README.md', 'utf8')
        },
        files: fs.readdirSync(exerciseBasePath)
          .filter(function(file) {
            return FILE_PATTERN.test(file);
          })
          .map(function(file) {
            return {
              absolutePath: '/assets/' + namespace + '-' + file,
              value: fs.readFileSync(exerciseBasePath + file, 'utf8')
            };
          })
      };
    });
}
