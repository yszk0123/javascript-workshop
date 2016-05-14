(function(namespace) {
  'use strict';
  var assert = namespace.TestUtils.assert;

  function testObject() {
    console.group('オブジェクト (Object)');

    var objectA = {};

    var objectB = objectA;
    assert.shouldCorrect(objectA === objectB, '演習1');

    var objectC = {};
    assert.shouldCorrect(objectA === objectC, '演習2');

    console.groupEnd();
  }

  testObject();

  function testBoolean() {
    console.group('ブーリアン (Boolean)');

    var booleanA = true;

    var booleanB = booleanA;
    assert.shouldCorrect(booleanA === booleanB, '演習1');

    var booleanC = true;
    assert.shouldCorrect(booleanA === booleanC, '演習2');

    console.groupEnd();
  }

  testBoolean();

  function testArray() {
    console.group('配列 (Array)');

    var arrayA = [];

    var arrayB = arrayA;
    assert.shouldCorrect(arrayA === arrayB, '演習1');

    var arrayC = [];
    assert.shouldCorrect(arrayA === arrayC, '演習2');

    console.groupEnd();
  }

  // 演習: 配列はオブジェクトとブーリアンどちらのタイプか予想する
  testArray();
})(window.JavaScriptWorkshop);
