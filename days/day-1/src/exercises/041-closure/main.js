// スコープチェーン:
// (omajinai)-->(グローバルオブジェクト)
(function omajinai(namespace) {
  'use strict';
  const assert = namespace.TestUtils.assert;

  // スコープチェーン:
  // (makeGetValue)--> { assert: ..., makeGetValue: ..., getValue: ... } --(omajinai)--> ...
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

  assert.ok(getValue() === 1, '例1');

  // 演習1: makeGetValue() を修正して、getValue() を呼び出す度に value の値が繰り上がるようにする
  assert.ok(getValue() === 2, '演習1');
  assert.ok(getValue() === 3, '演習2');
  assert.ok(getValue() === 4, '演習3');
})(window.JavaScriptWorkshop);
