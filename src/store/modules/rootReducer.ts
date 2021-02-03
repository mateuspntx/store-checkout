import { combineReducers } from 'redux';

import user from './user/reducer';
import { StoreState } from '../createStore';

export default combineReducers<StoreState>({
  user,
});
