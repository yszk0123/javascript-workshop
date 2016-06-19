// 演習: ここで "use strict"; を使うとどうなるか

(function(namespace) {
  'use strict';
  var assert = namespace.TestUtils.assert;
  var describe = namespace.TestUtils.describe;
  var runTest = namespace.TestUtils.runTest;

  describe('普通の関数を宣言して呼び出す場合 (関数宣言)', function() {
    function iife() {
      console.log('IIFE 1');
    }

    iife();
  });

  describe('関数式は値(関数は値!)を返す', function() {
    var iife = function() {
      console.log('IIFE 2');
    };

    iife();
  });

  describe('宣言してそのまま使う (関数式)', function() {
    (function iife3() {
      console.log('IIFE 3');
    })();
  });

  describe('名前をつけない (無名関数、これも関数式)', function() {
    (function() {
      console.log('IIFE 4');
    })();
  });

  // 比較
  // (iife)();
  // (function() { console.log('IIFE 5'); })();

  describe('ただの関数なので普通に引数を与えることもできる', function() {
    var iife = function(global) {
      console.log('IIFE 6: global = window =', global);
    };
    iife(window);

    (function(global) {
      console.log('IIFE 7: global = window =', global);
    })(window);
  });

  describe('ちょっと別の書き方', function() {
    (function() { console.log('IIFE 8'); }());
  });

  describe('演習: なぜ括弧が必要か', function() {
    assert.ok(false, '(分かったらtrueに変えてテストを通す)');
  });

  runTest();
})(window.JavaScriptWorkshop);
