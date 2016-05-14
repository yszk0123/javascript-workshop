// 作っておいた createModel, createView を参照する
import createModel from './createModel';
import createView from './createView';

// モデルとビューを作成して実行
export function mount(state, element) {
  const model = createModel(state);
  const view = createView(model, element);
  view.update();
}
