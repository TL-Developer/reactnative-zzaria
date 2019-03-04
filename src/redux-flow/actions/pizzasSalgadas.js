import {
  GET_LIST_PIZZAS_SALGADAS,
} from '../constants';

export const getListPizzasSalgadas = payload => ({
  type: GET_LIST_PIZZAS_SALGADAS,
  payload,
});
