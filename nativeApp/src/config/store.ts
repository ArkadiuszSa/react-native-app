import { createStore, combineReducers } from 'redux';
import { TodoReducer } from '../modules/todo/reducers/todoReducer';

const rootReducer = combineReducers({
  todo: TodoReducer
});

export const store = createStore(rootReducer);
