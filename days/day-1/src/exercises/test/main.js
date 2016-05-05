(function(namespace) {
  "use strict";
  var assert = namespace.TestUtils.assert;

  console.group("========== 成功例 ==========");
  assert.ok(1 + 1 === 2, "例1");
  assert.fail(1 + 1 !== 2, "例2");
  console.groupEnd();

  console.group("========== 失敗 ==========");
  assert.ok(1 + 1 === 3, "例3");
  assert.fail(1 + 1 !== 3, "例4");
  console.groupEnd();
})(window.JavaScriptWorkshop);
