import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { Router, Route, browserHistory } from "react-router";
import { syncHistoryWithStore, routerReducer } from "react-router-redux";

import { exerciseRoutes, documentRoutes } from "./routes";
import Layout from "./Layout";

// import reducers from "<project-path>/reducers";
const reducers = {};

// TODO: Use initialState
export function mount(initialState, mountElement) {
  const store = createStore(
    combineReducers({
      ...reducers,
      routing: routerReducer
    })
  );

  if (__DEVELOPMENT__) {
    if (module.hot) {
      module.hot.accept("./Layout", () => {
        const nextReducer = {};
        // const nextReducer = require("src/app").reducers; // eslint-disable-line global-require
        store.replaceReducer( // eslint-disable-line no-use-before-define
          getReducers(nextReducer.default || nextReducer)
        );
      });
    }
  }

  const history = syncHistoryWithStore(browserHistory, store);

  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Layout}>
          {documentRoutes.map(({ path, component }, i) => (
            <Route key={i} path={path} component={component} />
          ))}
          {exerciseRoutes.map(({ path, component }, i) => (
            <Route key={i} path={path} component={component} />
          ))}
        </Route>
      </Router>
    </Provider>,
    mountElement
  );
}
