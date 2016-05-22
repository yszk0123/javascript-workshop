import React, { PropTypes } from 'react';

import Icon from './Icon';

const IconLabel = ({ icon, label, size }) =>
  <span>
    <Icon type={icon} size={size} />
    {' '}
    {label}
  </span>;
IconLabel.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.any.isRequired,
  size: PropTypes.string
};

export default IconLabel;
