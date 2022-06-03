import {createReducer} from "typesafe-actions";
import {Actions} from "./actions";
import {combineReducers} from "redux";

const furniturePageInfo = createReducer<any>(null)
    .handleAction(Actions.furniture.furnitureLoading.success, (state:any, action:any) => {
        return action.payload;
    });

export const furnitureReducer = () =>
    combineReducers({
        furniturePageInfo,
    });