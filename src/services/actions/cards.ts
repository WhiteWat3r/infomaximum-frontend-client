import { ICard } from '../reducers/cards';

export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';
export const REMOVE_FROM_FAVORITE = 'REMOVE_FROM_FAVORITE';

export interface ILoadCards {
  readonly type: typeof LOAD_CARDS;
  readonly payload: ICard[];
}

export interface IAddToFavorite {
  readonly type: typeof ADD_TO_FAVORITE;
  readonly payload: ICard;
}
export interface IRemoveFromFavorite {
  readonly type: typeof REMOVE_FROM_FAVORITE;
  readonly payload: ICard;
}

export const addToFavorite = (card: ICard): IAddToFavorite => ({
  type: ADD_TO_FAVORITE,
  payload: card,
});

export const removeFromFavorite = (card: ICard): IRemoveFromFavorite => ({
  type: REMOVE_FROM_FAVORITE,
  payload: card,
});

export const loadCards = (cards: ICard[]): ILoadCards => ({
  type: LOAD_CARDS,
  payload: cards,
});

export type TCardsAcion = ILoadCards | IAddToFavorite | IRemoveFromFavorite;
