import React from "react";
import ReactMarkdown from "react-markdown";

const Markdown = ({ content }) =>
  <ReactMarkdown source={content} escapeHtml={true} />;

export default Markdown;
