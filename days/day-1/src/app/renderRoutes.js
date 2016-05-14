import React from 'react';
import { Route } from 'react-router';

import Root from './containers/Root';
import Content from './containers/Content';

export default (contentsGroups) => ({
  path: '/',
  component: Root,
  childRoutes: contentsGroups.map((contentsGroup, index) => ({
    path: contentsGroup.path,
    childRoutes: contentsGroup.contents.map((content) => ({
      path: content.path,
      component: Content
    }))
  }))
});
  <Route path="/" component={Root}>
  </Route>;
