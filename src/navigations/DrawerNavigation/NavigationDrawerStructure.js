import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Ionicon from 'react-native-vector-icons/Ionicons';

const NavigationDrawerStructure = (props) => {

    const toggleDrawer = () => {
        props.navigationProps.toggleDrawer();
    };

    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => toggleDrawer()}>
                <Ionicon style={styles.container} name={'menu'} size={30} />
            </TouchableOpacity>
        </View>
    );
}

export default NavigationDrawerStructure;

const styles = StyleSheet.create({
    container: {
        width: 25,
        height: 25,
        marginLeft: 5
    }
})