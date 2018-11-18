import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootEpic } from '../rootEpic';
import { TodoReducer } from '../modules/todo/reducers/todoReducer';
import { AuthReducer } from '../modules/auth/reducers/authReducer';

const rootReducer = combineReducers({
    todo: TodoReducer,
    auth: AuthReducer,
});

const epicMiddleware = createEpicMiddleware();

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(epicMiddleware)));

epicMiddleware.run(rootEpic);
