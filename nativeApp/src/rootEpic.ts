import { combineEpics, Epic as _Epic } from 'redux-observable';
import { Action } from 'redux';

import { AppAction } from './rootAction';
import { noteService, authService } from './rootService';
import { navigationEpicFactory } from './common/epics/navigationEpic';
import { noteEpicFactory } from './modules/todo/epics/noteEpic';

import { navigation } from './modules/todo/epics/testEpic';
import { authEpicFactory } from './modules/auth/epics/authEpic';

export type Epic = _Epic<Action<AppAction>, Action<AppAction>, void>;

export const rootEpic = combineEpics(
    authEpicFactory(authService),
    noteEpicFactory(noteService),
    navigationEpicFactory(),
);
