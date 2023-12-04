import {
  SET_RESULT_CARDS,
  SET_SEARCH_TEXT,
  SET_SORT_OPTION,
  TCatalogAcion,
} from '../actions/catalog';
import { ICard } from './cards';

interface iCatalogState {
  sortOption: string;
  searchText: string;
  resultCards: ICard[];
}

const initialState: iCatalogState = {
  sortOption: 'Сначала в наличии',
  searchText: '',
  resultCards: [],
};

export const catalogReducer = (state = initialState, action: TCatalogAcion) => {
  switch (action.type) {
    case SET_SORT_OPTION:
      return {
        ...state,
        sortOption: action.payload,
      };
    case SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload,
      };
    case SET_RESULT_CARDS:
      console.log(action.payload);

      return {
        ...state,
        resultCards: action.payload,
      };

    default:
      return state;
  }
};
