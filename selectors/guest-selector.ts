import {RootState} from "../root/root";

export const guestSelector = (state: RootState) => state.guestInfo.guestInfo;

export const guestNameSelector = (state: RootState) => state.guestInfo.guestInfoName;
export const dateEndSelector = (state: RootState) => state.guestInfo.guestEndDate;