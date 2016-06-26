import '../../common/style.css';

// 作っておいた Model, View を参照する
import Model from './Model';
import View from './View';

// モデルとビューを作成して実行
export function mount(_, element) {
  const model = new Model();
  const view = new View(model, element);
  view.update();
}
