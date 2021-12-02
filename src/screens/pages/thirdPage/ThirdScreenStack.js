import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationDrawerStructure from '../../../navigations/DrawerNavigation/NavigationDrawerStructure';
import ThirdPage from './ThirdPage';

const Stack = createNativeStackNavigator();


const ThirdScreenStack = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName="Third"
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
            <Stack.Screen name="Third" component={ThirdPage}
                options={{
                    title: 'Third Page',
                }} />
        </Stack.Navigator>
    );
}

export default ThirdScreenStack;