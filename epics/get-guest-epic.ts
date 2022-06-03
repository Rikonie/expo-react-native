import {RootEpic} from "./root-epic";
import {catchError, filter, map, switchMap} from "rxjs/operators";
import {isActionOf} from "typesafe-actions";
import {Actions} from "../store/actions";
import {of, from} from "rxjs";

const getGuestLoad: RootEpic = (action$, _, {getGuestService}) =>
    action$.pipe(
        filter(isActionOf(Actions.loadGuest.loadGuest.request)),
        switchMap((action)=> from(getGuestService.getInfoGuest(action.payload)).pipe(
            map(r=>Actions.loadGuest.loadGuest.success(r)),
            catchError(x=> of(Actions.loadGuest.loadGuest.failure(x)))
        ))
    );

export const getGuestEpics = [
    getGuestLoad
];
