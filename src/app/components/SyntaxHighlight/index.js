import React, { PropTypes } from 'react';
import cx from 'classnames';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

import * as styles from './styles.css';

export default class SyntaxHighlight extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.value !== this.props.value;
  }

  render() {
    const { value } = this.props;

    return (
      <pre
        className={cx({ [styles.SyntaxHighlight]: true, hljs: true })}
        dangerouslySetInnerHTML={{ __html: hljs.highlightAuto(value).value }}
      />
    );
  }
}

SyntaxHighlight.propTypes = {
  value: PropTypes.string.isRequired
}

export default SyntaxHighlight;
