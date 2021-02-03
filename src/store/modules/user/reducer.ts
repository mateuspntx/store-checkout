import { UserState, UserAction } from './types';

const initialState: UserState = {
  favoriteProducts: [],
};

export default function user(
  state = initialState,
  action: UserAction
): UserState {
  switch (action.type) {
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
