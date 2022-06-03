import {Dispatch} from "react";
import {RootAction} from "../root/root";
import {useDispatch} from "react-redux";

export const useAppDispatch = () => useDispatch<Dispatch<RootAction>>();