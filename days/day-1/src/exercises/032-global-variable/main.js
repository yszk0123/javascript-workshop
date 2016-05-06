(function(namespace) {
  "use strict";
  var assert = namespace.TestUtils.assert;

  assert.ok(window.document === document, "例1");
  assert.ok(window.window === window, "例2");

  // 演習: 次の値をコンソールで表示できるか確認する
  var localVariable = "This variable is local";

  // 演習: 次の値をコンソールで表示できるか確認する
  window.globalVariable = "This variable is global";

  // 演習: "use strict" をコメントアウトした状態で次のコードが実行できることを確認する
  // undefinedVariable = "This variable is global!!!";
})(window.JavaScriptWorkshop);

// 演習: ここで定義した変数 (グローバル変数) は他のファイルからも参照できてしまう
