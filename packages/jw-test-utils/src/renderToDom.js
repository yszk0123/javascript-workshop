import React from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';

import * as styles from './styles.css';
import '../style.css';

const TestCaseOuter = (props) =>
  <div className={styles.TestCaseOuter} {...props} />;

const TestCaseHeader = ({ label }) =>
  <h2 className={styles.TestCaseHeader}>{label}</h2>;

const TestCase = ({ isError, message, error }) =>
  <pre
    className={cx({
      [styles.TestCase]: true,
      failure: isError,
      success: !isError
    })}
  >
    {error && `${error}\n`}
    {message}
  </pre>;

export default function renderToDom(state, mountElement) {
  ReactDOM.render(
    <TestCaseOuter>
      {state.testCases.map(({ message, assertions }, i) =>
        <div className={styles.Group} key={i}>
          <TestCaseHeader label={message} />
          {assertions.map((testCase, i) => <TestCase key={i} {...testCase} />)}
        </div>
      )}
    </TestCaseOuter>,
    mountElement
  );
}
