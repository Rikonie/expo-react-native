import {createReducer} from "typesafe-actions";
import {Actions} from "./actions";
import {combineReducers} from "redux";

const cushionsPageInfo = createReducer<any>(null)
    .handleAction(Actions.cushions.cushionsLoading.success, (state:any, action:any) => {
        return action.payload.items;
    });

export const cushionsReducer = () =>
    combineReducers({
        cushionsPageInfo,
     });