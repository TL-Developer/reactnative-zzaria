import {
  GET_LIST_PIZZAS_SALGADAS_SUCCESS,
  LOADING_PIZZAS_SALGADAS,
} from '../constants';

import {
  getPizzasSalgadasTK,
} from '../thunks/pizzasSalgadas';

export const getListPizzasSalgadasSuccess = payload => ({
  type: GET_LIST_PIZZAS_SALGADAS_SUCCESS,
  payload,
});

export const loadingPizzasSalgadas = payload => ({
  type: LOADING_PIZZAS_SALGADAS,
  payload,
});

export const getListPizzasSalgadas = payload => getPizzasSalgadasTK;
