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

export const CREATE_NOTE_REQUESTED = 'CREATE_NOTE_REQUESTED';
export type CreateNoteRequestAction = Action<typeof CREATE_NOTE_REQUESTED, Note>;
export const createNoteRequest = (note: Note) => ({
  type: CREATE_NOTE_REQUESTED,
  payload: note
});

export const CREATE_NOTE_SUCCEEDED = 'CREATE_NOTE_SUCCEEDED';
export type CreateNoteSuccedAction = Action<typeof CREATE_NOTE_SUCCEEDED>;
export const createNoteSuccess = (note: Note) => ({
  type: CREATE_NOTE_SUCCEEDED,
  payload: note
});

export const CREATE_NOTE_FAILED = 'CREATE_NOTE_FAILED';
export type CreateNoteFailAction = Action<typeof CREATE_NOTE_FAILED>;
export const createNoteFail = (msg: string) => ({
  type: CREATE_NOTE_FAILED,
  payload: msg
});

export type NoteActions =
  | FetchNotesRequestAction
  | FetchNotesSuccedAction
  | FetchNotesFailAction
  | CreateNoteRequestAction
  | CreateNoteSuccedAction
  | CreateNoteFailAction;
