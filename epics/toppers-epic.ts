import {isActionOf} from "typesafe-actions";
import {of, from} from "rxjs";
import {Actions} from "../store/actions";
import {catchError, filter, map, switchMap} from "rxjs/operators";
import {RootEpic} from "./root-epic";


const toppersPageOpened: RootEpic = (action$, _, {}) =>
    action$.pipe(
        filter(isActionOf(Actions.toppers.toppersOpened)),
        switchMap((action) => {
            return  [Actions.toppers.toppersLoading.request(3), Actions.items.itemsLoading.request({})]
        })
    );

const toppersPageLoad: RootEpic = (action$, _, {filterService}) =>
    action$.pipe(
        filter(isActionOf(Actions.toppers.toppersLoading.request)),
        switchMap((action)=> from(filterService.getInfo(action.payload)).pipe(
            map(r=>Actions.toppers.toppersLoading.success(r)),
            catchError(x=> of(Actions.toppers.toppersLoading.failure(x)))
        ))
    );

export const toppersEpics = [
    toppersPageOpened,
    toppersPageLoad,
];