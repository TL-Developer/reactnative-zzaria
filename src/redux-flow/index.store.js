import { createStore, combineReducers } from 'redux';

import pizzas from './reducers/pizzas';

const reducers = combineReducers({
  pizzas,
});

const store = () => {
  return createStore(reducers);
};

export default store;
