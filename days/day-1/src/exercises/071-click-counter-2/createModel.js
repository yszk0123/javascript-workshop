(function(namespace) {
  'use strict';

  // アプリの状態を扱う
  function createModel() {
    const model = {
      count: 0,
      increment: function() {
        model.count = model.count + 1;
      }
    };

    return model;
  }

  // 他のモジュールから createModel を参照できるようにする
  namespace.createModel = createModel;
})(window.JavaScriptWorkshop);
