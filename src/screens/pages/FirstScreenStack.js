import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstPage from './FirstPage';
import NavigationDrawerStructure from '../../navigations/DrawerNavigation/NavigationDrawerStructure';

const Stack = createNativeStackNavigator();

const FirstScreenStack = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName="First" >
            <Stack.Screen name="First" component={FirstPage}
                options={{
                    title: 'First Page',
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
                }}
            />
        </Stack.Navigator >
    );
}

export default FirstScreenStack;