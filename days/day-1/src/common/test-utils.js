(function(namespace) {
  var assert = {};

  function printError() {
    var args = Array.prototype.slice.call(arguments, 0);
    console.error.apply(console, ["[Assertion Error]"].concat(args));
  }

  function assertEqual(actual, expected) {
    if (actual !== expected) {
      printError("Expected", expected, ", actual", actual);
    }
  }

  namespace.TestUtils = {
    assert: {
      equal: assertEqual
    }
  };
})(window.JavaScriptWorkshop);
