import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from "./stylesProfile";

export const ProfileScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>

            <Text style={styles.heading}>Profile Screen</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Home')}>
                <Text>Go back</Text>
            </TouchableOpacity>
        </View >
    )
};