import React, { PropTypes } from 'react';
import cx from 'classnames'

import * as styles from './styles.css';

const Box = (props) =>
  <div className={styles.Box} {...props} />;

export default Box;
