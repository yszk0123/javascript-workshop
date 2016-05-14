import renderClickCounter from './renderClickCounter.hbs';

// アプリの見た目を扱う
function createView(model, element) {
  element.innerHTML = renderClickCounter(model);

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

// 他のモジュールから createView を参照できるようにする
export default createView;
