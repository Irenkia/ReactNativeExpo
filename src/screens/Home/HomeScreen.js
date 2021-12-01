import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Header from '../../components/Header';
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import styles from './stylesHome';
import { TITLE } from "../../constants/Constants";

const HomeScreen = ({ navigation }) => {
    return (
        < View style={styles.container} >
            <Header style={styles.header} title={TITLE} />
            <Main style={styles.main} />

            <Text style={styles.text}>This is the Home screen of the app</Text>

            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Profile', {
                        friends: ['Brent', 'Satya', 'Michas'],
                    })}>
                    <Text style={styles.button}>Go to Brents profile</Text>
                </TouchableOpacity>
            </View>
            <Footer style={styles.footer} />
        </View >
    )
};

export default HomeScreen;