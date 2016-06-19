(function(namespace) {
  var assert = {};
  var testCases = [];
  var currentTestCase = null;

  function printErrorWithMessage(error, message) {
    currentTestCase.assertions.push({
      isError: true,
      error: error.toString(),
      message: message || ''
    });
  }

  function print(message) {
    currentTestCase.assertions.push({
      message: message || ''
    })
  }

  function assertEqual(actual, expected, message) {
    if (actual !== expected) {
      return printErrorWithMessage(
        'Expected: ' + JSON.stringify(expected) + ', actual: ' + JSON.stringify(actual),
        message
      );
    }

    print(message);
  }

  // TODO: Replace with assertDeepEqual
  function assertSimilar(actual, expected, message) {
    assertOk(JSON.stringify(actual) === JSON.stringify(expected), message);
  }

  function assertOk(value, message) {
    if (!value) {
      return printErrorWithMessage('expected: truthy', message);
    }

    print(message);
  }

  function assertFail(value, message) {
    if (value) {
      return printErrorWithMessage('expected: falsy', message);
    }

    print(message);
  }

  function assertShouldCorrect(_value, message) {
    printErrorWithMessage('訂正して下さい', message);
  }

  function describe(message, callback) {
    testCases.push({
      message,
      callback
    });
  }

  namespace.TestUtils = {
    describe: describe,
    runTest: runTest,
    assert: {
      equal: assertEqual,
      ok: assertOk,
      fail: assertFail,
      similar: assertSimilar,
      shouldCorrect: assertShouldCorrect
    }
  };
})(window.JavaScriptWorkshop);
