import { assert } from '../../modular-common/test-utils';

function testObject() {
  console.group('オブジェクト (Object)');

  var objectA = {};

  var objectB = objectA;
  assert.ok(objectA === objectB, '例1');

  var objectC = {};
  assert.ok(objectA !== objectC, '例2');

  console.groupEnd();
}

testObject();

function testBoolean() {
  console.group('ブーリアン (Boolean)');

  var booleanA = true;

  var booleanB = booleanA;
  assert.ok(booleanA === booleanB, '例1');

  var booleanC = true;
  assert.ok(booleanA === booleanC, '例2');

  console.groupEnd();
}

testBoolean();

function testArray() {
  console.group('配列 (Array)');

  var arrayA = [];

  var arrayB = arrayA;
  assert.ok(arrayA === arrayB, '例1');

  var arrayC = [];
  assert.ok(arrayA !== arrayC, '例2');

  console.groupEnd();
}

testArray();
