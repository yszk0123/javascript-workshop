(function(namespace) {
  'use strict';
  var assert = namespace.TestUtils.assert;
  var describe = namespace.TestUtils.describe;
  var runTest = namespace.TestUtils.runTest;

  describe('成功例', function() {
    assert.ok(1 + 1 === 2, '例1');
    assert.fail(1 + 1 !== 2, '例2');
  });

  describe('失敗例', function() {
    assert.ok(1 + 1 === 3, '例1');
    assert.fail(1 + 1 !== 3, '例2');
  });

  describe('演習', function() {
    assert.shouldCorrect(1 + 1 === 2, '演習1');
    assert.shouldCorrect(1 + 1 !== 2, '演習2');
  });

  runTest();
})(window.JavaScriptWorkshop);
