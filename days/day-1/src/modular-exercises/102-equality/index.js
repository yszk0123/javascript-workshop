/* eslint-disable no-console */
import { assert } from '../../modular-common/test-utils';

function testObject() {
  console.group('オブジェクト (Object)');

  const objectA = {};

  // 演習: 結果を予想してみる
  const objectB = objectA;
  assert.shouldCorrect(objectA === objectB, '演習1');

  // 演習: 結果を予想してみる
  const objectC = {};
  assert.shouldCorrect(objectA === objectC, '演習2');

  console.groupEnd();
}

testObject();

function testBoolean() {
  console.group('ブーリアン (Boolean)');

  const booleanA = true;

  // 演習: 結果を予想してみる
  const booleanB = booleanA;
  assert.shouldCorrect(booleanA === booleanB, '演習1');

  // 演習: 結果を予想してみる
  const booleanC = true;
  assert.shouldCorrect(booleanA === booleanC, '演習2');

  console.groupEnd();
}

testBoolean();

function testArray() {
  console.group('配列 (Array)');

  const arrayA = [];

  // 演習: 結果を予想してみる
  const arrayB = arrayA;
  assert.shouldCorrect(arrayA === arrayB, '演習1');

  // 演習: 結果を予想してみる
  const arrayC = [];
  assert.shouldCorrect(arrayA === arrayC, '演習2');

  console.groupEnd();
}

// 演習: 配列はオブジェクトとブーリアンどちらのタイプか予想する
testArray();
