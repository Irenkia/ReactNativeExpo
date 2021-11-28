import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/HomeScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import SettingsScreen from "../screens/settings/SettingsScreen";

const Navigation = () => {

    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();

    const Pages = () => {
        return (
            <Stack.Navigator initialRouteName="Main">
                <Stack.Screen
                    name="Main"
                    component={HomeScreen}
                    options={{ headerTitleAlign: 'center', headerTitle: "Home" }}
                />
                <Stack.Screen
                    name="Profile"
                    component={ProfileScreen}
                />
            </Stack.Navigator>
        )
    }
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Home' component={Pages} options={{ headerShown: false }}></Tab.Screen>
                <Tab.Screen name='Settings' component={SettingsScreen}></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;