import { describe, assert } from 'jw-test-utils';

// スコープチェーン:
// (main)-->(グローバルオブジェクト)
export default function main() {
  // スコープチェーン:
  // (makeCounter)--> { assert: ..., makeCounter: ..., count: ... } --(main)--> ...
  function makeCounter() {
    const value = 1;

    // スコープチェーン:
    // (countClosure)--> { value: 1, countClosure: ... } --(makeCounter)--> ...
    function countClosure() {
      return value;
    }

    return countClosure;
  }

  // countClosure() はクロージャなので、次のスコープチェーンを保持している
  // (countClosure)--> { value: 1, countClosure: ... } --(makeCounter)--> ...
  // なので、makeCounter() の外側にいるにもかかわらず、count() は value を参照できる
  const count = makeCounter();

  describe('makeCounter() の内側の変数を外から参照できる', function() {
    assert.ok(count() === 1, '例1');
  });

  describe('演習: makeCounter() を修正して、count() を呼び出す度に value の値が繰り上がるようにする', function() {
    assert.ok(count() === 2, '繰り上がる');
    assert.ok(count() === 3, '繰り上がる');
    assert.ok(count() === 4, '繰り上がる');
  });
}
