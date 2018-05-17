import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';

function configureStore(initialState) {
  const middleware = [
    createSagaMiddleware()
  ];
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  );

  return store;
}

const store = configureStore();

export default store;
