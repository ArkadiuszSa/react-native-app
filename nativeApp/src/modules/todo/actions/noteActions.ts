import { Action } from '../../../rootAction';
import { Note } from '../models/todoModel';

export const FETCH_NOTES_REQUESTED = 'FETCH_NOTES_REQUESTED';
export type FetchNotesRequestAction = Action<typeof FETCH_NOTES_REQUESTED>;
export const fetchNotesRequest = () => ({
  type: FETCH_NOTES_REQUESTED
});

export const FETCH_NOTES_SUCCEEDED = 'FETCH_NOTES_SUCCEEDED';
export type FetchNotesSuccedAction = Action<
  typeof FETCH_NOTES_SUCCEEDED,
  Note[]
>;
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
export type CreateNoteRequestAction = Action<
  typeof CREATE_NOTE_REQUESTED,
  Note
>;
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

export const UPDATE_NOTE_REQUESTED = 'UPDATE_NOTE_REQUESTED';
export type UpdateNoteRequestAction = Action<
  typeof UPDATE_NOTE_REQUESTED, Note
>;
export const updateNoteRequest = (note: Note) => ({
  type: UPDATE_NOTE_REQUESTED,
  payload: note
});

export const UPDATE_NOTE_SUCCEEDED = 'UPDATE_NOTE_SUCCEEDED';
export type UpdateNoteSuccedAction = Action<
  typeof UPDATE_NOTE_SUCCEEDED, Note
>;
export const updateNoteSuccess = (note: Note) => ({
  type: UPDATE_NOTE_SUCCEEDED,
  payload: note
});

export const UPDATE_NOTE_FAILED = 'UPDATE_NOTE_FAILED';
export type UpdateNoteFailAction = Action<
  typeof UPDATE_NOTE_FAILED, string
>;
export const updateNoteFail = (msg: string) => ({
  type: UPDATE_NOTE_FAILED,
  payload: msg
});

export const DELETE_NOTE_REQUESTED = 'UPDATE_NODELETE_NOTE_REQUESTEDTE_REQUESTED';
export type DeleteNoteRequestAction = Action<
  typeof DELETE_NOTE_REQUESTED, number
>;
export const deleteNoteRequest = (noteId: number) => ({
  type: DELETE_NOTE_REQUESTED,
  payload: noteId
});

export const DELETE_NOTE_SUCCEEDED = 'DELETE_NOTE_SUCCEEDED';
export type DeleteNoteSuccedAction = Action<
  typeof DELETE_NOTE_SUCCEEDED, number
>;
export const deleteNoteSuccess = (noteId: number) => ({
  type: DELETE_NOTE_SUCCEEDED,
  payload: noteId
});

export const DELETE_NOTE_FAILED = 'DELETE_NOTE_FAILED';
export type DeleteNoteFailAction = Action<
  typeof DELETE_NOTE_FAILED, string
>;
export const deleteNoteFail = (msg: string) => ({
  type: DELETE_NOTE_FAILED,
  payload: msg
});

export type NoteActions =
  | FetchNotesRequestAction
  | FetchNotesSuccedAction
  | FetchNotesFailAction
  | CreateNoteRequestAction
  | CreateNoteSuccedAction
  | CreateNoteFailAction
  | UpdateNoteRequestAction
  | UpdateNoteSuccedAction
  | UpdateNoteFailAction
  | DeleteNoteRequestAction
  | DeleteNoteSuccedAction
  | DeleteNoteFailAction;
