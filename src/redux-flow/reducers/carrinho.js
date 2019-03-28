import {
  ADD_AO_CARRINHO,
} from '../constants';

const initialState = {
  pedidos: {
    loading: false,
    list: [],
  },
  pagamento: 'dinheiro',
  total: 100.50,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_AO_CARRINHO:
      return {
        ...state,
        pedidos: {
          ...state.pedidos,
          list: [
            ...state.pedidos.list,
            action.payload,
          ],
        },
      }

    default:
      return state;
  }
};

export default reducer;
