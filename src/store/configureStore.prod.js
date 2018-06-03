import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import sagas from './sagas';
import rootReducer from './reducers';

const configureStore = preloadedState => {
  const sagaMiddleware = createSagaMiddleware();

  const middleware = [
    sagaMiddleware
  ];
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middleware)
  );

  sagaMiddleware.run(sagas);

  return store;
};


export default configureStore;
