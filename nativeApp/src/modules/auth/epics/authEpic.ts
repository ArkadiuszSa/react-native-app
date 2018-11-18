import { ofType, combineEpics } from 'redux-observable';
import { of } from 'rxjs';
import { map, catchError, pluck, switchMap, tap } from 'rxjs/operators';

import { Epic } from '../../../rootEpic';
import * as actions from '../actions/authActions';
import { AuthService } from '../services/AuthService';
import { Credentials } from '../models/authModel';

export function authEpicFactory(authService: AuthService): Epic {
    const registerEpic: Epic = action$ =>
        action$.pipe(
            ofType<actions.RegisterRequestAction>(actions.REGISTER_REQUESTED),
            pluck('payload'),
            tap(() => console.log('ashfasdfhiu3w')),
            switchMap((credentials: Credentials) =>
                authService.register(credentials).pipe(
                    pluck('response'),
                    map(actions.registerSuccess),
                    catchError(err => {
                        console.log('leci err');
                        console.log(err.xhr.response);
                        return of(actions.registerFail(err));
                    }),
                ),
            ),
        );

    return combineEpics(registerEpic);
}
