(function(namespace) {
  "use strict";
  var assert = namespace.TestUtils.assert;

  var items = [10, 20, 30];

  console.group("========== for ==========");

  var i;

  for (i = 0; i < items.length; i = i + 1) {
    console.log("items[" + i + "] = " + items[i]);
  }

  // 演習: for 文を使って各配列要素を10倍した配列を作る
  var newItemsUsingForStatement = [];
  // <ここで何かやる>
  assert.similar(newItemsUsingForStatement, [100, 200, 300], "演習");

  console.groupEnd();
  console.group("========== collection ==========");

  items.forEach(function(item, index) {
    console.log("items[" + index + "] = " + item);
  });

  // 演習: map を使って各配列要素を10倍した配列を作る
  var newItemsUsingMap = items.map(function(item, index) {
    // <ここで何かやる>
  });
  assert.similar(newItemsUsingMap, [100, 200, 300], "演習");

  console.groupEnd();
})(window.JavaScriptWorkshop);
