import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import stylesProfile from './stylesProfile';
import styles from "./stylesProfile";

export const ProfileScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={stylesProfile.safeAreaView}>
            <View style={styles.container}>

                <Text style={styles.heading}>Profile Screen</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Home')}>
                    <Text>Go back</Text>
                </TouchableOpacity>
            </View >
        </SafeAreaView>

    )
};