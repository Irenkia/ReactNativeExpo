import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewHomeScreen from "./screens/Home/NewHomeScreen";
import NewProfileScreen from "./screens/Profile/NewProfileScreen";

const Stack = createNativeStackNavigator();

const NewNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="NewHome" component={NewHomeScreen} options={{ title: 'My Home' }} />
                <Stack.Screen name="NewProfile" component={NewProfileScreen}
                    options={({ route }) => ({ title: route.params.title })} />
            </Stack.Navigator>
        </NavigationContainer>
    )

};

export default NewNavigation