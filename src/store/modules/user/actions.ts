import { action } from 'typesafe-actions';

import { FavoriteProduct } from './types';

export function addFavoriteProduct({
  id,
  name,
  slug,
  images,
}: FavoriteProduct) {
  return action('@user/ADD_FAVORITE_PRODUCT', {
    id,
    name,
    slug,
    images,
  });
}

export function addFavoriteProductSuccess(product: FavoriteProduct) {
  return action('@user/ADD_FAVORITE_PRODUCT_SUCCESS', product);
}

export function addFavoriteProductFailure() {
  return action('@user/ADD_FAVORITE_PRODUCT_FAILURE');
}

export function deleteFavoriteProduct({ id }: { id: string }) {
  return action('@user/DELETE_FAVORITE_PRODUCT', {
    id,
  });
}
