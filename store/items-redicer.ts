import {createReducer} from "typesafe-actions";
import {Actions} from "./actions";
import {combineReducers} from "redux";

const itemsInfo = createReducer<any>(null)
    .handleAction(Actions.items.itemsLoading.success, (state:any, action:any) => {
        return action.payload;
    });

export const itemsReducer = () =>
    combineReducers({
        itemsInfo,
    });