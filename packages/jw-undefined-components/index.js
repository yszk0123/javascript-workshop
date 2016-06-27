// CAUTION: DO NOT USE THIS COMPONENT IN PRODUCTION CODE!
import * as React from 'react';

const Component = __DEVELOPMENT__ ?
  (props) => <div {...props} /> :
  (_props) => {
    throw new Error('UndefinedComponent should be used for test purpose');
  };

module.exports = new Proxy({}, {
  get: (_obj, _prop) => Component
});
