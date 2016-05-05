(function(namespace) {
  "use strict";

  // アプリの見た目を扱う
  function createView(model) {
    // DOM要素にアクセスするための変数を定義

    const incrementButtonElement = document.getElementById("increment-button");
    const decrementButtonElement = document.getElementById("decrement-button");
    const resetButtonElement = document.getElementById("reset-button");
    const counterElement = document.getElementById("counter");

    // クリックされた時の動作を定義

    function onIncrementButtonClick(_event) {
      model.increment();
      updateCounter();
    }

    function onDecrementButtonClick(_event) {
      model.decrement();
      updateCounter();
    }

    function onResetButtonClick(_event) {
      model.reset();
      updateCounter();
    }

    // 画面更新の定義

    function updateCounter() {
      counterElement.innerText = model.getCount();
    }

    // DOM要素のイベントとクリックされた時の動作を結びつける

    incrementButtonElement.addEventListener("click", onIncrementButtonClick);
    decrementButtonElement.addEventListener("click", onDecrementButtonClick);
    resetButtonElement.addEventListener("click", onResetButtonClick);

    // 画面更新

    return {
      updateCounter: updateCounter
    };
  }

  namespace.createView = createView;
})(window.JavaScriptWorkshop);
