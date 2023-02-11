import { combineReducers } from 'redux';
import toDoReducer from './toDoDatas';

const rootReducer = combineReducers({
  toDoReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
