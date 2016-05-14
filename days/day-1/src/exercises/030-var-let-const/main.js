(function(namespace) {
  'use strict';
  var assert = namespace.TestUtils.assert;

  // var で宣言した変数は代入可能
  var v1 = 1;
  v1 = v1 + 1;
  assert.ok(v1 === 2, '例1');

  // let で宣言した変数は代入可能
  let v2 = 1;
  v2 = v2 + 1;
  assert.ok(v2 === 2, '例2');

  // const で宣言した変数は代入不可能
  // 演習: コメントを外した時の挙動を予想する
  const v3 = 1;
  // v3 = v3 + 1;
  // assert.ok(v3 === 2, "演習1");
})(window.JavaScriptWorkshop);
