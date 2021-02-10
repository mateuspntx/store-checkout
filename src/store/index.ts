import { Middleware, Store } from 'redux';
import createSagaMiddleware, { Task } from 'redux-saga';
import { persistReducer } from 'redux-persist';
import { persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createWrapper } from 'next-redux-wrapper';

import createStore from './createStore';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

export interface SagaStore extends Store {
  sagaTask?: Task;
}

const persistConfig = {
  key: 'storrr',
  storage,
  whitelist: ['user'],
};

const makeStore = () => {
  const isServer = typeof window === 'undefined';

  const sagaMiddleware = createSagaMiddleware();

  const middlewares: Middleware[] = [sagaMiddleware];

  if (isServer) {
    const makeConfiguredStore = () => createStore(rootReducer, middlewares);

    return makeConfiguredStore();
  } else {
    const store: any = createStore(
      persistReducer(persistConfig, rootReducer),
      middlewares
    );

    store._persist = persistStore(store);

    (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

    return store;
  }
};

export const wrapper = createWrapper(makeStore);
