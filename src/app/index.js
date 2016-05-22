import assign from 'object-assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import 'normalize.css';
import 'font-awesome/css/font-awesome.css';

import reducers from './reducers';
import renderRoutes from './renderRoutes';
import { exercisesGroupsSelector } from './selectors';

// TODO: Use initialState
export function mount(initialState, mountElement) {
  const getReducers = (baseReducers) =>
    combineReducers(assign(baseReducers, { routing: routerReducer }));

  const store = createStore(getReducers(reducers));

  if (__DEVELOPMENT__) {
    if (module.hot) {
      module.hot.accept('./reducers', () => {
        const nextReducers = require('./reducers'); // eslint-disable-line global-require
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
        routes={renderRoutes(exercisesGroupsSelector(store.getState()))}
      />
    </Provider>,
    mountElement
  );
}