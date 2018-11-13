import { from } from 'rxjs';

// import {notesMock} from "../../../config/mocks/mockNotes"
import {StorageService} from '../../../common/services/StorageService';
import { Note } from '../models/todoModel';

export class NoteService {
    constructor(private readonly storageService2: StorageService) {
        console.log(this.storageService2);
    }

    public fetchNotes() {
        return from(this.getNotes());
    }

    public createNote = (note: Note) => {
        return from(this.saveNote(note));
    }

    public async getNotes(): Promise<Note[]> {
        const notes = await this.storageService.getItem<Note[]>('notes', true);
        return notes ? (notes as Note[]) : ([]);
    }

    public async saveNote(note: Note) {
        const id = new Date().valueOf();
        const newNote = { id, text: note.text, date: note.date, isDone: note.isDone};
        return newNote;
    }
    private storageService = new StorageService();
}