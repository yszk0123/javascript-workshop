import React, { PropTypes } from 'react';

import * as styles from './styles.css';

export default function Card(props) {
  return <div className={styles.Card} {...props} />;
}
