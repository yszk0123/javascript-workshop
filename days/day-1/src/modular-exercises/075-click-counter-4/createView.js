/* eslint-disable no-param-reassign */
import renderClickCounter from './renderClickCounter.hbs';

// アプリの見た目を扱う
function createView(model, element) {
  // クリックされた時の動作を定義
  function onIncrementButtonClick(_event) {
    model.increment();
    update();
  }

  // 画面更新の定義
  function update() {
    element.innerHTML = renderClickCounter(model);
  }

  // 画面更新
  update();

  // DOM要素のイベントとクリックされた時の動作を結びつける
  document.getElementById('increment-button')
    .addEventListener('click', onIncrementButtonClick);

  // createView の呼び出し元から update を参照できるようにする
  return { update };
}

// 他のモジュールから createView を参照できるようにする
export default createView;
