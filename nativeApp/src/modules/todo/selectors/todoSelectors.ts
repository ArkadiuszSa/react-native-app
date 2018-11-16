import { createSelector } from 'reselect';

import { AppState } from '../../../appState';
import { routeConfig } from '../../../config/appConfig';
import { getRouteName, getRouteId } from '../../../common/selectors/navigationSelectors';
import { initialNote } from '../models/todoModel';

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

export const isNoteFormCreate = createSelector(
	getRouteName,
	routeName => routeConfig.noteFormCreate === routeName
);

export const getNoteFormInitialValues = createSelector(
	getNotes,
	getRouteId,
	(notes, routeId) => {
		const note = notes.find(({id}) => routeId === id  );
		return note ? (note) : (initialNote);
	}
);
