import * as React from 'react';
import {useSelector} from "react-redux";
import {itemsSelector} from "../selectors/items-selector";
import {useAppDispatch} from "../store/app-dispatch";
import {Actions} from "../store/actions";
import {equipmentPageSelector} from "../selectors/equipment-selector";
import {useFocusEffect} from "@react-navigation/core";
import {PagesComponent} from "../components/pages-components";

export const Equipment =()=> {
    const items:any = useSelector(equipmentPageSelector);
    const infoItems:any = useSelector(itemsSelector);

    const dispatch = useAppDispatch();
    useFocusEffect(
        React.useCallback(() => {
            dispatch(Actions.equipment.equipmentOpened());
        }, [dispatch])
    );

    return (
        <PagesComponent infoItems={infoItems} items={items} action={Actions.equipment.equipmentOpened()}/>
    )
};