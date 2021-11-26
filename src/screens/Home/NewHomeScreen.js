import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Header from '../../../src/components/Header';
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import styles from './styles';
import { TITLE } from "../../constants/Constants";


const NewHomeScreen = ({ navigation }) => {
    return (
        < View style={styles.container} >
            <Header style={styles.header} title={TITLE} />
            <Main style={styles.main} />


            <Text style={styles.text}>This is the Home screen of the app</Text>

            <View>
                <TouchableOpacity title="Go to Brents profile"
                    onPress={() => navigation.navigate('NewProfile', {
                        friends: ['Brent', 'Satya', 'Michas'],
                        title: 'Brents profile'
                    })}>
                    <Text style={styles.button}>Go to Brents profile</Text>
                </TouchableOpacity>
            </View>


            <Footer style={styles.footer} />
        </View >
    )
};

export default NewHomeScreen;