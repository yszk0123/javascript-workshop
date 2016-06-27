import { describe, assert } from 'jw-test-utils';

// TODO: もっと分かりやすく
// スコープチェーン:
// (main)-->(グローバルオブジェクト)
export default function main() {
  // スコープチェーン:
  // (makeGetValue)--> { assert: ..., makeGetValue: ..., getValue: ... } --(main)--> ...
  function makeGetValue() {
    const value = 1;

    // スコープチェーン:
    // (getValueInner)--> { value: 1, getValueInner: ... } --(makeGetValue)--> ...
    function getValueInner() {
      return value;
    }

    return getValueInner;
  }

  // getValueInner() はクロージャなので、次のスコープチェーンを保持している
  // (getValueInner)--> { value: 1, getValueInner: ... } --(makeGetValue)--> ...
  // なので、makeGetValue() の外側にいるにもかかわらず、getValue() は value を参照できる
  const getValue = makeGetValue();

  describe('makeGetValue() の内側の変数を外から参照できる', function() {
    assert.ok(getValue() === 1, '例1');
  });

  describe('演習: makeGetValue() を修正して、getValue() を呼び出す度に value の値が繰り上がるようにする', function() {
    assert.ok(getValue() === 2, '繰り上がる');
    assert.ok(getValue() === 3, '繰り上がる');
    assert.ok(getValue() === 4, '繰り上がる');
  });
}
