// 演習: ここで "use strict"; を使うとどうなるか

(function(namespace) {
  "use strict";
  var assert = namespace.TestUtils.assert;

  // 普通の関数を宣言して呼び出す場合 (関数宣言)

  function iife() {
    console.log("IIFE 1");
  }

  iife();

  // 関数式は値(関数は値!)を返す

  var iife2 = function() {
    console.log("IIFE 2");
  };

  iife2();

  // 宣言してそのまま使う (関数式)

  (function iife3() {
    console.log("IIFE 3");
  })();

  // 名前をつけない (無名関数、これも関数式)

  (function() {
    console.log("IIFE 4");
  })();

  // 比較

  (iife)();
  (function() { console.log("IIFE 5"); })();

  // ただの関数なので普通に引数を与えることもできる

  var iife6 = function(global) {
    console.log("IIFE 6: global = window =", global);
  };
  iife6(window);

  (function(global) {
    console.log("IIFE 7: global = window =", global);
  })(window);

  // ちょっと別の書き方

  (function() { console.log("IIFE 8"); }());

  // 演習: なぜ括弧が必要か
  assert.shouldCorrect(false, "演習");
})(window.JavaScriptWorkshop);
