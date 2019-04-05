import {
  ADD_AO_CARRINHO,
  SET_FORMA_PG,
} from '../constants';

const initialState = {
  pedidos: {
    loading: false,
    list: [],
  },
  troco: '50,00',
  formaPg: '',
  valor: 100.50,
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
      console.log(action.payload)
      return {
        ...state,
        formaPg: action.payload,
      }

    default:
      return state;
  }
};

export default reducer;
