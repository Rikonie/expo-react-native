import {combineEpics} from "redux-observable";
import {authEpics} from "./auth-epic";
import {chargesEpics} from "./charges-epic";
import {itemGroupsEpics} from "./items-groups-epic";
import {roomNumbersEpics} from "./room-numbers-epic";
import {filterEpics} from "./another-page-epic";
import {itemsEpics} from "./items-epic";
import {cushionsEpics} from "./cushions-epic";
import {equipmentEpics} from "./equipment-epic";
import {toppersEpics} from "./toppers-epic";
import {furnitureEpics} from "./furniture-epic";
import {newItemEpics} from "./new-issued-item";
import {statusEpics} from "./set-status-epic";
import {getGuestEpics} from "./get-guest-epic";

export const rootEpics = () =>
    combineEpics(
        ...authEpics,
        ...chargesEpics,
        ...itemGroupsEpics,
        ...roomNumbersEpics,
        ...filterEpics,
        ...itemsEpics,
        ...cushionsEpics,
        ...equipmentEpics,
        ...toppersEpics,
        ...furnitureEpics,
        ...newItemEpics,
        ...statusEpics,
        ...getGuestEpics
    );