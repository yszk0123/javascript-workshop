(function(namespace) {
  'use strict';

  // アプリの状態を扱う
  function createModel() {
    const model = {
      count: 0,
      increment: function() {
        model.count = model.count + 1;
      }
    };

    return model;
  }

  // アプリの見た目を扱う
  function createView(model) {
    // DOM要素にアクセスするための変数を宣言
    const incrementButtonElement = document.getElementById('increment-button');
    const counterElement = document.getElementById('counter');

    // クリックされた時の動作を定義
    function onIncrementButtonClick(_event) {
      model.increment();
      update();
    }

    // 画面更新の定義
    function update() {
      counterElement.innerText = model.count;
    }

    // DOM要素のイベントとクリックされた時の動作を結びつける
    incrementButtonElement.addEventListener('click', onIncrementButtonClick);

    // createView の呼び出し元から update を参照できるようにする
    return {
      update: update
    };
  }

  // モデルとビューを作成して実行
  function main() {
    const model = createModel();
    const view = createView(model);
    view.update();
  }

  main();
})(window.JavaScriptWorkshop);
