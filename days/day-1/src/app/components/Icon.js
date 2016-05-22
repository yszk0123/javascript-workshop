import React, { PropTypes } from 'react';

const Icon = ({ type, size }) => {
  const classNames = ['fa', `fa-${type}`];
  if (size) {
    classNames.push(`fa-${size}`);
  }
  return <i className={classNames.join(' ')} />;
};
Icon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.string
};

export default Icon;
