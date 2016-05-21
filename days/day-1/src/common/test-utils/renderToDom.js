(function(namespace) {
  function renderToDom(state, mountElement) {
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

  namespace.TestUtils.renderToDom = renderToDom;
})(window.JavaScriptWorkshop);
