import { createSelector } from 'reselect';

import { AppState } from '../../../appState';
import { routeConfig } from '../../../config/appConfig';
import { getRouteName } from '../../../common/selectors/navigationSelectors';

export const notesListsTitles = {
  toDo: 'To do',
  done: 'Done'
};

export const stateTodo = (state: AppState) => state.todo;
export const getNotes = (state: AppState) => stateTodo(state).notes;

export const isDoneNotesList = createSelector(
  getRouteName,
  routeName => routeConfig.notesDoneList === routeName
);

export const getListNotes = createSelector(
  getNotes,
  isDoneNotesList,
  (notes, isDone) =>
    isDone
      ? notes.filter(note => note.isDone)
      : notes.filter(note => !note.isDone)
);
