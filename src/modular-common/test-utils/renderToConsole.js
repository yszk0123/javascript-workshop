/* eslint-disable no-console */
import document from 'global/document';

export default function renderToConsole(state) {
  function renderTestCase({ isError, error, message }) {
    if (isError) {
      console.error('Failure:', message, error);
    }
    else {
      console.info('Success:', message);
    }
  }

  state.testCases.forEach(({ message, assertions }) => {
    console.group(message);
    assertions.forEach(renderTestCase);
    console.groupEnd();
  });
}
