import {
  ADD_AO_CARRINHO,
  SET_FORMA_PG,
  SOMA_VALOR_PEDIDOS,
} from '../constants';

import {
  savePedidoTK,
} from '../thunks/carrinho';

export const addAoCarrinho = payload => ({
  type: ADD_AO_CARRINHO,
  payload,
});

export const setFormaPG = payload => ({
  type: SET_FORMA_PG,
  payload,
});

export const somaValorPedidos = payload => ({
  type: SOMA_VALOR_PEDIDOS,
  payload,
});

export const savePedido = () => savePedidoTK;
