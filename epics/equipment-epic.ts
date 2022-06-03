import {isActionOf} from "typesafe-actions";
import {of, from} from "rxjs";
import {Actions} from "../store/actions";
import {catchError, filter, map, switchMap} from "rxjs/operators";
import {RootEpic} from "./root-epic";


const equipmentPageOpened: RootEpic = (action$, _, {}) =>
    action$.pipe(
        filter(isActionOf(Actions.equipment.equipmentOpened)),
        switchMap((action) => {
            return  [Actions.equipment.equipmentLoading.request(2), Actions.items.itemsLoading.request({})]
        })
    );

const equipmentPageLoad: RootEpic = (action$, _, {filterService}) =>
    action$.pipe(
        filter(isActionOf(Actions.equipment.equipmentLoading.request)),
        switchMap((action)=> from(filterService.getInfo(action.payload)).pipe(
            map(r=>Actions.equipment.equipmentLoading.success(r)),
            catchError(x=> of(Actions.equipment.equipmentLoading.failure(x)))
        ))
    );

export const equipmentEpics = [
    equipmentPageOpened,
    equipmentPageLoad,
];