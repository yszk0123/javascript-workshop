(function(namespace) {
  "use strict";
  var assert = namespace.TestUtils.assert;

  // var で宣言した変数は代入可能
  var v1 = 1;
  v1 = v1 + 1;

  // let で宣言した変数は代入可能
  let v2 = 1;
  v2 = v2 + 1;

  // const で宣言した変数は代入不可能
  const v3 = 1;
  v3 = v3 + 1;
})(window.JavaScriptWorkshop);
