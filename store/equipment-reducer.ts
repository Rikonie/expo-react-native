import {createReducer} from "typesafe-actions";
import {Actions} from "./actions";
import {combineReducers} from "redux";

const equipmentPageInfo = createReducer<any>(null)
    .handleAction(Actions.equipment.equipmentLoading.success, (state:any, action:any) => {
        return action.payload;
    });

export const equipmentReducer = () =>
    combineReducers({
        equipmentPageInfo,
    });