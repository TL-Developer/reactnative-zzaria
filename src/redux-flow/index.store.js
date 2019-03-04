import { createStore, combineReducers } from 'redux';

import pizzasSalgadas from './reducers/pizzasSalgadas';

const reducers = combineReducers({
  pizzasSalgadas,
});

const store = () => {
  return createStore(reducers);
};

export default store;
