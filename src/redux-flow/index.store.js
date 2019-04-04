import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allReducers from './reducers';

const reducers = combineReducers({
  ...allReducers,
});

const store = () => {
  return createStore(
    reducers,
    applyMiddleware(thunk)
  );
};

export default store;
