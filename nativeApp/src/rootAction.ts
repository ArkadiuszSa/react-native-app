import { NoteActions } from './modules/todo/actions/noteActions';

export interface Action<T, P = null> {
  readonly type: T;
  readonly payload: P;
}

export type AppAction = NoteActions;
