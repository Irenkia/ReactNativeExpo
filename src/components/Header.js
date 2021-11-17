import React from 'react';
//import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>
                    Greetings!
                </Text>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        flexDirection: "column",
        alignSelf: 'stretch',
        paddingTop: 20,
        paddingBottom: 5,
        backgroundColor: '#f3f3f3'
    },

    headerTitle: {
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center'

    }

    // headerContainer: {
    //     flex: 1,
    //     justifyContent: 'center'
    // },

    // headerTitle: {
    //     fontSize: 25,
    //     fontWeight: '700',
    //     padding: 10
    // }

})