import React from "react";
import { View, StyleSheet } from 'react-native';
import Header from "./Header";
import { TITLE } from '../constants/Constants';
import Main from "./Main";
import Footer from "./Footer"

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Header title={TITLE} />
            </View>
            <View style={styles.main}>
                <Main />
            </View>
            <View style={styles.footer}>
                <Footer />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: .1
    },
    main: {
        flex: .8
    },
    footer: {
        flex: .1
    }
})