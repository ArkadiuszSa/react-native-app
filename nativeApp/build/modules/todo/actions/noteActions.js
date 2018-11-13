export const FETCH_NOTES_REQUESTED = "FETCH_NOTES_REQUESTED";
export const fetchNotesRequest = () => ({
    type: FETCH_NOTES_REQUESTED
});
export const FETCH_NOTES_SUCCEEDED = "FETCH_NOTES_SUCCEEDED";
export const fetchNotesSuccess = (notes) => ({
    type: FETCH_NOTES_SUCCEEDED,
    payload: notes
});
export const FETCH_NOTES_FAILED = "FETCH_NOTES_FAILED";
export const fetchNotesFail = (msg) => ({
    type: FETCH_NOTES_FAILED,
    payload: msg
});
export const CREATE_NOTE_REQUESTED = "CREATE_NOTE_REQUESTED";
export const createNoteRequest = (note) => ({
    type: CREATE_NOTE_REQUESTED,
    payload: note
});
export const CREATE_NOTE_SUCCEEDED = "CREATE_NOTE_SUCCEEDED";
export const createNoteSuccess = (note) => ({
    type: CREATE_NOTE_SUCCEEDED,
    payload: note
});
export const CREATE_NOTE_FAILED = "CREATE_NOTE_FAILED";
export const createNoteFail = (msg) => ({
    type: CREATE_NOTE_FAILED,
    payload: msg
});
//# sourceMappingURL=noteActions.js.map