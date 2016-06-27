(function(namespace) {
  'use strict';

  function printHelloWorld() {
    console.log('Hello, world!');
  }

  namespace.Utils = {
    printHelloWorld: printHelloWorld
  };
})(window.JavaScriptWorkshop);
