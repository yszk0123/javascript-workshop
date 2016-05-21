(function(namespace) {
  'use strict';
  var assert = namespace.TestUtils.assert;
  var describe = namespace.TestUtils.describe;
  var runTest = namespace.TestUtils.runTest;
  var PathResolver = namespace.PathResolver;

  var resolver = new PathResolver({ currentDirectory: '/a/b/c' });

  describe('相対パス', function() {
    assert.ok(resolver.resolve('./file.js') === '/a/b/c/file.js');
    assert.ok(resolver.resolve('../file.js') === '/a/b/file.js');
    assert.ok(resolver.resolve('../../file.js') === '/a/file.js');
  });

  runTest();
})(window.JavaScriptWorkshop);
