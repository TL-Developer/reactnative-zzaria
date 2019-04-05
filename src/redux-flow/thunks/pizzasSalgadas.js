import {
  getListPizzasSalgadasSuccess,
  loadingPizzasSalgadas,
} from '../actions/pizzasSalgadas';

import request from '../../helpers/request';

const endpoint = '/produtos/pizzas?token=eyJhbGciOiJIUzI1NiJ9.cGF1bG8.C2wuETOYPzALi8wHVI7Nk9c23AqFpu8-Q0BUe4SO7Jg';

export const getPizzasSalgadasTK = dispatch => {
  dispatch(loadingPizzasSalgadas(true));
  request.get(endpoint).then(result => {
    dispatch(loadingPizzasSalgadas(false));
    dispatch(getListPizzasSalgadasSuccess(result.data));
  }).catch(err => {
    alert('Não foi possível trazer os produtos');
  });
};
