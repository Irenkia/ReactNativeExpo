import React from "react";
import { View, TouchableOpacity, Text, SafeAreaView } from "react-native";
import Header from '../../components/header/Header';
import Main from "../../components/main/Main";
import Footer from "../../components/footer/Footer";
import stylesHome from './stylesHome';
import { TITLE } from "../../constants/Constants";

import Theme from "../../store/themes/Theme";

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import Reducer from '../../store/dataFromTheInternet/Redusers';
import RepoList from '../../store/dataFromTheInternet/RepoList';

const client = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/comments/?_limit=30&_page=',
    responseType: 'json'
});

const store = createStore(Reducer, applyMiddleware(axiosMiddleware(client)));

const Home = ({ navigation }) => {
    return (

        <SafeAreaView style={stylesHome.safeAreaView}>

            <Theme />

            <Provider store={store}>

                <View style={stylesHome.view}>
                    < View style={stylesHome.container} >
                        <Header style={stylesHome.header} title={TITLE} />
                        <Main style={stylesHome.main} />

                        <View style={stylesHome.repoList}>
                            <RepoList />
                        </View>

                        <View>
                            <Text style={stylesHome.text}>This is the Home screen of the app</Text>
                        </View>
                        <View>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Profile')}>
                                <Text style={stylesHome.button}>Go to profile</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                        </View>
                        <Footer style={stylesHome.footer} />
                    </View >

                </View>
            </Provider>
        </SafeAreaView>
    )
};

export default Home;