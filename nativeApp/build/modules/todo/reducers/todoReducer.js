import * as actions from '../actions/noteActions';
const initialState = {
    isLoading: false,
    notes: []
};
export const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_NOTES_REQUESTED:
        case actions.CREATE_NOTE_REQUESTED:
            return Object.assign({}, state, { isLoading: true });
        case actions.FETCH_NOTES_SUCCEEDED:
            return Object.assign({}, state, { isLoading: false, notes: action.payload });
        case actions.CREATE_NOTE_SUCCEEDED:
            console.log('action');
            console.log(action);
            console.log('action');
            return Object.assign({}, state, { isLoading: false, notes: [...state.notes, action.payload] });
        case actions.FETCH_NOTES_FAILED:
        case actions.CREATE_NOTE_FAILED:
            return Object.assign({}, state, { isLoading: false });
        default:
            return state;
    }
};
//# sourceMappingURL=todoReducer.js.map