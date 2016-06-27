(function(namespace) {
  'use strict';
  var assert = namespace.TestUtils.assert;
  var describe = namespace.TestUtils.describe;
  var runTest = namespace.TestUtils.runTest;

  describe('var で宣言した変数は代入可能', function() {
    var v1 = 1;
    v1 = v1 + 1;
    assert.ok(v1 === 2, '例1');
  });

  describe('let で宣言した変数は代入可能', function() {
    let v2 = 1;
    v2 = v2 + 1;
    assert.ok(v2 === 2, '例2');
  });

  describe('const で宣言した変数は代入不可能', function() {
    // 演習: コメントを外した時の挙動を予想する
    const v3 = 1;
    // v3 = v3 + 1;
    // assert.ok(v3 === 2, "演習1");
  });

  runTest();
})(window.JavaScriptWorkshop);
