import React from 'react';
import { connect } from 'react-redux';

import ContentType from '../ContentType';
import Exercise from '../components/Exercise';
import Markdown from '../components/Markdown';
import { currentContentSelector } from '../selectors';

const Content = ({ type, value, absoluteFilePath }) =>
  type === ContentType.Doc ?
    <Markdown value={value} /> :
  type === ContentType.Exercise ?
    <Exercise label={absoluteFilePath} src={absoluteFilePath} doc={value} /> :
  null;

export default connect(currentContentSelector)(Content);
