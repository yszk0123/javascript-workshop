(function(namespace) {
  var assert = {};

  function printErrorWithMessage(error, message) {
    console.error("[Assertion Error]", message || "", error);
  }

  function print(message) {
    console.info("[Assertion Pass]", message || "");
  }

  function assertEqual(actual, expected, message) {
    if (actual !== expected) {
      return printErrorWithMessage(
        "Expected: " + JSON.stringify(expected) + ", actual: " + JSON.stringify(actual),
        message
      );
    }

    print(message);
  }

  function assertOk(value, message) {
    if (!value) {
      return printErrorWithMessage("expected: truthy", message);
    }

    print(message);
  }

  function assertFail(value, message) {
    if (value) {
      return printErrorWithMessage("expected: falsy", message);
    }

    print(message);
  }

  namespace.TestUtils = {
    assert: {
      equal: assertEqual,
      ok: assertOk,
      fail: assertFail
    }
  };
})(window.JavaScriptWorkshop);
