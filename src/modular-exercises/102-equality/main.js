import { describe, assert } from '../../modular-common/test-utils';

export default function main() {
  describe('オブジェクト (Object)', () => {
    const objectA = {};

    // 演習: 結果を予想してみる
    const objectB = objectA;
    assert.fail(objectA === objectB, '演習1');

    // 演習: 結果を予想してみる
    const objectC = {};
    assert.fail(objectA === objectC, '演習2');
  });

  describe('ブーリアン (Boolean)', () => {
    const booleanA = true;

    // 演習: 結果を予想してみる
    const booleanB = booleanA;
    assert.fail(booleanA === booleanB, '演習1');

    // 演習: 結果を予想してみる
    const booleanC = true;
    assert.fail(booleanA === booleanC, '演習2');
  });

  describe('配列 (Array)', () => {
    const arrayA = [];

    // 演習: 結果を予想してみる
    const arrayB = arrayA;
    assert.fail(arrayA === arrayB, '演習1');

    // 演習: 結果を予想してみる
    const arrayC = [];
    assert.fail(arrayA === arrayC, '演習2');
  });
}
