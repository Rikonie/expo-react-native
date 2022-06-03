import {combineReducers} from "redux";
import {Actions} from "./actions";
import {createReducer} from "typesafe-actions";


const setStatus = createReducer<any>(null)
    .handleAction(Actions.setStatus.setStatusItem.success, (state: any, action: any) => {
        return "Успешно";
    })
    .handleAction(Actions.setStatus.setStatusItem.failure, (state: any, action: any) => {
        return "Ошибка"
    })
    .handleAction(Actions.setStatus.modalClosed, (state: any, action: any) => {
        return null
    });

export const setStatusReducer = () =>
    combineReducers({
        setStatus,
    });