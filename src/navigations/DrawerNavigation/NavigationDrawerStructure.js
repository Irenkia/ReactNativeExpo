import React from "react";
import { View, TouchableOpacity } from "react-native";
import Ionicon from 'react-native-vector-icons/Ionicons';
import stylesDrawer from "./stylesDrawer";

const NavigationDrawerStructure = (props) => {

    const toggleDrawer = () => {
        props.navigationProps.toggleDrawer();
    };

    return (
        <View style={stylesDrawer.view}>
            <TouchableOpacity onPress={() => toggleDrawer()}>
                <Ionicon style={stylesDrawer.container} name={'menu'} size={30} />
            </TouchableOpacity>
        </View>
    );
}

export default NavigationDrawerStructure;
