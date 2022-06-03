import {RootState} from "../root/root";

export const tokenSelector = (state: RootState) => state.auth.authToken;
export const resultAuthSelector = (state: RootState) => state.auth.resultAuth;