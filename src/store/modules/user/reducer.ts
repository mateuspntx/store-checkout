import { HYDRATE } from 'next-redux-wrapper';

import { UserState, UserAction } from './types';

const initialState: UserState = {
  favoriteProducts: [],
};

const newHYDRATE: any = HYDRATE;

export default function user(
  state = initialState,
  action: UserAction
): UserState {
  switch (action.type) {
    case newHYDRATE:
      return {
        ...state,
      };

    case '@user/ADD_FAVORITE_PRODUCT':
      return {
        ...state,
        favoriteProducts: [...state.favoriteProducts, action.payload],
      };

    case '@user/DELETE_FAVORITE_PRODUCT': {
      return {
        ...state,
        favoriteProducts: state.favoriteProducts.filter(
          (product) => product.id !== action.payload.id
        ),
      };
    }

    default:
      return state;
  }
}
