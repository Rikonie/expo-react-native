import * as React from 'react';
import {useSelector} from "react-redux";
import {itemsSelector} from "../selectors/items-selector";
import {useAppDispatch} from "../store/app-dispatch";
import {Actions} from "../store/actions";
import {furniturePageSelector} from "../selectors/furniture-selector";
import {useFocusEffect} from "@react-navigation/core";
import {PagesItemsListComponent} from "../components/PagesComponents";


export const Furniture =()=> {

    const items:Item[] = useSelector(furniturePageSelector) as Item[];
    const infoItems:any = useSelector(itemsSelector);

    const dispatch = useAppDispatch();
    useFocusEffect(
        React.useCallback(() => {
            dispatch(Actions.furniture.furnitureOpened());
        }, [dispatch])
    );

    return (
        <PagesItemsListComponent infoItems={infoItems} items={items} action={Actions.furniture.furnitureOpened()}/>
    )
};