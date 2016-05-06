// スコープ1: プログラムのトップレベル (グローバルスコープ)

(function(namespace) {
  // スコープ2: おまじないで導入される関数スコープ

  "use strict";
  var assert = namespace.TestUtils.assert;

  function testScope() {
    // スコープ3: testScope() で導入される関数スコープ

    // スコープ3 に含まれる
    var scope3 = "scope3";

    // 同じスコープにある変数は参照できる
    assert.ok(scope3 === "scope3", "例1");

    function something() {
      // スコープ4: something() で導入される関数スコープ

      // スコープ4 に含まれる
      var scope4 = "scope4";

      // スコープ3 (外側)にある変数は参照できる
      assert.ok(scope3 === "scope3", "例2");

      // 同じスコープにある変数は参照できる
      assert.ok(scope4 === "scope4", "例3");

      // 演習: ここで scope3 という同名の変数を宣言するとどうなるか
      var scope3 = "new scope3";
      assert.ok(scope3 === "?", "演習1")
    }

    // スコープ3 (外側)から、スコープ4 (内側)の変数を参照することは出来ない
    // assert.ok(scope4 === "scope4", "例4");

    something();
  }

  testScope();
})(window.JavaScriptWorkshop);

// 演習: ここで宣言した変数はどのスコープに含まれるか
