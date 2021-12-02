import React from "react";
import { View, TouchableOpacity, Text, SafeAreaView } from "react-native";
import Header from '../../components/Header';
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import styles from './stylesHome';
import { TITLE } from "../../constants/Constants";

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 16 }}>
                < View style={styles.container} >
                    <Header style={styles.header} title={TITLE} />
                    <Main style={styles.main} />
                    <Text style={styles.text}>This is the Home screen of the app</Text>
                    <View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Profile')}>
                            <Text style={styles.button}>Go to profile</Text>
                        </TouchableOpacity>
                    </View>
                    <Footer style={styles.footer} />
                </View >
            </View>
        </SafeAreaView>
    )
};

export default Home;