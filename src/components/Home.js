import React from "react";
import { View, StyleSheet } from 'react-native';
import Header from "./Header";
import { TITLE } from '../constants/Constants';
import Main from "./Main";

export default function Home() {
    return (
        <View style={styles.container}>
            <Header title={TITLE} />
            <Main />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});