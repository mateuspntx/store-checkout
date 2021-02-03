import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type UserAction = ActionType<typeof actions>;

export interface UserState {
  readonly favoriteProducts: {
    id: string;
    slug: string;
    name: string;
    images: string[];
  }[];
}

export interface FavoriteProduct {
  readonly id: string;
  readonly name: string;
  readonly slug: string;
  readonly images: string[];
}
