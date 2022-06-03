import {createReducer} from "typesafe-actions";
import {Actions} from "./actions";
import {combineReducers} from "redux";

const issuedNewItem = createReducer<any>(null)
    .handleAction(Actions.newIssuedItem.newIssuedItem.success, (state: any, action: any) => {
        return "Успешно";
    })
    .handleAction(Actions.newIssuedItem.newIssuedItem.failure, (state: any, action: any) => {
        return "Ошибка"
    });

export const issuedNewItemReducer = () =>
    combineReducers({
        issuedNewItem,
    });