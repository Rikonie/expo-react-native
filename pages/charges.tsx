import * as React from 'react';
import {useSelector} from "react-redux";
import {chargesSelector} from "../selectors/charges-selector";
import {useAppDispatch} from "../store/app-dispatch";
import {Actions} from "../store/actions";
import {itemsSelector} from "../selectors/items-selector";
import {useFocusEffect} from "@react-navigation/core";
import {PagesComponent} from "../components/pages-components";

export const Charges = () => {

    const items: any = useSelector(chargesSelector);
    const infoItems: any = useSelector(itemsSelector);

    const dispatch = useAppDispatch();

    useFocusEffect(
        React.useCallback(() => {
            dispatch(Actions.charges.chargesOpened());
        }, [dispatch])
    );

    return (
        <PagesComponent infoItems={infoItems} items={items} action={Actions.charges.chargesOpened()}/>
    )
};

