import { NoteService } from './modules/todo/services/NoteService';
import { TestService } from './modules/todo/services/TestService';
import { StorageService } from './common/services/StorageService';
export const storageService = new StorageService();
export const testService = new TestService();
export const noteService = new NoteService(storageService);
//# sourceMappingURL=rootService.js.map