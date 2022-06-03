import {isActionOf} from "typesafe-actions";
import {of, from} from "rxjs";
import {Actions} from "../store/actions";
import {catchError, filter, map, switchMap} from "rxjs/operators";
import {RootEpic} from "./root-epic";


const cushionsPageOpened: RootEpic = (action$, _, {}) =>
    action$.pipe(
        filter(isActionOf(Actions.cushions.cushionsOpened)),
        switchMap((action) => {
            return  [Actions.cushions.cushionsLoading.request(1), Actions.items.itemsLoading.request({})]
        })
    );

const cushionsPageLoad: RootEpic = (action$, _, {filterService}) =>
    action$.pipe(
        filter(isActionOf(Actions.cushions.cushionsLoading.request)),
        switchMap((action)=> from(filterService.getInfo(action.payload)).pipe(
            map(r=>Actions.cushions.cushionsLoading.success(r)),
            catchError(x=> of(Actions.cushions.cushionsLoading.failure(x)))
        ))
    );

export const cushionsEpics = [
    cushionsPageOpened,
    cushionsPageLoad,
];