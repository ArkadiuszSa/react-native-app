import { Action } from '../../../rootAction';
import { Note } from '../models/todoModel';

export const FETCH_NOTES_REQUESTED = 'FETCH_NOTES_REQUESTED';
export type FetchNotesRequestAction = Action<typeof FETCH_NOTES_REQUESTED>;
export const fetchNotesRequest = () => ({
  type: FETCH_NOTES_REQUESTED
});

export const FETCH_NOTES_SUCCEEDED = 'FETCH_NOTES_SUCCEEDED';
export type FetchNotesSuccedAction = Action<typeof FETCH_NOTES_SUCCEEDED>;
export const fetchNotesSuccess = (notes: Note[]) => ({
  type: FETCH_NOTES_SUCCEEDED,
  payload: notes
});

export const FETCH_NOTES_FAILED = 'FETCH_NOTES_FAILED';
export type FetchNotesFailAction = Action<typeof FETCH_NOTES_FAILED>;
export const fetchNotesFail = (msg: string) => ({
  type: FETCH_NOTES_FAILED,
  payload: msg
});

export type NoteActions =
  | FetchNotesRequestAction
  | FetchNotesSuccedAction
  | FetchNotesFailAction;
