(function(namespace) {
  'use strict';

  // DOM要素にアクセスするための変数を宣言
  const incrementButtonElement = document.getElementById('increment-button');
  const counterElement = document.getElementById('counter');

  // アプリの状態を定義
  let count = 0;

  // クリックされた時の動作を定義
  function onIncrementButtonClick(_event) {
    count = count + 1;
    update();
  }

  // 画面更新の定義
  function update() {
    counterElement.innerText = count;
  }

  // DOM要素のイベントとクリックされた時の動作を結びつける
  incrementButtonElement.addEventListener('click', onIncrementButtonClick);

  // 画面更新
  update();
})(window.JavaScriptWorkshop);
