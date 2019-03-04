import {
  GET_LIST_PIZZAS_SALGADAS,
} from '../constants';

const initialState = {
  salgadas: {
    loading: false,
    list: [
      {
        name: 'Grande 2 sabores',
        subtitle: 'Escolha dois sabores'
      },
      {
        name: 'Grande',
        subtitle: 'Escolha um sabor'
      },
      {
        name: 'Broto 2 sabores',
        subtitle: 'Escolha dois sabores'
      },
      {
        name: 'Broto',
        subtitle: 'Escolha um sabor'
      },
    ],
  },
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
