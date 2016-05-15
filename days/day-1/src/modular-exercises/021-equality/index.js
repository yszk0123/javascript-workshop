/* eslint-disable no-console */
import { assert } from '../../modular-common/test-utils';

function testObject() {
  console.group('オブジェクト (Object)');

  const objectA = {};

  const objectB = objectA;
  assert.shouldCorrect(objectA === objectB, '演習1');

  const objectC = {};
  assert.shouldCorrect(objectA === objectC, '演習2');

  console.groupEnd();
}

testObject();

function testBoolean() {
  console.group('ブーリアン (Boolean)');

  const booleanA = true;

  const booleanB = booleanA;
  assert.shouldCorrect(booleanA === booleanB, '演習1');

  const booleanC = true;
  assert.shouldCorrect(booleanA === booleanC, '演習2');

  console.groupEnd();
}

testBoolean();

function testArray() {
  console.group('配列 (Array)');

  const arrayA = [];

  const arrayB = arrayA;
  assert.shouldCorrect(arrayA === arrayB, '演習1');

  const arrayC = [];
  assert.shouldCorrect(arrayA === arrayC, '演習2');

  console.groupEnd();
}

// 演習: 配列はオブジェクトとブーリアンどちらのタイプか予想する
testArray();
