import * as React from 'react';
import { Button, SafeAreaView, Text} from 'react-native';
import {useAppDispatch} from "../store/app-dispatch";
import {Actions} from "../store/actions";
import {styles} from "../components/styles";


export const Settings =()=> {
    const dispatch = useAppDispatch();
    const clickAuthOut = () =>{
        dispatch(Actions.auth.auth.success(null))
};

    return (
        <SafeAreaView style={styles.container}>
            <Text>
                Вы вошли как 
            </Text>
            <Button onPress={clickAuthOut} title='Выход'/>
        </SafeAreaView>
    )
};