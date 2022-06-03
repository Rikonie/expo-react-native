import {isActionOf} from "typesafe-actions";
import {of, from, map} from "rxjs";
import {Actions} from "../store/actions";
import {catchError, filter, ignoreElements, switchMap, tap} from "rxjs/operators";
import {RootEpic} from "./root-epic";

const authRequestEpic: RootEpic = (action$, _, {authService}) =>
    action$.pipe(
        filter(isActionOf(Actions.auth.auth.request)),
        switchMap(
            (action) => from(authService.token(action.payload)).pipe(
                map(r => Actions.auth.auth.success(r)), 
                catchError(x=> of(Actions.auth.auth.failure(x))
        )))
    );

const authSetToken: RootEpic = (action$, _, {httpClient}) =>
    action$.pipe(
        filter(isActionOf(Actions.auth.auth.success)),
        tap((action) => {
             httpClient.setAuthHeaders(action.payload)
        }),
        ignoreElements(),
    );


    //Логирует все экшены, которые ходят в приложении, раскоментить для отладки.
    const logEpic: RootEpic = (action$, _, {httpClient}) =>
    action$.pipe(
        filter(()=>true),
        tap((action) => {
             console.log("Action: ",action);
        }),
        ignoreElements(),
        catchError(x=>{
            return of(Actions.auth.auth.failure(x))
        })
    );

export const authEpics = [
    authRequestEpic,
    authSetToken,
    //logEpic
];