(function(namespace) {
  "use strict";

  // 作っておいた createModel, createView を参照する
  const createModel = namespace.createModel;
  const createView = namespace.createView;

  // モデルとビューを作成して実行
  function main() {
    const model = createModel();
    const view = createView(model);
    view.updateCounter();
  }

  main();
})(window.JavaScriptWorkshop);
