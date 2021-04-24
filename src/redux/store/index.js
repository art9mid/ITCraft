import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../redusers';

export const storeConfig = () => {
  const store = createStore(reducers, applyMiddleware(thunk));

  return store;
};
