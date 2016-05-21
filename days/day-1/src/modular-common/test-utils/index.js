import document from 'global/document';

import renderToDom from './renderToDom';
import renderToConsole from './renderToConsole';

const testCases = [];
let currentTestCase = null;

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
    printErrorWithMessage(
      `Expected: ${JSON.stringify(expected)}, actual: ${JSON.stringify(actual)}`,
      message
    );
    return;
  }

  print(message);
}

function assertOk(value, message) {
  if (!value) {
    printErrorWithMessage('expected: truthy', message);
    return;
  }

  print(message);
}

function assertFail(value, message) {
  if (value) {
    printErrorWithMessage('expected: falsy', message);
    return;
  }

  print(message);
}

// TODO: Replace with assertDeepEqual
function assertSimilar(actual, expected, message) {
  assertOk(JSON.stringify(actual) === JSON.stringify(expected), message);
}

function assertShouldCorrect(_value, message) {
  printErrorWithMessage('訂正して下さい', message);
}

export function describe(message, callback) {
  testCases.push({
    message,
    callback
  });
}

export function runTest(format) {
  const newTestCases = testCases.map(({ message, callback }) => {
    currentTestCase = {
      message,
      assertions: []
    };

    try {
      callback();
    }
    catch (error) {
      printErrorWithMessage(error, '(error in try statement)');
    }

    if (currentTestCase.assertions.length === 0) {
      currentTestCase.assertions.push({
        isError: false,
        message: 'All test pass!'
      });
    }

    return currentTestCase;
  });

  const state = { testCases: newTestCases };

  const element = document.createElement('div');
  document.body.appendChild(element);

  if (format === 'console') {
    renderToConsole(state);
  }
  else {
    renderToDom(state, element);
  }
}

export const assert = {
  equal: assertEqual,
  ok: assertOk,
  fail: assertFail,
  similar: assertSimilar,
  shouldCorrect: assertShouldCorrect
};
