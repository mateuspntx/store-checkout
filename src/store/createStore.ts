import { createStore, applyMiddleware, Reducer, Middleware } from 'redux';
import { UserAction, UserState } from './modules/user/types';

export interface StoreState {
  user: UserState;
}

export type StoreAction = UserAction;

export default (
  reducers: Reducer<StoreState, StoreAction>,
  middlewares: Middleware[]
) => {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
