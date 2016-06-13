// FIXME: わかりにくい

(function(namespace) {
  'use strict';
  var assert = namespace.TestUtils.assert;
  var describe = namespace.TestUtils.describe;
  var runTest = namespace.TestUtils.runTest;

  describe('window. は省略できる', function() {
    assert.ok(window.document === document, '例1');
    assert.ok(window.window === window, '例2');
  });

  describe('演習: 次の値をコンソールで表示できるか確認する', function() {
    var localVariable = 'This variable is local';
    assert.ok(false, '確認したらtrueに変える');
  });

  describe('演習: 次の値をコンソールで表示できるか確認する', function() {
    window.globalVariable = 'This variable is global';
    assert.ok(false, '確認したらtrueに変える');
  });

  describe('演習: "use strict" をコメントアウトした状態で次のコードが実行できることを確認する', function() {
    // undefinedVariable = 'This variable is global!';
    assert.ok(false, '確認したらtrueに変える');
  });

  runTest();
})(window.JavaScriptWorkshop);

// 演習: ここで宣言した変数 (グローバル変数) は他のファイルからも参照できてしまう
