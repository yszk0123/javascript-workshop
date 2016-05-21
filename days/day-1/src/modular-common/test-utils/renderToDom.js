import React from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';

import * as Styles from './styles.css';
import '../style.css';

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

export default function renderToDom(state, mountElement) {
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
