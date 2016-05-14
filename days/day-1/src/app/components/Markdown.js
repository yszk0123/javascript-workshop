import React from 'react';
import ReactMarkdown from 'react-markdown';

const Markdown = ({ value }) =>
  <ReactMarkdown source={value} escapeHtml />;

export default Markdown;
