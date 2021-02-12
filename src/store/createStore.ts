import { createStore, applyMiddleware, Reducer, Middleware } from 'redux';
import { PersistState } from 'redux-persist';

import { UserAction, UserState } from './modules/user/types';

export interface StoreState {
  _persist: PersistState;
  user: UserState;
}

export type StoreAction = UserAction;

export default (
  reducers: Reducer<StoreState, StoreAction>,
  middlewares?: Middleware[]
) => {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
