/* eslint-disable no-console */
import { assert } from '../../modular-common/test-utils';

function testObject() {
  console.group('オブジェクト (Object)');

  const objectA = {};

  const objectB = objectA;
  assert.ok(objectA === objectB, '例1');

  const objectC = {};
  assert.ok(objectA !== objectC, '例2');

  console.groupEnd();
}

testObject();

function testBoolean() {
  console.group('ブーリアン (Boolean)');

  const booleanA = true;

  const booleanB = booleanA;
  assert.ok(booleanA === booleanB, '例1');

  const booleanC = true;
  assert.ok(booleanA === booleanC, '例2');

  console.groupEnd();
}

testBoolean();

function testArray() {
  console.group('配列 (Array)');

  const arrayA = [];

  const arrayB = arrayA;
  assert.ok(arrayA === arrayB, '例1');

  const arrayC = [];
  assert.ok(arrayA !== arrayC, '例2');

  console.groupEnd();
}

testArray();
