import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view';
import Home from '../../screens/home/Home';

// const Dimensions = require('Dimensions');
// const ScreenWidth = Dimensions.get('window').width;

const { height, width } = Dimensions.get('screen');

export default class TopTabNavigation extends Component {
    render() {
        return (
            <ScrollableTabView initialPage={Home}
                style={styles.container}
                renderTabBar={() => <DefaultTabBar />}
                tabBarUnderlineStyle={styles.lineStyle}
                tabBarActiveTextColor='#FF0000'
            >
                <View> <Text style={styles.textStyle} tabLabel='Home'> Home </Text></View>
                <View><Text style={styles.textStyle} tabLabel='FirstPage'> First </Text></View>
                <View><Text style={styles.textStyle} tabLabel='SecondPage'> Second </Text></View>
                <View><Text style={styles.textStyle} tabLabel='ThirdPage'> Third </Text></View>

            </ScrollableTabView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: '#F5FCFF',
    },
    lineStyle: {
        width: ScreenWidth / 4,
        height: 2,
        backgroundColor: 'red'
    },
    textStyle: {
        flex: 1,
        fontSize: 20,
        marginTop: 20,
        textAlign: 'center'
    },
});