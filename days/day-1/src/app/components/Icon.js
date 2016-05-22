import React, { PropTypes } from 'react';

const Icon = ({ type, size }) =>
  <i className={`fa fa-${type} fa-${size}`} />;
Icon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired
};

export default Icon;
