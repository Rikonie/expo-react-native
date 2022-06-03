import * as React from 'react';
import {useSelector} from "react-redux";
import {itemsSelector} from "../selectors/items-selector";
import {useAppDispatch} from "../store/app-dispatch";
import {Actions} from "../store/actions";
import {toppersPageSelector} from "../selectors/toppers-selector";
import {useFocusEffect} from "@react-navigation/core";
import {PagesComponent} from "../components/pages-components";


export const Toppers =()=> {
    const items:any = useSelector(toppersPageSelector);
    const infoItems:any = useSelector(itemsSelector);

    const dispatch = useAppDispatch();
    useFocusEffect(
        React.useCallback(() => {
            dispatch(Actions.toppers.toppersOpened());
        }, [dispatch])
    );

    return (
        <PagesComponent infoItems={infoItems} items={items} action={Actions.toppers.toppersOpened()}/>
    )
};