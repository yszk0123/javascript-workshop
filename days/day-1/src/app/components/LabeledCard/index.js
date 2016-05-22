import React, { PropTypes } from 'react';
import cx from 'classnames'

import * as Styles from './styles.css';

const Label = ({ label }) =>
  <div className={Styles.Label}>
    {label}
  </div>;
Label.propTypes = {
  label: PropTypes.string.isRequired
};

const Card = (props) =>
  <div className={Styles.Card} {...props} />;

const LabeledCard = ({ label, space, scrollable, children }) =>
  <div className={cx({ [Styles.LabeledCard]: true, space, scrollable })}>
    <Label label={label} />
    <Card>{children}</Card>
  </div>;
LabeledCard.propTypes = {
  label: PropTypes.string.isRequired,
  space: PropTypes.bool,
  scrollable: PropTypes.bool,
  children: PropTypes.any
};

export default LabeledCard;
