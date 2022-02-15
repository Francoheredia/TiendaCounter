import { ADD_ITEMS, DELETE_ITEMS } from '../types/types';

const initialState = {
  items: [],
};

export default function reducerItems(state = initialState, actions) {
  switch (actions.type) {
    case ADD_ITEMS: {
      return {
        ...state,
        items: [...state.items, actions.payload],
      };
    }
    case DELETE_ITEMS: {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== actions.payload),
      };
    }
    default:
      return state;
  }
}
