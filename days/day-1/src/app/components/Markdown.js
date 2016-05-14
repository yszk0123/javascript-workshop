import React, { PropTypes } from 'react';
import ReactMarkdown from 'react-markdown';

const Markdown = ({ value }) =>
  <ReactMarkdown source={value} escapeHtml />;
Markdown.propTypes = {
  value: PropTypes.string.isRequired
};

export default Markdown;
