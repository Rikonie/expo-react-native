import {isActionOf} from "typesafe-actions";
import {of, from} from "rxjs";
import {Actions} from "../store/actions";
import {catchError, filter, map, switchMap} from "rxjs/operators";
import {RootEpic} from "./root-epic";


const anotherPageOpened: RootEpic = (action$, _, {}) =>
    action$.pipe(
        filter(isActionOf(Actions.another.anotherOpened)),
        switchMap((action) => {
            return  [Actions.another.anotherLoading.request(7), Actions.items.itemsLoading.request({})]
        })
    );

const anotherPageLoad: RootEpic = (action$, _, {filterService}) =>
    action$.pipe(
        filter(isActionOf(Actions.another.anotherLoading.request)),
        switchMap((action)=> from(filterService.getInfo(action.payload)).pipe(
            map(r=>Actions.another.anotherLoading.success(r)),
            catchError(x=> of(Actions.another.anotherLoading.failure(x)))
        ))
    );

export const filterEpics = [
    anotherPageOpened,
    anotherPageLoad,
];
