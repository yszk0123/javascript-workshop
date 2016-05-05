(function(namespace) {
  "use strict";

  // アプリの状態を扱う
  function createModel() {
    let count = 0;

    return {
      getCount: function() {
        return count;
      },
      increment: function() {
        count = count + 1;
      },
      decrement: function() {
        count = count - 1;
      },
      reset: function() {
        count = 0;
      }
    };
  }

  namespace.createModel = createModel;
})(window.JavaScriptWorkshop);
