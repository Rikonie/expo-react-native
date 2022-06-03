import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#CCEEEE',
        display: "flex",
        flex:1,
        flexDirection: "column",
    },
    containerForNewItem: {
        backgroundColor: '#CCEEEE',
        display: "flex",
        flex:1,
        flexDirection: "column",
        minHeight: "105%"
    },
    header: {
        fontSize: 23,
        padding: 10,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 5,
        marginBottom: 5
    },
    headerForNewItem:{
        fontSize: 23,
        padding: 10,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 5,
        marginBottom: 5
    },
    items: {
        fontSize: 17,
        minHeight:60,
        backgroundColor: '#eeeeee',
        padding: 10,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 0,
        marginBottom: 0,
        borderWidth: 1,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        borderColor: '#ddd',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    },
    view:{
        display: "flex",
        flexDirection: "column",
        backgroundColor: '#eeeeee',
        padding: 10,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 0,
        marginBottom: 0,
        borderWidth: 1,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        borderColor: '#ddd',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    },
    input: {
        minWidth: 300,
        height: 42,
        padding: 10,
        borderWidth: 1,
        borderColor: "#6FC1C2",
        marginBottom: 10,
        fontSize: 17,
        backgroundColor: "white",
        textAlign: "left"
    },
    text:{
        fontSize: 17,
        textAlign: "left"
    },
    picker:{
        backgroundColor: "white"
    },
    result:{
        fontSize: 27,
        textAlign: "center"
    },
    buttonOnBack:{
        alignItems:"flex-start",
        paddingLeft: 20,
        backgroundColor: '#CCEEEE',
        paddingTop: 10
    }
});