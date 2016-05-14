// スコープ1: グローバルスコープ

(function(namespace) {
  // スコープ2

  'use strict';
  var assert = namespace.TestUtils.assert;

  function testScope() {
    // スコープ3: testScope() の関数スコープ

    if (true) {
      // スコープ4: if 文のブロックスコープ

      // var で宣言するとブロックスコープを作れないので、
      // スコープ4 には含まれず、スコープ3 に含まれる
      var variableInIfStatement = 'variableInIfStatement';
      assert.ok(variableInIfStatement === 'variableInIfStatement', '例1');

      // let, const で宣言するとブロックスコープを作ることができるので、
      // スコープ4 に含まれる
      let letInIfStatement = 'letInIfStatement';
      const constInIfStatement = 'constInIfStatement';
    }

    function something() {
      // スコープ5: something() の関数スコープ

      // var, let, const いずれの場合もスコープ5 に含まれる
      var variableInFunction = 'variableInFunction';
      assert.ok(variableInFunction === 'variableInFunction', '例1');
    }

    // スコープ3 から、スコープ4, 5 の内側の変数を参照することは出来ない
    assert.ok(variableInIfStatement === 'variableInIfStatement', '例1');
    assert.ok(letInIfStatement === undefined, '例1');
    assert.ok(constInIfStatement === undefined, '例1');

    // 演習: 次のコードの実行結果を予想してみる
    // assert.ok(variableInFunction === "variableInFunction", "例1");
  }

  testScope();
})(window.JavaScriptWorkshop);

// 演習: ここで宣言した変数はどのスコープに含まれるか
