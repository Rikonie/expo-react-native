import {createReducer} from "typesafe-actions";
import {Actions} from "./actions";
import {combineReducers} from "redux";

const authToken = createReducer<string|null>(null)
    .handleAction(Actions.auth.auth.success, (state:string|null, action:any) => {
        return action.payload;
    });

const resultAuth = createReducer<string|null>(null)
    .handleAction(Actions.auth.auth.failure, (state:string|null, action:any) => {
        return "Неверный логин или пароль";
    })
    .handleAction(Actions.auth.exit, (state:string|null, action:any) => {
        return null;
    });


export const authReducer = () =>
    combineReducers({
        authToken,
        resultAuth
    });