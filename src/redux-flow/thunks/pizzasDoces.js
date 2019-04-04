import {
  SAVE_PEDIDO,
} from '../constants';

import request from '../../helpers/request';

const endpoint = '/produtos/pizzasDoces?token=eyJhbGciOiJIUzI1NiJ9.cGF1bG8.C2wuETOYPzALi8wHVI7Nk9c23AqFpu8-Q0BUe4SO7Jg';

export const fetchingPizzasDoces = dispatch => {
  request.get(endpoint).then(data => {

  }).catch(err => {
    alert('Não foi possível trazer os produtos');
  });
};
