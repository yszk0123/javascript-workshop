import React, { PropTypes } from 'react';
import cx from 'classnames'

import * as Styles from './styles.css';

const Label = ({ label, onClick }) =>
  <div className={Styles.Label} onClick={onClick}>
    {label}
  </div>;
Label.propTypes = {
  label: PropTypes.string.isRequired
};

const Card = (props) =>
  <div className={Styles.Card} {...props} />;

const LabeledCard = ({ label, space, open, children, onLabelClick }) =>
  <div className={cx({ [Styles.LabeledCard]: true, space, hide: !open })}>
    <Label label={label} onClick={onLabelClick} />
    <Card>{children}</Card>
  </div>;
LabeledCard.propTypes = {
  label: PropTypes.string.isRequired,
  space: PropTypes.bool,
  open: PropTypes.bool,
  children: PropTypes.any,
  onLabelClick: PropTypes.func
};

export default LabeledCard;
