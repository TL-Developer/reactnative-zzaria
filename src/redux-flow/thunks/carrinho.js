import {
  SAVE_PEDIDO,
} from '../constants';

import request from '../../helpers/request';

const endpoint = '/pedidos?token=eyJhbGciOiJIUzI1NiJ9.cGF1bG8.C2wuETOYPzALi8wHVI7Nk9c23AqFpu8-Q0BUe4SO7Jg';

export const savePedidoTK = (dispatch, getState) => {
  const pedido = {
    ...getState().usuario.endereco,
    nome: getState().usuario.nome,
    pedido: getState().carrinho.pedidos.list,
    valor: getState().carrinho.valor,
    telefones: getState().usuario.telefones,
    formaPg: {
      _id: 137,
      nome: 'Elo refeição'
    }
  };

  request.post(endpoint, pedido).then(data => {
    alert('Pedido Enviado com sucesso!');
  }).catch(err => {
    alert('Não foi possível enviar o pedido:' + err);
  });
};
