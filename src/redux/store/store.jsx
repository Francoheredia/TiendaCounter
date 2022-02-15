import { createStore } from 'redux';
import reducerItems from '../reducers/reducer';
export const store = createStore(
  reducerItems,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
