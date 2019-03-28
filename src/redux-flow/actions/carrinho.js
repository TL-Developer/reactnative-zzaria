import {
  ADD_AO_CARRINHO,
} from '../constants';

export const addAoCarrinho = payload => ({
  type: ADD_AO_CARRINHO,
  payload,
});
