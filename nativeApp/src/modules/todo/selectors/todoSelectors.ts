import { createSelector } from 'reselect';

import { AppState } from '../../../appState';
import { routeConfig } from '../../../config/appConfig';
import { getRouteName } from '../../../common/selectors/navigationSelectors';

export const stateTodo = (state: AppState) => state.todo;
export const getNotes = (state: AppState) => stateTodo(state).notes;

export const isDoneNotesList = createSelector(
    getRouteName,
    (routeName) => {

        // console.log('routeName');
        // console.log(routeName);
        // console.log('routeName');

        return routeConfig.NotesDoneList.toString() === routeName;
    }

);

export const getListNotes = createSelector(
    getNotes,
    isDoneNotesList,
    (notes, isDone) => {
        // console.log(notes);
        // console.log('isDone');

        // console.log(isDone);
        // console.log('isDone');
        return isDone ? (notes.filter((note) => note.isDone)) : (notes.filter((note) => !note.isDone));
    }
);
