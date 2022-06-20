import * as React from 'react';
import {useSelector} from "react-redux";
import {itemsSelector} from "../selectors/items-selector";
import {useAppDispatch} from "../store/app-dispatch";
import {Actions} from "../store/actions";
import {toppersPageSelector} from "../selectors/toppers-selector";
import {useFocusEffect} from "@react-navigation/core";
import {PagesItemsListComponent} from "../components/PagesComponents";


export const Toppers =()=> {
    const items:Item[] = useSelector(toppersPageSelector) as Item[];
    const infoItems:any = useSelector(itemsSelector);

    const dispatch = useAppDispatch();
    useFocusEffect(
        React.useCallback(() => {
            dispatch(Actions.toppers.toppersOpened());
        }, [dispatch])
    );

    return (
        <PagesItemsListComponent infoItems={infoItems} items={items} action={Actions.toppers.toppersOpened()}/>
    )
};