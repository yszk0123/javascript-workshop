(function(namespace) {
  'use strict';
  var assert = namespace.TestUtils.assert;
  var PathResolver = namespace.PathResolver;

  var pathResolver = new PathResolver({
    currentDirectory: '/a/b/c',
  });

  assert.ok(pathResolver.resolve('?') === '/a/b/c/foo.txt', 'Q1');
  assert.ok(pathResolver.resolve('?') === '/a/foo.txt', 'Q2');
  assert.ok(pathResolver.resolve('?') === '/a/b/d/bar.txt', 'Q3');
})(window.JavaScriptWorkshop);