import {isActionOf} from "typesafe-actions";
import {of, from} from "rxjs";
import {Actions} from "../store/actions";
import {catchError, filter, map, switchMap} from "rxjs/operators";
import {RootEpic} from "./root-epic";


const newItemPageOpened: RootEpic = (action$, _, {}) =>
    action$.pipe(
        filter(isActionOf(Actions.items.newItemOpened)),
        map((action) => {
            return Actions.items.itemsLoading.request({})
        })
    );


const itemsLoad: RootEpic = (action$, _, {itemsService}) =>
    action$.pipe(
        filter(isActionOf(Actions.items.itemsLoading.request)),
        switchMap((action)=> from(itemsService.getInfoItems()).pipe(
            map(r=>Actions.items.itemsLoading.success(r)),
            catchError(x=> of(Actions.items.itemsLoading.failure(x)))
        ))
    );

export const itemsEpics = [
    newItemPageOpened,
    itemsLoad
];
