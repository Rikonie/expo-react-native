import * as React from "react";
import {Picker} from "react-native";
import {Items} from "../../models/items";

export class NewItemProps {
    item?: Items[];
    selectedValue?: string;
    onChange?: (itemValue: any, itemIndex: any) => void;
    enabled?: boolean
}

export const SelectorComponent: React.FC<NewItemProps> = ({item, selectedValue, onChange, enabled = true}) => {

    if (enabled) {
    return (
        <>
            <Picker selectedValue={selectedValue}
                    onValueChange={onChange} enabled={enabled}>
                <Picker.Item label={"Не выбрано"} value={""} key={0} />
                {item?.map((i: any, key: number) => {
                    return (
                        <Picker.Item label={i.title} value={i.id} key={key} />)

                })}
            </Picker>
        </>
    );} else {
        return ( <>
            <Picker selectedValue={selectedValue}
                    onValueChange={onChange} enabled={enabled}>
                {item?.map((i: any, key: number) => {
                    return (
                        <Picker.Item label={i.title} value={i.id} key={key} />)
                })}
            </Picker>
        </>)
    }

};