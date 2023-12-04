import { ICard } from '../reducers/cards';

export const SET_SORT_OPTION = 'SET_SORT_OPTION';
export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';
export const SET_RESULT_CARDS = 'SET_RESULT_CARDS';

export interface ISetSortOption {
  readonly type: typeof SET_SORT_OPTION;
  readonly payload: string;
}

export interface ISetSearchText {
  readonly type: typeof SET_SEARCH_TEXT;
  readonly payload: string;
}
export interface ISetResultCards {
  readonly type: typeof SET_RESULT_CARDS;
  readonly payload: ICard[];
}

export const setSortOption = (option: string): ISetSortOption => ({
  type: SET_SORT_OPTION,
  payload: option,
});

export const setSearchText = (text: string): ISetSearchText => ({
  type: SET_SEARCH_TEXT,
  payload: text,
});

export const setResultCards = (cards: ICard[]): ISetResultCards => ({
  type: SET_RESULT_CARDS,
  payload: cards,
});

export type TCatalogAcion = ISetSortOption | ISetSearchText | ISetResultCards;
