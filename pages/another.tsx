import * as React from 'react';
import {useAppDispatch} from "../store/app-dispatch";
import {useFocusEffect} from '@react-navigation/native';
import {Actions} from "../store/actions";
import {useSelector} from "react-redux";
import {anotherPageSelector} from "../selectors/another-page-selector";
import {itemsSelector} from "../selectors/items-selector";
import {PagesComponent} from "../components/pages-components";

export const Another = () => {

    const items: any = useSelector(anotherPageSelector);
    const infoItems: any = useSelector(itemsSelector);

    const dispatch = useAppDispatch();

    useFocusEffect(
        React.useCallback(() => {
            dispatch(Actions.another.anotherOpened());
            console.log('Another')
        }, [dispatch])
    );

    return (
            <PagesComponent infoItems={infoItems} items={items} action={Actions.another.anotherOpened()}/>
    )
};

