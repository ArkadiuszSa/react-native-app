import { combineEpics, Epic as _Epic } from 'redux-observable';
import { Action } from 'redux';

import { AppAction } from './rootAction';
import {noteService} from './rootService';
import {noteEpicFactory} from './modules/todo/epics/noteEpic';

export type Epic = _Epic<Action<AppAction>, Action<AppAction>, void>;

export const rootEpic = combineEpics(noteEpicFactory(noteService));