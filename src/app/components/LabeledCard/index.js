import React, { PropTypes } from 'react';
import cx from 'classnames'

import Icon from '../Icon';
import * as Styles from './styles.css';

const Label = ({ label, open, onClick }) =>
  <div className={Styles.Label} onClick={onClick}>
    <Icon type={open ? 'caret-down' : 'caret-right'} size="lg" />
    {' '}
    <span>{label}</span>
  </div>;
Label.propTypes = {
  label: PropTypes.any.isRequired,
  open: PropTypes.bool
};

const Card = (props) =>
  <div className={Styles.Card} {...props} />;

const LabeledCard = ({ label, space, open, children, onLabelClick }) =>
  <div className={cx({ [Styles.LabeledCard]: true, space, hide: !open })}>
    <Label
      label={label}
      onClick={onLabelClick}
      open={open}
    />
    <Card>{children}</Card>
  </div>;
LabeledCard.propTypes = {
  label: PropTypes.any.isRequired,
  space: PropTypes.bool,
  open: PropTypes.bool,
  children: PropTypes.any,
  onLabelClick: PropTypes.func
};

export default LabeledCard;
