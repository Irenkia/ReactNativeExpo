import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import NavigationDrawerStructure from '../../navigations/DrawerNavigation/NavigationDrawerStructure';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName="Home"
            screenOptions={{
                headerLeft: () =>
                    <NavigationDrawerStructure
                        navigationProps={navigation}
                    />,
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>
            <Stack.Screen name="Home" component={Home}
                options={{
                    title: 'Home',
                }} />
        </Stack.Navigator>
    );
}

export default HomeScreen;