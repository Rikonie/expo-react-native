import {RootEpic} from "./root-epic";
import {catchError, filter, ignoreElements, switchMap, tap} from "rxjs/operators";
import {isActionOf} from "typesafe-actions";
import {Actions} from "../store/actions";
import {of, from, map} from "rxjs";

const newItemRequestEpic: RootEpic = (action$, _, {newItemService}) =>
    action$.pipe(
        filter(isActionOf(Actions.newIssuedItem.newIssuedItem.request)),
        switchMap(
            (action) => from(newItemService.issuedItem(action.payload)).pipe(
                map(r => Actions.newIssuedItem.newIssuedItem.success(r)),
                catchError(x=> of(Actions.newIssuedItem.newIssuedItem.failure(x))
                )))
    );

export const newItemEpics = [
    newItemRequestEpic
    ];