export const FETCH_NOTES_REQUESTED = 'FETCH_NOTES_REQUESTED';
export const fetchNotesRequest = () => ({
    type: FETCH_NOTES_REQUESTED
});
export const FETCH_NOTES_SUCCEEDED = 'FETCH_NOTES_SUCCEEDED';
export const fetchNotesSuccess = (notes) => ({
    type: FETCH_NOTES_SUCCEEDED,
    payload: notes
});
export const FETCH_NOTES_FAILED = 'FETCH_NOTES_FAILED';
export const fetchNotesFail = (msg) => ({
    type: FETCH_NOTES_FAILED,
    payload: msg
});
//# sourceMappingURL=noteActions.js.map