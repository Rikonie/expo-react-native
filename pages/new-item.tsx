import * as React from 'react';
import {Button, DatePickerAndroid, Picker, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {useState} from "react";
import {SelectorComponent} from "../components/new-item-page/new-item-page-component";
import {TextInput} from "react-native-gesture-handler";
import {roomsDictionary} from "../dictionaries/rooms-dictionary";
import {itemGroupsDictionary} from "../dictionaries/item-groups-dictionary";
import {useFocusEffect} from "@react-navigation/core";
import {Actions} from "../store/actions";
import {useAppDispatch} from "../store/app-dispatch";
import {useSelector} from "react-redux";
import {itemsSelector} from "../selectors/items-selector";
import {statusesDictionary} from "../dictionaries/statuses-dictionary";
import {styles} from "../components/styles";
import {GetMonthById} from "../dictionaries/month";
import {IssuedItem} from "../classes/issued-item";
import {issuedItemSelector} from "../selectors/issued-item-selector";
import {dateEndSelector, guestNameSelector} from "../selectors/guest-selector";

export const NewItem = () => {

    const items: any = useSelector(itemsSelector);
    const result = useSelector(issuedItemSelector);

    const [room, setRoom] = useState<string>('');
    const [requestDate, setRequestDate] = useState<any>(new Date());
    const [note, setNote] = useState<string>('');
    const [group, setGroup] = useState<string>("");
    const [itemName, setItemName] = useState<string>('');
    const [num, setNum] = useState<any>("");
    const [status, setStatus] = useState<string>('Выдано');

    const dispatch = useAppDispatch();

    useFocusEffect(
        React.useCallback(() => {
            dispatch(Actions.items.newItemOpened());
        }, [dispatch])
    );

    let itemsForSelector: ItemListRow[] = items?.filter((a: any) => a.id_group == group);

    function inputChangeForNum(text: any) {
        let numbers = '0123456789';
        if (numbers.includes(text.slice(-1))) setNum(text);
        else setNum(text.slice(0, -1))
    }

    let requestMonth = GetMonthById(requestDate.getMonth());
    let departureDate: Date = new Date();
    let guest: string =  (useSelector(guestNameSelector) as string);

    const postRequest = () => {
        let issuedItem = new IssuedItem(room, guest, group, itemName, num, requestDate, departureDate, note);
        dispatch(Actions.newIssuedItem.newIssuedItem.request(issuedItem));
        console.log(issuedItem)
    };

    const date: any = useSelector(dateEndSelector);

    const getGuestName = () =>{
        if (guest){
            console.log(guest);
             let guestArr = guest.split(" ");
            guest = guestArr[0]+" "+ guestArr[1];
        } else {
            guest=""
        }
    };

    getGuestName();

    const getDepartureDate = () => {
        if (date !== null) {
            console.log("Data"+date);
            departureDate = new Date((date as string).replace(' ', 'T'))
        } else {
            departureDate = new Date();
        }
    };
    getDepartureDate();

    let departureMonth = GetMonthById(departureDate.getMonth());

    const selectedRoom = (value: any) => {
        dispatch(Actions.loadGuest.loadGuest.request(value));
        setRoom(value);
    };

    return (
        <ScrollView>
            <SafeAreaView style={styles.containerForNewItem}>
                <Text style={styles.headerForNewItem}>Выдача нового предмета</Text>
                <View style={styles.view}>
                    <Text style={styles.text}>Номер:</Text>
                    <Picker selectedValue={room}
                            onValueChange={selectedRoom}>
                        <Picker.Item label={"Не выбрано"} value={""} key={0}/>
                        {roomsDictionary?.map((i: any, key: number) => {
                            return (
                                <Picker.Item label={i.title} value={i.id} key={key}/>)

                        })}
                    </Picker>
                    <Text style={styles.text}>Гость:</Text>
                    <TextInput style={styles.input}
                               value={guest}
                               onChangeText={text => dispatch(Actions.loadGuest.updateGuest(text))}
                               placeholder='Введите имя гостя'
                               allowFontScaling={true}
                               maxFontSizeMultiplier={14}
                               textAlign={"left"}
                    />
                    <Text style={styles.text}>Группа:</Text>
                    <SelectorComponent selectedValue={group} onChange={(value) => setGroup(value)}
                                       item={itemGroupsDictionary}/>
                    <Text style={styles.text}>Наименование:</Text>
                    <SelectorComponent selectedValue={itemName} onChange={(value) => setItemName(value)}
                                       item={itemsForSelector}/>
                    <Text style={styles.text}>Количество:</Text>
                    <TextInput style={styles.input}
                               keyboardType='numeric'
                               onChangeText={(text) => inputChangeForNum(text)}
                               value={num}
                               maxLength={10}
                               placeholder='Введите число'
                    />
                    <Text style={styles.text}>
                        Дата запроса: {requestDate.getDate()} {requestMonth} {requestDate.getFullYear()}
                    </Text>
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
                    }} title='Выбор даты'/>
                    <Text style={styles.text}>
                        Дата выезда: {departureDate.getDate()} {departureMonth} {departureDate.getFullYear()}
                    </Text>
                    <Button onPress={() => {
                        try {
                            DatePickerAndroid.open({date: new Date()})
                                .then(function (date) {
                                    if (date.action !== DatePickerAndroid.dismissedAction) {
                                        let newDate = new Date(date.year, date.month, date.day);
                                        dispatch(Actions.loadGuest.updateDateEnd(newDate));
                                    }
                                });
                        } catch ({code, message}) {
                            console.warn('Cannot open date picker', message);
                        }
                    }} title='Выбор даты'/>
                    <Text style={styles.text}>Статус:</Text>
                    <Picker selectedValue={status}
                            onValueChange={(value) => setStatus(value)}
                            enabled={false}>
                        {statusesDictionary?.map((i: any, key: number) => {
                            return (
                                <Picker.Item label={i.title} value={i.title} key={key}/>)
                        })}
                    </Picker>
                    <Text style={styles.text}>Примечание:</Text>
                    <TextInput style={styles.input}
                               defaultValue={note}
                               onChangeText={text => setNote(text)}
                               placeholder='Примечание'
                    />
                    <Button onPress={() => postRequest()} disabled={
                        room == "" || guest == "" || group == "" || itemName == "" || num == ""
                    } title='Сохранить'/>
                    <Text style={styles.result}> {result ? result : ""} </Text>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
};