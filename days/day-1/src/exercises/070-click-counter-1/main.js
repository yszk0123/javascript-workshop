(function(namespace) {
  'use strict';

  // DOM要素にアクセスするための変数を宣言

  const incrementButtonElement = document.getElementById('increment-button');
  const decrementButtonElement = document.getElementById('decrement-button');
  const resetButtonElement = document.getElementById('reset-button');
  const counterElement = document.getElementById('counter');

  // アプリの状態を定義

  let count = 0;

  // クリックされた時の動作を定義

  function onIncrementButtonClick(_event) {
    count = count + 1;
    updateCounter();
  }

  function onDecrementButtonClick(_event) {
    count = count - 1;
    updateCounter();
  }

  function onResetButtonClick(_event) {
    count = 0;
    updateCounter();
  }

  // 画面更新の定義

  function updateCounter() {
    counterElement.innerText = count;
  }

  // DOM要素のイベントとクリックされた時の動作を結びつける

  incrementButtonElement.addEventListener('click', onIncrementButtonClick);
  decrementButtonElement.addEventListener('click', onDecrementButtonClick);
  resetButtonElement.addEventListener('click', onResetButtonClick);

  // 画面更新

  updateCounter();
})(window.JavaScriptWorkshop);
