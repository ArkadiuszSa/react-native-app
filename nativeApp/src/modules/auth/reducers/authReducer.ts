import { AppAction } from '../../../rootAction';
import * as actions from '../actions/authActions';

export interface AuthState {
    isLoading: boolean;
    isLoged: boolean;
    lastUpdate: string;
}

const initialState: AuthState = {
    isLoading: false,
    isLoged: false,
    lastUpdate: '',
};
export const AuthReducer = (state: AuthState = initialState, action: AppAction) => {
    switch (action.type) {
        case actions.REGISTER_REQUESTED:
            return { ...state, isLoading: true };
        case actions.REGISTER_SUCCEEDED:
            console.log('hehehehe');
            return { ...state, isLoading: false, isLoged: true };
        case actions.REGISTER_FAILED:
            return { ...state, isLoading: false };
        default:
            return state;
    }
};
