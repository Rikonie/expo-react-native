import {isActionOf} from "typesafe-actions";
import {of, from} from "rxjs";
import {Actions} from "../store/actions";
import {catchError, filter, map, switchMap} from "rxjs/operators";
import {RootEpic} from "./root-epic";


const chargesPageOpened: RootEpic = (action$, _, {}) =>
    action$.pipe(
        filter(isActionOf(Actions.charges.chargesOpened)),
        switchMap((action) => {
            return  [Actions.charges.chargesLoading.request(5), Actions.items.itemsLoading.request({})]
        })
    );

const chargesPageLoad: RootEpic = (action$, _, {filterService}) =>
    action$.pipe(
        filter(isActionOf(Actions.charges.chargesLoading.request)),
        switchMap((action)=> from(filterService.getInfo(action.payload)).pipe(
            map(r=>Actions.charges.chargesLoading.success(r)),
            catchError(x=> of(Actions.charges.chargesLoading.failure(x)))
        ))
    );

export const chargesEpics = [
    chargesPageOpened,
    chargesPageLoad
];

