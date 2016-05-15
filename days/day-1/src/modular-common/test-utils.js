/* eslint-disable no-console */

function printErrorWithMessage(error, message) {
  console.error('[Assertion Error]', message || '', error);
}

function print(message) {
  console.info('[Assertion Pass]', message || '');
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

export const assert = {
  equal: assertEqual,
  ok: assertOk,
  fail: assertFail,
  similar: assertSimilar,
  shouldCorrect: assertShouldCorrect
};
