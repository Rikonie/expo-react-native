import {createReducer} from "typesafe-actions";
import {Actions} from "./actions";
import {combineReducers} from "redux";

const toppersPageInfo = createReducer<any>(null)
    .handleAction(Actions.toppers.toppersLoading.success, (state:any, action:any) => {
        return action.payload;
    });

export const toppersReducer = () =>
    combineReducers({
        toppersPageInfo,
    });