import {Button, DatePickerAndroid, Modal, Picker, SafeAreaView, ScrollView, Text, View} from "react-native";
import {styles} from "./styles";
import {GetRoomById} from "../dictionaries/rooms-dictionary";
import {GetStatusById, GetStatusByTitle, statusesDictionary} from "../dictionaries/statuses-dictionary";
import * as React from "react";
import {useState} from "react";
import {TextInput} from "react-native-gesture-handler";
import {GetItemGroupById} from "../dictionaries/item-groups-dictionary";
import {Actions} from "../store/actions";
import {useAppDispatch} from "../store/app-dispatch";
import {SetStatus} from "../classes/set-status";
import {GetMonthById} from "../dictionaries/month";
import {useSelector} from "react-redux";
import {setStatusSelector} from "../selectors/set-status-selector";


class PageComponentProps {
    infoItems: any;
    items: any;
    action: any;
}

export const PagesComponent: React.FC<PageComponentProps> = ({infoItems, items, action}) => {

    const dispatch = useAppDispatch();

    const [openModal, setOpenModal] = useState<boolean>(false);
    const [item, setItem] = useState<Item>();
    const [statusId, setStatusId] = useState<string>();
    const [requestDate, setRequestDate] = useState<Date | string>("Не выбрано");
    const [departureDate, setDepartureDate] = useState<Date | string>("Не выбрано");

    const GetItemById = (id: number) => {
        let res = infoItems?.find((a: ItemListRow) => a.id == id);
        return !!res ? res.title : 'unknown';
    };
    const onPress = (i?: Item) => {
        if (!openModal) {
            setOpenModal(true);
            setItem(i)
        } else {
            setOpenModal(false);
            setStatusId('');
            dispatch(action);
            dispatch(Actions.setStatus.modalClosed());
        }
    };

    const postRequest = (id_room: string, id_status: string, id: string, dt_query: Date | string, dt_depart: Date | string) => {

        let setStatusRequest: SetStatus;
        if (dt_query == "Не выбрано" && dt_depart == "Не выбрано") {
            setStatusRequest = new SetStatus(id_room, id_status, id);
        } else {
            setStatusRequest = new SetStatus(id_room, id_status, id, dt_query as Date, dt_depart as Date)
        }
        dispatch(Actions.setStatus.setStatusItem.request(setStatusRequest));
        console.log(setStatusRequest)
    };

    let result = useSelector(setStatusSelector);

    const getDate = (i:any) =>{
        if (i)
       { let my = new Date(i.dt.replace(' ', 'T'));
           let day = my.getDate();
        let month = GetMonthById(my.getMonth());
        let year = my.getFullYear();
        return day +" "+ month+ " "+ year}
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.header}>Выданные предметы</Text>
                {items ?
                    items?.items?.map((i: Item, key: number) => {
                        return (
                            <Text key={key} style={styles.items} onPress={() => {
                                onPress(i);
                                console.log(i)
                            }}>
                                <Text>{getDate(i)}, {GetRoomById(Number(i.id_room))} ({GetStatusById(Number(i.id_status))}){"\n"}</Text>
                                <Text>{i.fio}, {GetItemById(Number(i.id_item))}</Text>
                                <Modal onDismiss={()=>dispatch(Actions.setStatus.modalClosed())}
                                    animationType={"slide"}
                                    transparent={false}
                                    visible={openModal}
                                >
                                    <ScrollView>
                                        <Text style={styles.buttonOnBack}>
                                            <Button title={"Назад"} onPress={() => onPress()}/></Text>
                                        <SafeAreaView style={styles.containerForNewItem}>
                                            <Text style={styles.headerForNewItem}>Изменение выданного
                                                предмета</Text>
                                            <View style={styles.view}>
                                                <Text style={styles.text}>Номер:</Text>
                                                <Picker selectedValue={GetRoomById(Number(item?.id_room))}
                                                        enabled={false}>
                                                    <Picker.Item label={GetRoomById(Number(item?.id_room))}
                                                                 value={GetRoomById(Number(item?.id_room))}
                                                                 key={key}/>
                                                </Picker>
                                                <Text style={styles.text}>Гость:</Text>
                                                <TextInput style={styles.input}
                                                           defaultValue={item?.fio}
                                                           editable={false}
                                                           selectTextOnFocus={false}
                                                />
                                                <Text style={styles.text}>Группа:</Text>
                                                <Picker selectedValue={GetItemGroupById(Number(item?.id_group))}
                                                        enabled={false}>
                                                    <Picker.Item label={GetItemGroupById(Number(item?.id_group))}
                                                                 value={GetItemGroupById(Number(item?.id_group))}
                                                                 key={key}/>
                                                </Picker>
                                                <Text style={styles.text}>Наименование:</Text>
                                                <Picker selectedValue={GetItemById(Number(item?.id_item))}
                                                        enabled={false}>
                                                    <Picker.Item label={GetItemById(Number(item?.id_item))}
                                                                 value={GetItemById(Number(item?.id_item))}
                                                                 key={key}/>
                                                </Picker>
                                                <Text style={styles.text}>Количество:</Text>
                                                <TextInput style={styles.input}
                                                           defaultValue={item?.quantity}
                                                           editable={false}
                                                           selectTextOnFocus={false}
                                                />
                                                <Text style={styles.text}>
                                                    Дата запроса: {statusId == "Продление / переезд" ?
                                                    requestDate == "Не выбрано" ?
                                                        "Не выбрано" :
                                                        (requestDate as Date).getDate() + " " +
                                                        GetMonthById((requestDate as Date).getMonth()) + " " +
                                                        (requestDate as Date).getFullYear()
                                                    : item?.dt_query}</Text>
                                                <Button onPress={() => {
                                                    try {
                                                        DatePickerAndroid.open({date: new Date()})
                                                            .then(function (date) {
                                                                if (date.action !== DatePickerAndroid.dismissedAction) {
                                                                    let newDate = new Date(date.year, date.month, date.day);
                                                                    setRequestDate(newDate);
                                                                }
                                                            });
                                                    } catch ({code, message}) {
                                                        console.warn('Cannot open date picker', message);
                                                    }
                                                }} title='Выбор даты'
                                                        disabled={statusId !== "Продление / переезд"}/>
                                                <Text style={styles.text}>
                                                    Дата выезда: {statusId == "Продление / переезд" ?
                                                    departureDate == "Не выбрано" ?
                                                        "Не выбрано" :
                                                        (departureDate as Date).getDate() + " " +
                                                        GetMonthById((departureDate as Date).getMonth()) + " " +
                                                        (departureDate as Date).getFullYear()
                                                    : item?.dt_depart} </Text>
                                                <Button onPress={() => {
                                                    try {
                                                        DatePickerAndroid.open({date: new Date()})
                                                            .then(function (date) {
                                                                if (date.action !== DatePickerAndroid.dismissedAction) {
                                                                    let newDate = new Date(date.year, date.month, date.day);
                                                                    setDepartureDate(newDate);
                                                                }
                                                            });
                                                    } catch ({code, message}) {
                                                        console.warn('Cannot open date picker', message);
                                                    }
                                                }} title='Выбор даты'
                                                        disabled={statusId !== "Продление / переезд"}/>
                                                <Text style={styles.text}>Статус:</Text>
                                                <Picker selectedValue={GetStatusById(item?.id_status)}
                                                        onValueChange={(value) => setStatusId(value)}>
                                                    {statusesDictionary?.map((i: any, key: number) => {
                                                        return (
                                                            <Picker.Item label={i.title} value={i.title}
                                                                         key={key}/>)
                                                    })}
                                                </Picker>
                                                <Text style={styles.text}>Примечание:</Text>
                                                <TextInput style={styles.input}
                                                           defaultValue={item?.descr}
                                                           editable={false}
                                                           selectTextOnFocus={false}
                                                />
                                                <Button onPress={() => postRequest(item?.id_room as string,
                                                    GetStatusByTitle(statusId as string) as string,
                                                    item?.id as string,
                                                    requestDate,
                                                    departureDate)}
                                                    disabled={statusId == ""}
                                                        title='Сохранить'/>
                                                <Text style={styles.result}> {result ? result : ""} </Text>
                                            </View>
                                        </SafeAreaView>
                                    </ScrollView>
                                </Modal>
                            </Text>
                        )
                    })
                    : null}
            </ScrollView>
        </SafeAreaView>
    )
};