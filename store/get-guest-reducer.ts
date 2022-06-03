import {createReducer} from "typesafe-actions";
import {Actions} from "./actions";
import {combineReducers} from "redux";

const guestInfo = createReducer<any>(null)
    .handleAction(Actions.loadGuest.loadGuest.success, (state:any, action:any) => {
        return action.payload;
    });

const guestInfoName = createReducer<string|null>("")
    .handleAction(Actions.loadGuest.updateGuest, (state:any, action:any) => {
        return action.payload;
    })
    .handleAction(Actions.loadGuest.loadGuest.success, (state:any, action:any) => {
        return action.payload?.guest ? action.payload?.guest :"";
    });

const guestEndDate = createReducer<any>(null)
    .handleAction(Actions.loadGuest.updateDateEnd, (state:any, action:any) => {
        return action.payload;
    })
    .handleAction(Actions.loadGuest.loadGuest.success, (state:any, action:any) => {
        return action.payload?.end ? action.payload?.end : null;
    });

export const guestReducer = () =>
    combineReducers({
        guestInfo,
        guestInfoName,
        guestEndDate
    });