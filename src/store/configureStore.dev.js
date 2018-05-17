import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import sagas from './sagas';
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */
const reduxModules = require('./reducers');

const configureStore = preloadedState => {
  const sagaMiddleware = createSagaMiddleware();

  const middleware = [
    sagaMiddleware
  ];

  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(...middleware))
  );

  sagaMiddleware.run(sagas);

  if (module.hot) {
    // Enable Webpack hot module replacement for reduxers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = reduxModules.default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
