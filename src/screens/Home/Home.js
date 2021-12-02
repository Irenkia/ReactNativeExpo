import React from "react";
import { View, TouchableOpacity, Text, SafeAreaView } from "react-native";
import Header from '../../components/header/Header';
import Main from "../../components/main/Main";
import Footer from "../../components/footer/Footer";
import stylesHome from './stylesHome';
import { TITLE } from "../../constants/Constants";

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={stylesHome.safeAreaView}>
            <View style={stylesHome.view}>
                < View style={stylesHome.container} >
                    <Header style={stylesHome.header} title={TITLE} />
                    <Main style={stylesHome.main} />
                    <Text style={stylesHome.text}>This is the Home screen of the app</Text>
                    <View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Profile')}>
                            <Text style={stylesHome.button}>Go to profile</Text>
                        </TouchableOpacity>
                    </View>
                    <Footer style={stylesHome.footer} />
                </View >
            </View>
        </SafeAreaView>
    )
};

export default Home;