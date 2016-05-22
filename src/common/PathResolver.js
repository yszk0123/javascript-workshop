(function(namespace) {
  'use strict';

  class PathResolver {
    constructor(options) {
      options = options || {};
      this.currentDirectory = options.currentDirectory;
    }

    resolve(pathString) {
      var prefixPath = this.currentDirectory.split('/');
      var postfixPath = [];
      var path = pathString.split('/');

      path.forEach(function(pathFragment) {
        if (pathFragment === '') {
          prefixPath = [''];
          return;
        }

        if (pathFragment === '.') {
          return;
        }

        if (pathFragment === '..') {
          if (!prefixPath.length) {
            throw new Error('reach the root directory');
          }

          prefixPath.pop();
          return;
        }

        postfixPath.push(pathFragment);
      });

      return prefixPath.concat(postfixPath).join('/');
    }
  }

  namespace.PathResolver = PathResolver;
})(window.JavaScriptWorkshop);
