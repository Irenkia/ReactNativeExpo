import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>My fixed footer</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f3f3f3',
    },
    text: {
        fontSize: 15
    }

});
export default Footer;
