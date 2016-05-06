import React from "react";
import { Route } from "react-router";

import Root from "./containers/Root";
import Content from "./containers/Content";

export default (contentsGroups) =>
  <Route path="/" component={Root}>
    {contentsGroups.map((contentsGroup, index) =>
      <Route key={contentsGroup.type} path={contentsGroup.path}>
        {contentsGroup.contents.map((content) =>
          <Route key={content.path} path={content.path} component={Content} />
        )}
      </Route>
    )}
  </Route>;
