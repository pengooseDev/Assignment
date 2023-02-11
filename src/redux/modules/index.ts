import { combineReducers } from 'redux';
import counter from './counter';

const rootReducer = combineReducers({
  counter,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

/*

import { createStore, combineReducers } from 'redux';
import counter from '../modules/counter';

const rootReducer = combineReducers({ counter });
const store = createStore(rootReducer);

export default store;

*/
