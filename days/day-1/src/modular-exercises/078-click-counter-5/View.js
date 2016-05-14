import renderClickCounter from './renderClickCounter.hbs';

// アプリの見た目を扱う
class View {
  constructor(model, element) {
    // 画面更新
    this.update();

    // DOM要素のイベントとクリックされた時の動作を結びつける
    document.getElementById('increment-button')
      .addEventListener('click', this.onIncrementButtonClick.bind(this));
  }

  // クリックされた時の動作を定義
  onIncrementButtonClick(_event) {
    this.increment();
    this.update();
  }

  // 画面更新の定義
  update() {
    this.element.innerHTML = renderClickCounter(this.model);
  }
}

// 他のモジュールから View を参照できるようにする
export default View;
