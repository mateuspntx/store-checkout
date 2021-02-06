import { takeLatest, put, all } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export function* addFavoriteProduct({
  payload,
}: ActionType<typeof actions.addFavoriteProduct>) {
  try {
    const { id, name, slug, images } = payload;

    yield put(actions.addFavoriteProductSuccess({ id, name, slug, images }));
  } catch (err) {
    yield put(actions.addFavoriteProductFailure());
  }
}

export default all([
  takeLatest('@user/ADD_FAVORITE_PRODUCT', addFavoriteProduct),
]);
