import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationDrawerStructure from '../../../navigations/DrawerNavigation/NavigationDrawerStructure';
import SecondPage from './SecondPage';

const Stack = createNativeStackNavigator();

const SecondScreenStack = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName="Second"
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
                }
            }}>
            <Stack.Screen name="Second" component={SecondPage}
                options={{
                    title: 'Second Page',
                }} />
        </Stack.Navigator>
    );
}

export default SecondScreenStack;