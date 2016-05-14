import '../../modular-common/style.css';

// 作っておいた createModel, createView を参照する
import createModel from './createModel';
import createView from './createView';

// モデルとビューを作成して実行
export function mount(_, element) {
  const model = createModel();
  const view = createView(model, element);
  view.update();
}
