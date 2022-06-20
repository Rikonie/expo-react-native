import * as React from 'react';
import {useAppDispatch} from "../store/app-dispatch";
import {useFocusEffect} from '@react-navigation/native';
import {Actions} from "../store/actions";
import {useSelector} from "react-redux";
import {anotherPageSelector} from "../selectors/another-page-selector";
import {itemsSelector} from "../selectors/items-selector";
import {PagesItemsListComponent} from "../components/PagesComponents";


export const Another = () => {

    const items: Item[] = useSelector(anotherPageSelector) as Item[];
    const infoItems: any = useSelector(itemsSelector);

    const dispatch = useAppDispatch();

    useFocusEffect(
        React.useCallback(() => {
            dispatch(Actions.another.anotherOpened());
        }, [dispatch])
    );

    return (
            <PagesItemsListComponent infoItems={infoItems} items={items} action={Actions.another.anotherOpened()}/>
    )
};

