(function(namespace) {
  'use strict';

  // アプリの状態を扱う
  function createModel() {
    let count = 0;

    return {
      getCount: function() {
        return count;
      },
      increment: function() {
        count = count + 1;
      }
    };
  }

  // 他のモジュールから createModel を参照できるようにする
  namespace.createModel = createModel;
})(window.JavaScriptWorkshop);
