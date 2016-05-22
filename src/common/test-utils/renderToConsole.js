(function(namespace) {
  function renderToConsole(state) {
    function renderTestCase(isError, error, message) {
      if (isError) {
        console.error('Failure:', message, error);
      }
      else {
        console.info('Success:', message);
      }
    }

    state.testCases.forEach(function(testCase) {
      console.group(testCase.message);
      testCase.assertions.forEach(function(assertion) {
        renderTestCase(assertion.isError, assertion.error, assertion.message);
      });
      console.groupEnd();
    });
  }

  namespace.TestUtils.renderToConsole = renderToConsole;
})(window.JavaScriptWorkshop);
