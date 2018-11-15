import { ofType, combineEpics } from 'redux-observable';
import { pluck, switchMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Epic } from '../../../rootEpic';
import * as actions from '../actions/noteActions';
import { NoteService } from '../services/NoteService';
import { Note } from '../models/todoModel';

export const navigation = (noteService: NoteService): Epic => {
  const fetchNotesEpic: Epic = action$ =>
    action$.pipe(
      ofType<actions.FetchNotesRequestAction>(actions.FETCH_NOTES_REQUESTED),
      pluck('payload'),
      tap(() => console.log('ecim')),
      switchMap(() =>
      noteService.fetchNotes().pipe(
        map((notes: Note[]) => actions.fetchNotesSuccess(notes)),
        catchError(err => of(actions.fetchNotesFail(err)))
      )
    )
    );
  return combineEpics(fetchNotesEpic);
};
