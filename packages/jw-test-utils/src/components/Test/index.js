import React from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';

import * as styles from './styles.css';

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

export default function Test(props) {
  return (
    <TestCaseOuter>
      {props.testCases.map(({ message, assertions }, i) =>
        <div className={styles.Group} key={i}>
          <TestCaseHeader label={message} />
          {assertions.map((testCase, i) => <TestCase key={i} {...testCase} />)}
        </div>
      )}
    </TestCaseOuter>
  );
}
