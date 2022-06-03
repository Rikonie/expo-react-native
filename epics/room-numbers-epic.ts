import {isActionOf} from "typesafe-actions";
import {of, from} from "rxjs";
import {Actions} from "../store/actions";
import {catchError, filter, map, switchMap} from "rxjs/operators";
import {RootEpic} from "./root-epic";


const roomNumbersPageOpened: RootEpic = (action$, _, {}) =>
    action$.pipe(
        filter(isActionOf(Actions.charges.chargesOpened)),
        map((action) => {
            return  Actions.roomNumbers.roomNumbersLoading.request({})
        })
    );

const roomNumbersPageLoad: RootEpic = (action$, _, {roomNumbersService}) =>
    action$.pipe(
        filter(isActionOf(Actions.roomNumbers.roomNumbersLoading.request)),
        switchMap((action)=> from(roomNumbersService.getInfoRoomNumber()).pipe(
            map(r=>Actions.roomNumbers.roomNumbersLoading.success(r)),
            catchError(x=> of(Actions.roomNumbers.roomNumbersLoading.failure(x)))
        ))
    );

export const roomNumbersEpics = [
    roomNumbersPageOpened,
    roomNumbersPageLoad
];