import { TodoState } from './modules/todo/reducers/todoReducer';
import { AuthState } from './modules/auth/reducers/authReducer';

export interface AppState {
    todo: TodoState;
    auth: AuthState;
}
