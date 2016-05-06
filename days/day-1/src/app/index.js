import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { Router, browserHistory } from "react-router";
import { syncHistoryWithStore, routerReducer } from "react-router-redux";
import "normalize.css";

import reducers from "./reducers";
import renderRoutes from "./renderRoutes";
import { contentsGroupsSelector } from "./selectors";

// TODO: Use initialState
export function mount(initialState, mountElement) {
  const getReducers = (reducers) =>
    combineReducers({
      ...reducers,
      routing: routerReducer
    });

  const store = createStore(getReducers(reducers));

  if (__DEVELOPMENT__) {
    if (module.hot) {
      module.hot.accept("./reducers", () => {
        const nextReducers = require("./reducers"); // eslint-disable-line global-require
        store.replaceReducer( // eslint-disable-line no-use-before-define
          getReducers(nextReducers.default || nextReducers)
        );
      });
    }
  }

  const history = syncHistoryWithStore(browserHistory, store);

  ReactDOM.render(
    <Provider store={store}>
      <Router
        history={history}
        routes={renderRoutes(contentsGroupsSelector(store.getState()))}
      />
    </Provider>,
    mountElement
  );
}
