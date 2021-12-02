import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import stylesSettings from './stylesSettings';

const SettingsScreen = () => {
    return (
        <SafeAreaView style={stylesSettings.safeAreaView}>
            <View style={stylesSettings.container}>
                <Text style={stylesSettings.text}>Hello Settings!</Text>
            </View>
        </SafeAreaView>

    )
}
export default SettingsScreen;