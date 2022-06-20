import * as React from "react";
import {Picker} from "react-native";
import {Items} from "../../types/items";

export interface NewItemProps {
    item?: Items[];
    selectedValue?: string;
    onChange?: (itemValue: any, itemIndex: any) => void;
    enabled?: boolean
}

export const SelectorForNewItemComponent: React.FC<NewItemProps> = ({item, selectedValue, onChange, enabled = true}) => {

    return (

        <>
            <Picker selectedValue={selectedValue}
                    onValueChange={onChange} enabled={enabled}>
                {enabled && <Picker.Item label={"Не выбрано"} value={""}/>}
                {item?.map((i: any) => {
                    const {id} = i;
                    return (
                        <Picker.Item label={i.title} value={i.id} key={id}/>)

                })}
            </Picker>
        </>
    );
};
