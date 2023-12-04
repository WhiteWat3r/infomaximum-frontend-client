import { ADD_TO_FAVORITE, LOAD_CARDS, REMOVE_FROM_FAVORITE, TCardsAcion } from '../actions/cards';

export interface ICard {
  id: number;
  brand: string;
  model: string;
  color: string;
  model_year: number;
  img_src: string;
  price: string;
  description?: string;
  availability: false;
}

export interface ICardsState {
  items: ICard[];
  favoritetItems: ICard[];
}

export const initialState: ICardsState = {
  items: [],
  favoritetItems: [],
};

export const cardsReducer = (state: ICardsState = initialState, action: TCardsAcion) => {
  switch (action.type) {
    case LOAD_CARDS:
      return {
        ...state,
        items: action.payload,
      };
    case ADD_TO_FAVORITE:
      return {
        ...state,
        favoritetItems: [...state.favoritetItems, action.payload],
      };
    case REMOVE_FROM_FAVORITE:
      return {
        ...state,
        favoritetItems: state.favoritetItems.filter((card) => card !== action.payload),
      };
    default:
      return state;
  }
};
