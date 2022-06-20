import * as React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {useAppDispatch} from "../store/app-dispatch";
import {Actions} from "../store/actions";
import {User} from "../types/user";
import {useSelector} from "react-redux";
import {resultAuthSelector} from "../selectors/token-selector";

export const Login = () => {

    const [username, setUsername] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const dispatch = useAppDispatch();

    const clickAuth = () => {
        let u:User = {login: username, password: password};
        console.log("Login", u);
        dispatch(Actions.auth.auth.request(u));
    };
    const result = useSelector(resultAuthSelector);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Авторизация</Text>
            <TextInput
                defaultValue={username}
                onChangeText={setUsername}
                placeholder='Логин'
                style={styles.input}
            />
            <TextInput
                defaultValue={password}
                onChangeText={text => setPassword(text)}
                placeholder='Пароль'
                secureTextEntry={true}
                style={styles.input}

            />
            <Button onPress={clickAuth} title='Войти'/>
            <Text style={styles.result}> {result? result :""} </Text>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CCEEEE',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: 350,
        height: 50,
        padding: 10,
        borderWidth: 1,
        borderColor: "#6FC1C2",
        marginBottom: 10,
        fontSize: 20,
        backgroundColor: "white",
        textAlign: "left"
    },
    text: {
        fontSize: 24,
        marginBottom: 10
    },
    result:{
        fontSize: 24,
        textAlign: "center",
        color: "red"
    }
});
  