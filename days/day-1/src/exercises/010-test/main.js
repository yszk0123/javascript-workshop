(function(namespace) {
  'use strict';
  var assert = namespace.TestUtils.assert;

  function testSuccess() {
    console.group('成功例');
    assert.ok(1 + 1 === 2, '例1');
    assert.fail(1 + 1 !== 2, '例2');
    console.groupEnd();
  }

  testSuccess();

  function testFailure() {
    console.group('失敗例');
    assert.ok(1 + 1 === 3, '例1');
    assert.fail(1 + 1 !== 3, '例2');
    console.groupEnd();
  }

  testFailure();

  function testExercise() {
    console.group('演習');
    assert.shouldCorrect(1 + 1 === 2, '演習1');
    assert.shouldCorrect(1 + 1 !== 2, '演習2');
    console.groupEnd();
  }

  testExercise();
})(window.JavaScriptWorkshop);
