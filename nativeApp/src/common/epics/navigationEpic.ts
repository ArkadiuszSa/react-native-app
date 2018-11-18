import { ofType, combineEpics } from 'redux-observable';
import { map, tap, pluck, ignoreElements } from 'rxjs/operators';

import { Epic } from '../../rootEpic';
import { routeConfig } from '../../config/appConfig';
import { RedirectToUrlAction, redirectToUrl, REDIRECT_TO_URL } from '../actions/navigationAction';
import * as noteActions from '../../modules/todo/actions/noteActions';
import * as authActions from '../../modules/auth/actions/authActions';

import { navigate } from '../services/NavigationService';

export const navigationEpicFactory = (): Epic => {
    const redirectEpic: Epic = action$ =>
        action$.pipe(
            ofType<RedirectToUrlAction>(REDIRECT_TO_URL),
            pluck('payload'),
            tap((url: string) => {
                navigate(url, {});
            }),
            ignoreElements(),
        );

    const redirectToNotesToDoList: Epic = action$ =>
        action$.pipe(
            ofType<noteActions.CreateNoteSuccedAction>(noteActions.CREATE_NOTE_SUCCEEDED),
            map(() => redirectToUrl(routeConfig.notesToDoList)),
        );

    const redirectAfterRegister: Epic = action$ =>
        action$.pipe(
            ofType<authActions.RegisterSuccessAction>(authActions.REGISTER_SUCCEEDED),
            pluck('payload'),
            tap(() => console.log('naviEpic')),
            map(() => redirectToUrl(routeConfig.notesToDoList)),
        );

    return combineEpics(redirectEpic, redirectToNotesToDoList, redirectAfterRegister);
};
