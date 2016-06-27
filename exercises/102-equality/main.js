import { describe, assert } from 'jw-test-utils';

export default function main() {
  describe('グループA', () => {
    const objectA = {};
    const objectB = objectA;
    const objectC = {};

    // 演習: 結果を予想してみる
    assert.fail({} === {}, '演習1');
    assert.fail(objectA === objectB, '演習2');
    assert.fail(objectA === objectC, '演習3');

    const arrayA = [];
    const arrayB = arrayA;
    const arrayC = [];

    // 演習: 結果を予想してみる
    assert.fail([] === [], '演習4');
    assert.fail(arrayA === arrayB, '演習5');
    assert.fail(arrayA === arrayC, '演習6');
  });

  describe('グループB', () => {
    const booleanA = true;
    const booleanB = booleanA;
    const booleanC = true;

    // 演習: 結果を予想してみる
    assert.fail(true === true, '演習1');
    assert.fail(booleanA === booleanB, '演習2');
    assert.fail(booleanA === booleanC, '演習3');

    const numberA = 1;
    const numberB = numberA;
    const numberC = 1;

    // 演習: 結果を予想してみる
    assert.fail(1 === 1, '演習4');
    assert.fail(numberA === numberB, '演習5');
    assert.fail(numberA === numberC, '演習6');
  });
}
