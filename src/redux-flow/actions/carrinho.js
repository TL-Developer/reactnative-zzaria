import {
  ADD_AO_CARRINHO,
  SET_FORMA_PG,
  SAVE_PEDIDO,
} from '../constants';

export const addAoCarrinho = payload => ({
  type: ADD_AO_CARRINHO,
  payload,
});

export const setFormaPG = payload => ({
  type: SET_FORMA_PG,
  payload,
});

export const savePedido = payload => ({
  type: SAVE_PEDIDO,
  payload,
});
