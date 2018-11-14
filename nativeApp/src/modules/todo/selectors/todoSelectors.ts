import { AppState } from '../../../appState';

export const stateTodo = (state: AppState) => state.todo;
export const getNotes = (state: AppState) => stateTodo(state).notes;
