import {
  ADD_AO_CARRINHO,
  SET_FORMA_PG,
  SOMA_VALOR_PEDIDOS,
} from '../constants';

const initialState = {
  pedidos: {
    loading: false,
    list: [],
  },
  troco: '50,00',
  formaPg: '',
  valor: 0,
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

    case SET_FORMA_PG:
      return {
        ...state,
        formaPg: action.payload,
      }

     case SOMA_VALOR_PEDIDOS:
      return {
        ...state,
        valor: state.pedidos.list.reduce((soma, pedido) => (
          soma += ( pedido.valor * pedido.qtd )
        ), 0),
      }

    default:
      return state;
  }
};

export default reducer;
