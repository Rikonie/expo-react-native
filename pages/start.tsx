import {Login} from "./login";
import {Charges} from "./charges";
import {Another} from "./another";
import {Furniture} from "./furniture";
import {Cushions} from "./cushions";
import {Equipment} from "./equipment";
import {Toppers} from "./toppers";
import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import * as React from "react";
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList} from "@react-navigation/drawer";
import {SafeAreaView, StyleSheet, View} from "react-native";
import {useSelector} from "react-redux";
import {tokenSelector} from "../selectors/token-selector";
import {NewItem} from "./new-item";
import {useAppDispatch} from "../store/app-dispatch";
import {Actions} from "../store/actions";

const Drawer = createDrawerNavigator();

export const Start = () => {

    const token = useSelector(tokenSelector);
    const dispatch = useAppDispatch();
    const clickAuthOut = () => {
        console.log("Logout");
        dispatch(Actions.auth.auth.success(null));
        dispatch(Actions.auth.exit())
    };

    return (
        <>
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Авторизация"
                                  screenOptions={{drawerStyle: {backgroundColor: '#eeeeee', display: "flex", justifyContent: "space-between",
                                          flexDirection: "column",
                                      }}} drawerContent={props => {
                    return (
                        <SafeAreaView style={{flex: 1}}>
                        <DrawerContentScrollView {...props}>
                            <DrawerItemList {...props} />
                            
                        </DrawerContentScrollView>
                        <View>
                            <DrawerItem label="Выход" onPress={() => {
                                props.navigation.closeDrawer();
                                return clickAuthOut()
                            }} style={{backgroundColor:'#CCEEEE', }}/>
                            </View>
                        </SafeAreaView>
                    )
                }}
                >
                    {!token ? (
                        <>
                            <Drawer.Screen options={{headerShown: false}} name="Авторизация" component={() => Login()}/>
                        </>
                    ) : (
                        <>
                            <Drawer.Screen options={styles} name="Зарядки (СПиР)" component={Charges}/>
                            <Drawer.Screen options={styles} name="Иное, вазы, ...(СПиР и ССП)" component={Another}/>
                            <Drawer.Screen options={styles} name="Мебель" component={Furniture}/>
                            <Drawer.Screen options={styles} name="Меню подушек" component={Cushions}/>
                            <Drawer.Screen options={styles} name="Оборудование" component={Equipment}/>
                            <Drawer.Screen options={styles} name="Топперы, одеяла" component={Toppers}/>
                            <Drawer.Screen options={styles} name="Выдать новый предмет" component={NewItem}/>
                        </>
                    )}
                </Drawer.Navigator>
                <StatusBar style="auto"/>
            </NavigationContainer>
        </>
    )
};

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: '#eeeeee'
    }
});