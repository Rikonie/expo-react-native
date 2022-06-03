import {isActionOf} from "typesafe-actions";
import {of, from} from "rxjs";
import {Actions} from "../store/actions";
import {catchError, filter, map, switchMap} from "rxjs/operators";
import {RootEpic} from "./root-epic";


const furniturePageOpened: RootEpic = (action$, _, {}) =>
    action$.pipe(
        filter(isActionOf(Actions.furniture.furnitureOpened)),
        switchMap((action) => {
            return  [Actions.furniture.furnitureLoading.request(6), Actions.items.itemsLoading.request({})]
        })
    );

const furniturePageLoad: RootEpic = (action$, _, {filterService}) =>
    action$.pipe(
        filter(isActionOf(Actions.furniture.furnitureLoading.request)),
        switchMap((action)=> from(filterService.getInfo(action.payload)).pipe(
            map(r=>Actions.furniture.furnitureLoading.success(r)),
            catchError(x=> of(Actions.furniture.furnitureLoading.failure(x)))
        ))
    );

export const furnitureEpics = [
    furniturePageOpened,
    furniturePageLoad,
];