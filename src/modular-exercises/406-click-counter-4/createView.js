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
  // 演習: 何故このように書かなければいけないのか考える
  function update() {
    const e = document.getElementById('increment-button');
    e && e.removeEventListener('click', onIncrementButtonClick);

    element.innerHTML = renderClickCounter(model);

    document.getElementById('increment-button')
      .addEventListener('click', onIncrementButtonClick);
  }

  // 画面更新
  update();

  // createView の呼び出し元から update を参照できるようにする
  return { update };
}

// 他のモジュールから createView を参照できるようにする
export default createView;
