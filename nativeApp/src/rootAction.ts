import { NoteActions } from './modules/todo/actions/noteActions';
import { AuthActions } from './modules/auth/actions/authActions';

export interface Action<T, P = null> {
    readonly type: T;
    readonly payload: P;
}

export type AppAction = NoteActions | AuthActions;
