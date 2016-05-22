import React, { PropTypes } from 'react';
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

import * as Styles from './styles.css';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
  highlight(code) {
    return hljs.highlightAuto(code).value;
  }
});

export default class Markdown extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.value !== this.props.value;
  }

  render() {
    const { value } = this.props;

    return (
      <div className={Styles.Markdown} dangerouslySetInnerHTML={{ __html: marked(value) }} />
    );
  }
}

Markdown.propTypes = {
  value: PropTypes.string.isRequired
}

export default Markdown;
