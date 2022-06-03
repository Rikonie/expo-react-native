import {Store, createStore, applyMiddleware} from "redux";
import {RootAction, rootReducer, RootState} from "./root";
import {HttpClient} from "../services/api/http-client";
import {Services} from "../services/services";
import {createEpicMiddleware} from "redux-observable";
import {rootEpics} from "../epics/epics";
import {AuthService} from "../services/auth-service";
import {ChargesService} from "../services/charges-service";
import {ItemGroupsService} from "../services/item-groups-service";
import {RoomNumbersService} from "../services/room-numbers-service";
import {FilterService} from "../services/filter-service";
import {ItemsService} from "../services/items-service";
import {NewItemService} from "../services/new-issued-item-service";
import {SetStatusService} from "../services/set-status-service";
import {GetGuestService} from "../services/get-guest-service";

export interface RootConfig {
    store: Store<RootState, RootAction>;
}

export function configureRoot(): RootConfig {
    const httpClient = new HttpClient("");
    const authService = new AuthService(httpClient);
    const chargesService = new ChargesService(httpClient);
    const itemGroupsService = new ItemGroupsService(httpClient);
    const roomNumbersService = new RoomNumbersService(httpClient);
    const filterService = new FilterService(httpClient);
    const itemsService = new ItemsService(httpClient);
    const newItemService = new NewItemService(httpClient);
    const setStatusService = new SetStatusService(httpClient);
    const getGuestService = new GetGuestService(httpClient);

    const epicMiddleware = createEpicMiddleware<RootAction,
        RootAction,
        RootState,
        Services>({
        dependencies: {
            httpClient: httpClient,
            authService: authService,
            chargesService: chargesService,
            itemGroupsService: itemGroupsService,
            roomNumbersService: roomNumbersService,
            filterService: filterService,
            itemsService: itemsService,
            newItemService: newItemService,
            setStatusService: setStatusService,
            getGuestService: getGuestService
        }
    });
    const store = createStore<RootState, RootAction, unknown, unknown>(
        rootReducer(),
        {},
        applyMiddleware(epicMiddleware)
    );
    epicMiddleware.run(rootEpics());
    return {store};
}

