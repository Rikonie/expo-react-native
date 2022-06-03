import {combineReducers} from "redux";
import {ActionType, StateType} from "typesafe-actions";
import {Actions} from "../store/actions";
import {authReducer} from "../store/auth-reducet";
import {chargesReducer} from "../store/charges-reducer";
import {itemGroupsReducer} from "../store/item-groups-reducer";
import {roomNumbersReducer} from "../store/room-numbers-reducer";
import {anotherReducer} from "../store/another-page-reducer";
import {itemsReducer} from "../store/items-redicer";
import {cushionsReducer} from "../store/cushions-reducer";
import {equipmentReducer} from "../store/equipment-reducer";
import {furnitureReducer} from "../store/furniture-reducer";
import {toppersReducer} from "../store/toppers-reducer";
import {issuedNewItemReducer} from "../store/new-item-reducer";
import {setStatusReducer} from "../store/set-status-reducer";
import {guestReducer} from "../store/get-guest-reducer";

export const rootReducer = () =>
    combineReducers({
        auth: authReducer(),
        charges: chargesReducer(),
        itemGroups: itemGroupsReducer(),
        roomNumbers: roomNumbersReducer(),
        anotherPage: anotherReducer(),
        items: itemsReducer(),
        cushionsPage: cushionsReducer(),
        equipmentPage: equipmentReducer(),
        furniturePage: furnitureReducer(),
        toppersPage: toppersReducer(),
        issuedNewItem: issuedNewItemReducer(),
        setStatus: setStatusReducer(),
        guestInfo: guestReducer()
    });

export type RootState = StateType<ReturnType<typeof rootReducer>>;
export type RootAction = ActionType<typeof Actions>;