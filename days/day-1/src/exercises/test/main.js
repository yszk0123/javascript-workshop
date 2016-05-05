(function(namespace) {
  "use strict";
  var assert = namespace.TestUtils.assert;

  console.log("成功例 ===========");
  assert.ok(1 + 1 === 2, "例1");
  assert.fail(1 + 1 !== 2, "例2");

  console.log("失敗 ===========");
  assert.ok(1 + 1 === 3, "例3");
  assert.fail(1 + 1 !== 3, "例4");
})(window.JavaScriptWorkshop);
