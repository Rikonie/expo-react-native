import {ActionType, createAction, createAsyncAction, StateType} from "typesafe-actions";
import {rootReducer} from "../root/root";
import {User} from "../models/user";
import {IssuedItem} from "../classes/issued-item";
import {SetStatus} from "../classes/set-status";

const chargesOpened = createAction('@@charges-opened')();
const anotherOpened = createAction('@@another-opened')();
const cushionsOpened = createAction('@@cushions-opened')();
const equipmentOpened = createAction('@@equipment-opened')();
const furnitureOpened = createAction('@@furniture-opened')();
const toppersOpened = createAction('@@toppers-opened')();
const newItemOpened = createAction('@@new-item-opened')();
const modalClosed = createAction('@@modal-closed')();
const exit = createAction('@@exit')();

const auth = createAsyncAction(
    '@@auth/request',
    '@@auth/success',
    '@@auth/failure'
)<User, string|null, Error>();

const newIssuedItem = createAsyncAction(
    '@@new-issued-item/request',
    '@@new-issued-item/success',
    '@@new-issued-item/failure'
)<IssuedItem, string|null, Error>();

const setStatusItem = createAsyncAction(
    '@@set-status-item/request',
    '@@set-status-item/success',
    '@@set-status-item/failure'
)<SetStatus, string|null, Error>();

const chargesLoading = createAsyncAction(
    '@@charges-loading/request',
    '@@charges-loading/success',
    '@@charges-loading/failure'
)<number, any, Error>();

const itemGroupsLoading = createAsyncAction(
    '@@itemGroups-loading/request',
    '@@itemGroups-loading/success',
    '@@itemGroups-loading/failure'
)<{}, any, Error>();

const roomNumbersLoading = createAsyncAction(
    '@@roomNumbers-loading/request',
    '@@roomNumbers-loading/success',
    '@@roomNumbers-loading/failure'
)<{}, any, Error>();

const filterLoading = createAsyncAction(
    '@@filter-loading/request',
    '@@filter-loading/success',
    '@@filter-loading/failure'
)<number, any, Error>();

const anotherLoading = createAsyncAction(
    '@@another-loading/request',
    '@@another-loading/success',
    '@@another-loading/failure'
)<number, any, Error>();

const equipmentLoading = createAsyncAction(
    '@@equipment-loading/request',
    '@@equipment-loading/success',
    '@@equipment-loading/failure'
)<number, any, Error>();

const furnitureLoading = createAsyncAction(
    '@@furniture-loading/request',
    '@@furniture-loading/success',
    '@@furniture-loading/failure'
)<number, any, Error>();

const toppersLoading = createAsyncAction(
    '@@toppers-loading/request',
    '@@toppers-loading/success',
    '@@toppers-loading/failure'
)<number, any, Error>();

const cushionsLoading = createAsyncAction(
    '@@cushions-loading/request',
    '@@cushions-loading/success',
    '@@cushions-loading/failure'
)<number, any, Error>();

const itemsLoading = createAsyncAction(
    '@@items-loading/request',
    '@@items-loading/success',
    '@@items-loading/failure'
)<{}, any, Error>();

const loadGuest = createAsyncAction(
    '@@load-guest/request',
    '@@load-guest/success',
    '@@load-guest/failure'
)<string, any, Error>();

const updateGuest = createAction('@@update-guest')<string>();
const updateDateEnd = createAction('@@update-date')<Date>();


export const Actions = {
    auth: {
        auth,
        exit
    },
    charges: {
        chargesOpened,
        chargesLoading
    },
    itemGroups: {
        itemGroupsLoading
    },
    roomNumbers:{
        roomNumbersLoading
    },
    another:{
        anotherOpened,
        anotherLoading
    },
    filter:{
        filterLoading
    },
    items:{
        newItemOpened,
        itemsLoading
    },
    cushions:{
        cushionsOpened,
        cushionsLoading
    },
    toppers:{
        toppersOpened,
        toppersLoading
    },
    furniture:{
        furnitureOpened,
        furnitureLoading
    },
    equipment:{
        equipmentOpened,
        equipmentLoading
    },
    newIssuedItem: {
        newIssuedItem
    },
    setStatus: {
        setStatusItem,
        modalClosed
    },
    loadGuest :{
        loadGuest,
        updateGuest,
        updateDateEnd
    }
};

export type RootState = StateType<ReturnType<typeof rootReducer>>;
export type RootAction = ActionType<typeof Actions>;