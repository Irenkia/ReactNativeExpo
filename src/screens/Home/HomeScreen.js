import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Header from '../../../src/components/Header';
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import styles from './styles';
import { TITLE } from "../../constants/Constants";


const HomeScreen = ({ navigation }) => {
    return (
        < View style={styles.container} >
            <Header style={styles.header} title={TITLE} />
            <Main style={styles.main} />

            <Text style={styles.text}>This is the Home screen of the app</Text>

            <Text>Go to Profile</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Profile', { itemId: 86, otherParam: 'anything you want here' })}>
                <Text style={styles.button}>Go to Profile</Text>
            </TouchableOpacity>

            <Footer style={styles.footer} />
        </View >
    )
};

export default HomeScreen;