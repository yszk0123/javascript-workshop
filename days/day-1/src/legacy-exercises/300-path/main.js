(function(namespace) {
  'use strict';
  var assert = namespace.TestUtils.assert;
  var describe = namespace.TestUtils.describe;
  var runTest = namespace.TestUtils.runTest;
  var PathResolver = namespace.PathResolver;

  var resolver = new PathResolver({ currentDirectory: '/a/b/c' });

  describe('演習: ? を修正する', function() {
    assert.ok(resolver.resolve('./file.js') === '?', 'Q1');
    assert.ok(resolver.resolve('../file.js') === '?', 'Q2');
    assert.ok(resolver.resolve('../../file.js') === '?', 'Q3');
  });

  runTest();
})(window.JavaScriptWorkshop);
