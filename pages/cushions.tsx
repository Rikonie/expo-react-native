import * as React from 'react';
import {useSelector} from "react-redux";
import {itemsSelector} from "../selectors/items-selector";
import {useAppDispatch} from "../store/app-dispatch";
import {Actions} from "../store/actions";
import {cushionsPageSelector} from "../selectors/cushions-page-selector";
import {useFocusEffect} from "@react-navigation/core";
import {PagesComponent} from "../components/pages-components";

export const Cushions =()=> {

    const items:any = useSelector(cushionsPageSelector);
    const infoItems:any = useSelector(itemsSelector);

    const dispatch = useAppDispatch();
    useFocusEffect(
        React.useCallback(() => {
            dispatch(Actions.cushions.cushionsOpened());
        }, [dispatch])
    );

    return (
        <PagesComponent infoItems={infoItems} items={items} action={Actions.cushions.cushionsOpened()}/>
    )
};