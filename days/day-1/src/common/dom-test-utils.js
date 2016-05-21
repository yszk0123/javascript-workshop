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

  function render(state, mountElement) {
    function renderHeader(message) {
      var element = document.createElement('h2');
      element.classList.add('TestCaseHeader');
      element.innerText = message || '';
      return element;
    }

    function renderTestCase(isError, error, message) {
      var element = document.createElement('pre');
      element.classList.add('TestCase');
      if (isError) {
        element.classList.add('failure');
        element.innerText = 'Failure: ' + (message || '') + '\n' + error.toString();
      }
      else {
        element.classList.add('success');
        element.innerText = 'Success: ' + (message || '');
      }
      return element;
    }

    var testCaseOuterElement = document.createElement('div');
    testCaseOuterElement.classList.add('TestCaseOuter');

    state.testCases.forEach(function(testCase) {
      testCaseOuterElement.appendChild(renderHeader(testCase.message));
      testCase.assertions.forEach(function(assertion) {
        testCaseOuterElement.appendChild(
          renderTestCase(assertion.isError, assertion.error, assertion.message)
        );
      });
    });

    mountElement.appendChild(testCaseOuterElement);
  }

  function runTest() {
    var newTestCases = testCases.map(({ message, callback }) => {
      currentTestCase = {
        message,
        assertions: []
      };

      callback();

      return currentTestCase;
    });

    var element = document.createElement('div');
    document.body.appendChild(element);
    console.dir(newTestCases);

    render({ testCases: newTestCases }, element);
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
