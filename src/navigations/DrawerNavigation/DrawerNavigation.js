import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FirstScreenStack from "../../screens/pages/FirstScreenStack";
import SecondScreenStack from "../../screens/pages/SecondScreenStack";
import ThirdScreenStack from "../../screens/pages/ThirdScreenStack";
import TabNavigation from "../TabNavigation";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {

    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName={'Navigation'}
                screenOptions={{
                    activeTintColor: '#e91e63',
                    itemStyle: { marginVertical: 5 },
                    headerShown: false
                }}
            >
                <Drawer.Screen name="Navigation" component={TabNavigation}
                    options={{ drawerLabel: 'Home' }} />
                <Drawer.Screen name="FirstPage" component={FirstScreenStack}
                    options={{ drawerLabel: 'First Page' }} />
                <Drawer.Screen name="SecondPage" component={SecondScreenStack}
                    options={{ drawerLabel: 'Second Page' }} />
                <Drawer.Screen name="ThirdPage" component={ThirdScreenStack}
                    options={{ drawerLabel: 'Third Page' }} />

            </Drawer.Navigator>
        </NavigationContainer>
    );
}
export default DrawerNavigation;