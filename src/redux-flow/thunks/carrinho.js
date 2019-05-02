import {
  SAVE_PEDIDO,
} from '../constants';

import {
  clearCarrinho,
} from '../actions/carrinho';

import request from '../../helpers/request';

const endpoint = '/pedidos?token=eyJhbGciOiJIUzI1NiJ9.cGF1bG8.C2wuETOYPzALi8wHVI7Nk9c23AqFpu8-Q0BUe4SO7Jg';

export const savePedidoTK = (dispatch, getState) => {
  const {
    usuario,
    carrinho,
  } = getState();

  const pedido = {
    ...usuario.endereco,
    nome: usuario.nome,
    pedido: carrinho.pedidos.list,
    valor: carrinho.valor,
    telefone:usuario.telefones.fixo,
    celular: usuario.telefones.celular,
    formaPg: JSON.parse(carrinho.formaPg) || '',
    troco: carrinho.troco,
  };

  request.post(endpoint, pedido).then(data => {
    dispatch(clearCarrinho());
    alert('Pedido Enviado com sucesso!');
  }).catch(err => {
    alert('Não foi possível enviar o pedido:' + err);
  });
};
