import {RootEpic} from "./root-epic";
import {catchError, filter, ignoreElements, switchMap, tap} from "rxjs/operators";
import {isActionOf} from "typesafe-actions";
import {Actions} from "../store/actions";
import {of, from, map} from "rxjs";

const setStatusEpic: RootEpic = (action$, _, {setStatusService}) =>
    action$.pipe(
        filter(isActionOf(Actions.setStatus.setStatusItem.request)),
        switchMap(
            (action) => from(setStatusService.setStatus(action.payload)).pipe(
                map(r => Actions.setStatus.setStatusItem.success(r)),
                catchError(x=> of(Actions.setStatus.setStatusItem.failure(x))
                )))
    );

export const statusEpics = [
    setStatusEpic
];