import { Action } from '../../rootAction';

export const REDIRECT_TO_URL = 'REDIRECT_TO_URL';
export type RedirectToUrlAction = Action<typeof REDIRECT_TO_URL, string>;
export const redirectToUrl = (path: string): RedirectToUrlAction => ({
    type: REDIRECT_TO_URL,
    payload: path
});
