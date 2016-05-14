import React from 'react';
import { connect } from 'react-redux';

import ContentType from '../ContentType';
import Exercise from '../components/Exercise';
import Markdown from '../components/Markdown';
import { currentContentSelector } from '../selectors';

const Content = ({ type, value, absoluteFilePath }) => {
  switch (type) {
    case ContentType.Doc:
      return <Markdown value={value} />;
    case ContentType.Exercise:
      return <Exercise label={absoluteFilePath} src={absoluteFilePath} doc={value} />;
    default:
      return null;
  }
};

export default connect(currentContentSelector)(Content);
