import {createReducer} from "typesafe-actions";
import {Actions} from "./actions";
import {combineReducers} from "redux";

const anotherPageInfo = createReducer<any>(null)
    .handleAction(Actions.another.anotherLoading.success, (state:any, action:any) => {
        return action.payload;
    });

export const anotherReducer = () =>
    combineReducers({
        anotherPageInfo,
    });