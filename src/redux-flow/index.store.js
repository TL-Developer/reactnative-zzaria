import { createStore, combineReducers } from 'redux';

import allReducers from './reducers';

const reducers = combineReducers({
  ...allReducers,
});

const store = () => {
  return createStore(reducers);
};

export default store;
