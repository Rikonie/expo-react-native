import {createReducer} from "typesafe-actions";
import {Actions} from "./actions";
import {combineReducers} from "redux";

const roomNumbersInfo = createReducer<any>(null)
    .handleAction(Actions.roomNumbers.roomNumbersLoading.success, (state:any, action:any) => {
        return action.payload;
    });

export const roomNumbersReducer = () =>
    combineReducers({
        roomNumbersInfo,
    });