import { Action } from '../../../rootAction';
import { Credentials } from '../models/authModel';

export const REGISTER_REQUESTED = 'REGISTER_REQUESTED';
export type RegisterRequestAction = Action<typeof REGISTER_REQUESTED, Credentials>;
export const registerRequest = (payload: Credentials) => ({ type: REGISTER_REQUESTED, payload });

export const REGISTER_SUCCEEDED = 'REGISTER_SUCCEEDED';
export type RegisterSuccessAction = Action<typeof REGISTER_SUCCEEDED, string>;
export const registerSuccess = (payload: string) => ({ type: REGISTER_SUCCEEDED, payload });

export const REGISTER_FAILED = 'REGISTER_FAILED';
export type RegisterFailAction = Action<typeof REGISTER_FAILED, string | null>;
export const registerFail = (payload?: string) => ({ type: REGISTER_FAILED, payload });

export type AuthActions = RegisterRequestAction | RegisterSuccessAction | RegisterFailAction;
