'use strict';
var globby = require('globby');
var fs = require('fs');

var FILE_PATTERN = /\.(?:jsx?|css|html)$/;
var ExerciseItemType = require('./ExerciseItemType');

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
      var originalDir = baseDir + title + '/';

      var files = [
        {
          type: ExerciseItemType.Demo,
          icon: 'play-circle-o',
          originalPath: originalDir + 'index.html',
          absolutePath: legacy ?
            '/' + namespace + '/' + title + '/index.html' :
            '/assets/' + namespace + '-' + title + '.html'
        },
        {
          type: ExerciseItemType.Doc,
          icon: 'file-o',
          originalPath: originalDir + 'README.md',
          absolutePath: '/assets/' + namespace + '-' + title + '/README.md',
          value: fs.readFileSync(baseDir + title + '/README.md', 'utf8')
        }
      ];
      files = files.concat(
        fs.readdirSync(originalDir)
          .filter(function(file) {
            return FILE_PATTERN.test(file);
          })
          .map(function(file) {
            return {
              type: ExerciseItemType.File,
              icon: 'file-code-o',
              originalPath: originalDir + file,
              absolutePath: '/assets/' + namespace + '-' + file,
              value: fs.readFileSync(originalDir + file, 'utf8')
            };
          })
      );

      return {
        type: type,
        tags: tags,
        title: title,
        path: title,
        absolutePath: '/' + namespace + '/' + title,
        files: files
      };
    });
}
