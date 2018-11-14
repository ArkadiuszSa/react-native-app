import { combineEpics } from 'redux-observable';
import { noteService } from './rootService';
import { noteEpicFactory } from './modules/todo/epics/noteEpic';
export const rootEpic = combineEpics(noteEpicFactory(noteService));
//# sourceMappingURL=rootEpic.js.map