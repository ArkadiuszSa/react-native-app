import { ofType, combineEpics } from "redux-observable";
import { pluck, switchMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";
import * as actions from "../actions/noteActions";
export const noteEpicFactory = (noteService) => {
    const fetchNotesEpic = action$ => action$.pipe(ofType(actions.FETCH_NOTES_REQUESTED), pluck("payload"), switchMap(() => noteService.fetchNotes().pipe(map((notes) => actions.fetchNotesSuccess(notes)), catchError(err => of(actions.fetchNotesFail(err))))));
    const createNoteEpic = action$ => action$.pipe(ofType(actions.CREATE_NOTE_REQUESTED), pluck("payload"), switchMap((note) => noteService.createNote(note).pipe(map((noteData) => actions.createNoteSuccess(noteData)), catchError(err => of(actions.createNoteFail(err))))));
    return combineEpics(fetchNotesEpic, createNoteEpic);
};
//# sourceMappingURL=noteEpic.js.map