/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';

import * as Styles from './style.css';
import './style.css';

const testCases = [];
let currentTestCase = null;

const TestCaseOuter = (props) =>
  <div className={Styles.TestCaseOuter} {...props} />;

const TestCaseHeader = ({ label }) =>
  <h2 className={Styles.TestCaseHeader}>{label}</h2>;

const TestCase = ({ isError, message, error }) =>
  <pre
    className={cx({
      [Styles.TestCase]: true,
      failure: isError,
      success: !isError
    })}
  >
    {error && `${error}\n`}
    {message}
  </pre>;

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

function render(state, mountElement) {
  ReactDOM.render(
    <TestCaseOuter>
      {state.testCases.map(({ message, assertions }, i) =>
        <div className={Styles.Group} key={i}>
          <TestCaseHeader label={message} />
          {assertions.map((testCase, i) => <TestCase key={i} {...testCase} />)}
        </div>
      )}
    </TestCaseOuter>,
    mountElement
  );
}

export function runTest() {
  const newTestCases = testCases.map(({ message, callback }) => {
    currentTestCase = {
      message,
      assertions: []
    };

    callback();

    return currentTestCase;
  });

  const element = document.createElement('div');
  document.body.appendChild(element);
  console.dir(newTestCases);

  render({ testCases: newTestCases }, element);
}

export const assert = {
  equal: assertEqual,
  ok: assertOk,
  fail: assertFail,
  similar: assertSimilar,
  shouldCorrect: assertShouldCorrect
};
