import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeScreen from '../screens/home/HomeScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import SettingsScreen from "../screens/settings/SettingsScreen";

const Navigation = () => {

    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();

    const Pages = () => {
        return (
            <Stack.Navigator initialRouteName="Home" >
                <Stack.Screen
                    name="Home"
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
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'HomeScreen') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'settings' : 'settings-outline';
                        };
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray'
                })}
            >
                <Tab.Screen name='HomeScreen' component={Pages} options={{ headerShown: false, title: 'Home' }}></Tab.Screen>
                <Tab.Screen name='Settings' component={SettingsScreen}></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer >
    )
}

export default Navigation;