import { combineEpics, Epic as _Epic } from 'redux-observable';
import { Action } from 'redux';

import { AppAction } from './rootAction';
import {noteService} from './rootService';
import {noteEpicFactory} from './modules/todo/epics/noteEpic';
import {navigation} from './modules/todo/epics/testEpic';
import {navigationEpicFactory} from './common/epics/navigationEpic';

export type Epic = _Epic<Action<AppAction>, Action<AppAction>, void>;

export const rootEpic = combineEpics( noteEpicFactory(noteService), navigationEpicFactory());