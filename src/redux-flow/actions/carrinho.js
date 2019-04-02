import {
  ADD_AO_CARRINHO,
  SET_FORMA_PG,
  SAVE_PEDIDO,
} from '../constants';

import request from '../../helpers/request';

export const addAoCarrinho = payload => ({
  type: ADD_AO_CARRINHO,
  payload,
});

export const setFormaPG = payload => ({
  type: SET_FORMA_PG,
  payload,
});

export const savePedido = payload => () => {
  request.get('/pizzasDoces?token=eyJhbGciOiJIUzI1NiJ9.cGF1bG8.C2wuETOYPzALi8wHVI7Nk9c23AqFpu8-Q0BUe4SO7Jg').then(data => {
    debugger;
  }).catch(err => {
    debugger;
  });
};
