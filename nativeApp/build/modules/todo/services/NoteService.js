var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { from } from 'rxjs';
// import {notesMock} from "../../../config/mocks/mockNotes"
import { StorageService } from '../../../common/services/StorageService';
export class NoteService {
    constructor(storageService2) {
        this.storageService2 = storageService2;
        this.createNote = (note) => {
            return from(this.saveNote(note));
        };
        this.storageService = new StorageService();
        console.log(this.storageService2);
    }
    fetchNotes() {
        return from(this.getNotes());
    }
    getNotes() {
        return __awaiter(this, void 0, void 0, function* () {
            const notes = yield this.storageService.getItem('notes', true);
            return notes ? notes : ([]);
        });
    }
    saveNote(note) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = new Date().valueOf();
            const newNote = { id, text: note.text, date: note.date, isDone: note.isDone };
            return newNote;
        });
    }
}
//# sourceMappingURL=NoteService.js.map