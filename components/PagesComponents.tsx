import {Button, DatePickerAndroid, Modal, Picker, SafeAreaView, ScrollView, Text, View} from "react-native";
import {styles} from "./styles";
import {GetRoomById} from "../dictionaries/rooms-dictionary";
import {GetStatusById, GetStatusByTitle, statusesDictionary} from "../dictionaries/statuses-dictionary";
import React, {useState} from "react";
import {TextInput} from "react-native-gesture-handler";
import {GetItemGroupById} from "../dictionaries/item-groups-dictionary";
import {Actions} from "../store/actions";
import {useAppDispatch} from "../store/app-dispatch";
import {SetStatus} from "../types/set-status";
import {useSelector} from "react-redux";
import {setStatusSelector} from "../selectors/set-status-selector";
import {MonthDictionary} from "../dictionaries/month";


interface PageComponentProps {
    infoItems: any;
    items: any;
    action: any;
}

export const PagesItemsListComponent: React.FC<PageComponentProps> = ({infoItems, items, action}) => {

    const dispatch = useAppDispatch();

    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const [item, setItem] = useState<Item>();
    const [statusId, setStatusId] = useState<string>();
    const [requestDate, setRequestDate] = useState<Date | string>("Не выбрано");
    const [departureDate, setDepartureDate] = useState<Date | string>("Не выбрано");

    const getItemById = (id: number) => {

        let res = infoItems?.find((a: ItemListRow) => a.id == id);
        return !!res ? res.title : 'unknown';

    };

    const onPress = (i?: Item) => {

        if (!isOpenModal) {
            setIsOpenModal(true);
            setItem(i)
        } else {
            setIsOpenModal(false);
            setStatusId('');
            dispatch(action);
            dispatch(Actions.setStatus.modalClosed());
        }

    };

    const notChosen = "Не выбрано";

    const postRequest = (id_room: string, id_status: string, id: string, dt_query: Date | string, dt_depart: Date | string) => {

        let setStatusRequest: SetStatus;
        if (dt_query == notChosen && dt_depart == notChosen) {
            setStatusRequest = {id_room: id_room, id_status: id_status, id: id};
        } else {
            setStatusRequest = {
                id_room: id_room,
                id_status: id_status,
                id: id,
                dt_query: dt_query as Date,
                dt_depart: dt_depart as Date
            }
        }
        dispatch(Actions.setStatus.setStatusItem.request(setStatusRequest));

    };

    const result = useSelector(setStatusSelector);

    const getDate = (i: any) => {

        if (i) {
            let my = new Date(i.dt.replace(' ', 'T'));
            let day = my.getDate();
            let month = MonthDictionary[(my.getMonth())];
            let year = my.getFullYear();
            return `${day} ${month} ${year}`
        }

    };

    const handleOpenPickerRequestDate = () => {
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
    };

    const handleOpenPickerDepartureDate = () => {
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
    };


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.header}>Выданные предметы</Text>
                {items ?
                    items?.map((i: Item) => {

                        const roomById = GetRoomById(Number(item?.id_room));
                        const itemGroupById = GetItemGroupById(Number(item?.id_group));
                        const {id} = i;
                        const extension: string = "Продление / переезд";
                        const disabled = (data: string) => {
                            return statusId == data
                        };
                        const displayDate = (date:Date) =>{
                            return`${(date).getDate()} ${MonthDictionary[((date).getMonth())]} ${(date).getFullYear()}`
                        };

                        return (
                            <Text key={id} style={styles.items} onPress={() => {
                                onPress(i);
                            }}>
                                <Text>{getDate(i)}, {GetRoomById(Number(i.id_room))} ({GetStatusById(Number(i.id_status))}){"\n"}</Text>
                                <Text>{i.fio}, {getItemById(Number(i.id_item))}</Text>
                                <Modal onDismiss={() => dispatch(Actions.setStatus.modalClosed())}
                                       animationType={"slide"}
                                       transparent={false}
                                       visible={isOpenModal}
                                >
                                    <ScrollView>
                                        <Text style={styles.buttonOnBack}>
                                            <Button title={"Назад"} onPress={() => onPress()}/></Text>
                                        <SafeAreaView style={styles.containerForNewItem}>
                                            <Text style={styles.headerForNewItem}>Изменение выданного
                                                предмета</Text>
                                            <View style={styles.view}>
                                                <Text style={styles.text}>Номер:</Text>
                                                <Picker selectedValue={roomById}
                                                        enabled={false}>
                                                    <Picker.Item label={roomById}
                                                                 value={roomById}
                                                                 key={id}/>
                                                </Picker>
                                                <Text style={styles.text}>Гость:</Text>
                                                <TextInput style={styles.input}
                                                           defaultValue={item?.fio}
                                                           editable={false}
                                                           selectTextOnFocus={false}
                                                />
                                                <Text style={styles.text}>Группа:</Text>
                                                <Picker selectedValue={itemGroupById}
                                                        enabled={false}>
                                                    <Picker.Item label={itemGroupById}
                                                                 value={itemGroupById}
                                                                 key={id}/>
                                                </Picker>
                                                <Text style={styles.text}>Наименование:</Text>
                                                <Picker selectedValue={getItemById(Number(item?.id_item))}
                                                        enabled={false}>
                                                    <Picker.Item label={getItemById(Number(item?.id_item))}
                                                                 value={getItemById(Number(item?.id_item))}
                                                                 key={id}/>
                                                </Picker>
                                                <Text style={styles.text}>Количество:</Text>
                                                <TextInput style={styles.input}
                                                           defaultValue={item?.quantity}
                                                           editable={false}
                                                           selectTextOnFocus={false}
                                                />
                                                <Text style={styles.text}>
                                                    Дата запроса: {disabled(extension) ?
                                                    requestDate == notChosen ?
                                                        notChosen :
                                                        displayDate(requestDate as Date)
                                                    :  displayDate(new Date(item?.dt_query.replace(' ', 'T')))}</Text>
                                                <Button onPress={handleOpenPickerRequestDate} title='Выбор даты'
                                                        disabled={!disabled(extension)}/>
                                                <Text style={styles.text}>
                                                    Дата выезда: {disabled(extension) ?
                                                    departureDate == notChosen ?
                                                        notChosen :
                                                        displayDate(departureDate as Date)
                                                    : displayDate(new Date(item?.dt_depart.replace(' ', 'T')))} </Text>
                                                <Button onPress={handleOpenPickerDepartureDate} title='Выбор даты'
                                                        disabled={!disabled(extension)}/>
                                                <Text style={styles.text}>Статус:</Text>
                                                <Picker selectedValue={GetStatusById(item?.id_status)}
                                                        onValueChange={setStatusId}>
                                                    {statusesDictionary?.map((i: any) => {
                                                        const {id} = i;
                                                        const {title} = i;
                                                        return (
                                                            <Picker.Item label={title} value={title}
                                                                         key={id}/>)
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
                                                        disabled={disabled("")}
                                                        title='Сохранить'/>
                                                <Text style={styles.result}> {result} </Text>
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