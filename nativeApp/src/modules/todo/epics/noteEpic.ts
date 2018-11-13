import { ofType, combineEpics } from "redux-observable";
import { pluck, switchMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";

import { Epic } from "../../../rootEpic";
import * as actions from "../actions/noteActions";
import { NoteService } from "../services/NoteService";
import { Note } from "../models/todoModel";

export const noteEpicFactory = (noteService: NoteService): Epic => {
  const fetchNotesEpic: Epic = action$ =>
    action$.pipe(
      ofType<actions.FetchNotesRequestAction>(actions.FETCH_NOTES_REQUESTED),
      pluck("payload"),
      switchMap(() =>
        noteService.fetchNotes().pipe(
          map((notes: Note[]) => actions.fetchNotesSuccess(notes)),
          catchError(err => of(actions.fetchNotesFail(err)))
        )
      )
    );

  const createNoteEpic: Epic = action$ =>
    action$.pipe(
      ofType<actions.CreateNoteRequestAction>(actions.CREATE_NOTE_REQUESTED),
      pluck("payload"),
      switchMap((note: Note) =>
        noteService.createNote(note).pipe(
          map((noteData: Note) => actions.createNoteSuccess(noteData)),
          catchError(err => of(actions.createNoteFail(err)))
        )
      )
    );

  return combineEpics(fetchNotesEpic, createNoteEpic);
};
