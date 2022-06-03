import {createReducer} from "typesafe-actions";
import {Actions} from "./actions";
import {combineReducers} from "redux";

const itemGroupsInfo = createReducer<any>(null)
    .handleAction(Actions.itemGroups.itemGroupsLoading.success, (state:any, action:any) => {
        return action.payload;
    });

export const itemGroupsReducer = () =>
    combineReducers({
        itemGroupsInfo,
    });