import {
  GET_LIST_PIZZAS_SALGADAS_SUCCESS,
  LOADING_PIZZAS_SALGADAS,
} from '../constants';

const initialState = {
  salgadas: {
    loading: false,
    list: [],
  },
  doces: {
    loading: false,
    list: [],
  }
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case GET_LIST_PIZZAS_SALGADAS_SUCCESS:
      return {
        ...state,
        salgadas: {
          ...state.salgadas,
          list: action.payload,
        }
      }

    case LOADING_PIZZAS_SALGADAS:
      return {
        ...state,
        salgadas: {
          ...state.salgadas,
          loading: action.payload,
        }
      }

    default:
      return state;
  }
};

export default reducer;
