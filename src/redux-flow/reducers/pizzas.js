import {
  GET_LIST_PIZZAS_SALGADAS_SUCCESS,
  LOADING_PIZZAS_SALGADAS,
} from '../constants';

const initialState = {
  salgadas: {
    loading: false,
    list: [
      {
        id: 0,
        name: 'Calabresa',
        description: 'mussarela e calabresa',
        valor: 25.50,
      },
      {
        id: 1,
        name: 'Mussarela',
        description: 'mussarela',
        valor: 35.50,
      },
    ],
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
        pizzasSalgadas: {
          ...state.pizzasSalgadas,
          list: action.payload,
        }
      }

    case LOADING_PIZZAS_SALGADAS:
      return {
        ...state,
        pizzasSalgadas: {
          ...state.pizzasSalgadas,
          loading: action.payload,
        }
      }

    default:
      return state;
  }
};

export default reducer;
