import { NoteService } from './modules/todo/services/NoteService';

import { StorageService } from './common/services/StorageService';
import { AuthService } from './modules/auth/services/AuthService';

export const storageService = new StorageService();
export const authService = new AuthService();
export const noteService = new NoteService(storageService);
