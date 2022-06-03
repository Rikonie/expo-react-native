import {RootAction, RootState} from "../root/root";
import {Services} from "../services/services";
import {Epic} from "redux-observable";

export type RootEpic = Epic<RootAction, RootAction, RootState, Services>;