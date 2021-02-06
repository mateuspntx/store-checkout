import { Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistReducer } from 'redux-persist';
import { persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import createStore from './createStore';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const persistConfig = {
  key: 'storrr',
  storage,
  whitelist: ['user'],
};

const sagaMiddleware = createSagaMiddleware();

const middlewares: Middleware[] = [sagaMiddleware];

const store = createStore(
  persistReducer(persistConfig, rootReducer),
  middlewares
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
