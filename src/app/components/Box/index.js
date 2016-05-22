import React, { PropTypes } from 'react';
import cx from 'classnames'

import * as Styles from './styles.css';

const Box = (props) =>
  <div className={Styles.Box} {...props} />;

export default Box;
