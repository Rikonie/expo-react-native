import {createReducer} from "typesafe-actions";
import {Actions} from "./actions";
import {combineReducers} from "redux";

const chargesInfo = createReducer<any>(null)
    .handleAction(Actions.charges.chargesLoading.success, (state:any, action:any) => {
        return action.payload.items;
    });

export const chargesReducer = () =>
    combineReducers({
        chargesInfo,
    });