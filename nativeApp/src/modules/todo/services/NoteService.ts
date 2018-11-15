import { from } from 'rxjs';

import {StorageService} from '../../../common/services/StorageService';
import { Note } from '../models/todoModel';

export class NoteService {
    public storageService = new StorageService();
    constructor(private readonly storageService2: StorageService) {
        // console.log(this.storageService2);
    }

    public fetchNotes() {
        return from(this.getNotesFromStorage());
    }

    public createNote = (note: Note) => {
        return from(this.saveNoteInStorage(note));
    }

    public updateNote = (note: Note) => {
        return from(this.updateNoteInStorage(note));
    }

    public deleteNotes = () => {
        return this.storageService.removeItem('notes');
    }

    private async getNotesFromStorage(): Promise<Note[]> {
        const notes = await this.storageService.getItem<Note[]>('notes', true);
        return notes ? (notes as Note[]) : ([]);
    }

    private async saveNoteInStorage(note: Note) {
        const id = new Date().valueOf();
        const newNote = { id, title: note.title, date: note.date, isDone: note.isDone};
        const notes = await this.storageService.getItem<Note[]>('notes', true);
        await this.storageService.setItem('notes', [...notes ? (notes) : [], newNote], true);
        return newNote;
    }

    private async updateNoteInStorage(note: Note) {
        const notes = await this.storageService.getItem<Note[]>('notes', true);
        if (Array.isArray(notes)) {
            const newNotes = notes.filter(({id}: Note) => id !== note.id);
            await this.storageService.setItem('notes', [...newNotes ? (newNotes) : [], note], true);
        }
        return note;
    }

}