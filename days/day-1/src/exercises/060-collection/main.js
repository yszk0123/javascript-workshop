(function(namespace) {
  "use strict";
  var assert = namespace.TestUtils.assert;

  function testForStatement() {
    console.group("for statement");
    var items = [10, 20, 30];
    var i;

    for (i = 0; i < items.length; i = i + 1) {
      console.log("items[" + i + "] = " + items[i]);
    }

    // 演習: for 文を使って各配列要素を10倍した配列を作る
    var newItems = [];
    // <ここで何かやる>
    assert.similar(newItems, [100, 200, 300], "演習");

    console.groupEnd();
  }

  function testCollection() {
    console.group("collection");
    var items = [10, 20, 30];

    items.forEach(function(item, index) {
      console.log("items[" + index + "] = " + item);
    });

    // 演習: map を使って各配列要素を10倍した配列を作る
    var newItems = items.map(function(item, index) {
      // <ここで何かやる>
    });
    assert.similar(newItems, [100, 200, 300], "演習");

    console.groupEnd();
  }

  testForStatement();
  testCollection();
})(window.JavaScriptWorkshop);
