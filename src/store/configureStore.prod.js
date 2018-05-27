import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';

const configureStore = preloadState => {
  const middleware = [
    createSagaMiddleware()
  ];
  const store = createStore(
    rootReducer,
    preloadState,
    applyMiddleware(...middleware)
  );

  return store;
};

export default configureStore;
