import React, { PropTypes } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/dark.css';

import * as Styles from './styles.css';

export default class SyntaxHighlight extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.value !== this.props.value;
  }

  render() {
    const { value } = this.props;

    return (
      <pre className={Styles.SyntaxHighlight} dangerouslySetInnerHTML={{ __html: hljs.highlightAuto(value).value }} />
    );
  }
}

SyntaxHighlight.propTypes = {
  value: PropTypes.string.isRequired
}

export default SyntaxHighlight;
