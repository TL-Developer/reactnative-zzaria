import {
  GET_LIST_PIZZAS_SALGADAS,
} from '../constants';

const initialState = {
  pizzasSalgadas: {
    loading: false,
    list: [],
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_PIZZAS_SALGADAS:
      return {
        ...state,
        pizzasSalgadas: {
          ...state.pizzasSalgadas,
          list: action.payload
        }
      }

    default:
      return state;
  }
};

export default reducer;
