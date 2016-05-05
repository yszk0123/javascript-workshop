(function(namespace) {
  "use strict";
  var assert = namespace.TestUtils.assert;

  if (true) {
    var variableInIfStatement = "variableInIfStatement";
    let letInIfStatement = "letInIfStatement";
    const constInIfStatement = "constInIfStatement";
    assert.ok(variableInIfStatement === "variableInIfStatement", "例1");
  }

  function something() {
    var variableInFunction = "variableInFunction";
    assert.ok(variableInFunction === "variableInFunction", "例1");
  }

  assert.ok(variableInIfStatement === "variableInIfStatement", "例1");
  assert.ok(letInIfStatement === undefined, "例1");
  assert.ok(constInIfStatement === undefined, "例1");

  // 演習: 次のコードの実行結果を予想してみる
  // assert.ok(variableInFunction === "variableInFunction", "例1");
})(window.JavaScriptWorkshop);
