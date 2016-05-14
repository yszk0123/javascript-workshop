(function(namespace) {
  'use strict';

  // アプリの状態を扱う
  function createModel() {
    let count = 0;

    return {
      getCount: function() {
        return count;
      },
      increment: function() {
        count = count + 1;
      }
    };
  }

  // アプリの見た目を扱う
  function createView(model) {
    // DOM要素にアクセスするための変数を宣言

    const incrementButtonElement = document.getElementById('increment-button');
    const counterElement = document.getElementById('counter');

    // クリックされた時の動作を定義

    function onIncrementButtonClick(_event) {
      model.increment();
      updateCounter();
    }

    // 画面更新の定義

    function updateCounter() {
      counterElement.innerText = model.count;
    }

    // DOM要素のイベントとクリックされた時の動作を結びつける

    incrementButtonElement.addEventListener('click', onIncrementButtonClick);

    // 画面更新

    return {
      updateCounter: updateCounter
    };
  }

  // モデルとビューを作成して実行
  function main() {
    const model = createModel();
    const view = createView(model);
    view.updateCounter();
  }

  main();
})(window.JavaScriptWorkshop);
