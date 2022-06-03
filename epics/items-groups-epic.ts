import {of, from} from "rxjs";
import {Actions} from "../store/actions";
import {catchError, filter, map, switchMap} from "rxjs/operators";
import {RootEpic} from "./root-epic";
import {isActionOf} from "typesafe-actions";

const itemGroupsPageOpened: RootEpic = (action$, _, {}) =>
    action$.pipe(
        filter(isActionOf(Actions.charges.chargesOpened)),
        map((action) => {
            return  Actions.itemGroups.itemGroupsLoading.request({})
        })
    );

const itemGroupsPageLoad: RootEpic = (action$, _, {itemGroupsService}) =>
    action$.pipe(
        filter(isActionOf(Actions.itemGroups.itemGroupsLoading.request)),
        switchMap((action)=> from(itemGroupsService.getInfoItemGroups()).pipe(
            map(r=>Actions.itemGroups.itemGroupsLoading.success(r)),
            catchError(x=> of(Actions.itemGroups.itemGroupsLoading.failure(x)))
        ))
    );

export const itemGroupsEpics = [
    itemGroupsPageOpened,
    itemGroupsPageLoad
];
