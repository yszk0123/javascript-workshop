(function(namespace) {
  "use strict";
  var assert = namespace.TestUtils.assert;

  console.group("========== 配列 (Array) ==========");

  var arrayA = [];
  var arrayB = arrayA;
  var arrayC = [];
  assert.ok(arrayA === arrayB, "例1");
  assert.ok(arrayA !== arrayC, "例2");

  console.groupEnd();
  console.group("========== オブジェクト (Object) ==========");

  var objectA = {};
  var objectB = objectA;
  var objectC = {};
  assert.ok(objectA === objectB, "例1");
  assert.ok(objectA !== objectC, "例2");

  console.groupEnd();
  console.group("========== ブーリアン (Boolean) ==========");

  var booleanA = true;
  var booleanB = booleanA;
  var booleanC = true;
  assert.ok(booleanA === booleanB, "例1");
  assert.ok(booleanA === booleanC, "例2");

  console.groupEnd();
})(window.JavaScriptWorkshop);
