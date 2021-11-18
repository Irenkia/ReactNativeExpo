import React from "react";
import { View } from 'react-native';
import Header from "./Header";
import { TITLE } from '../constants/Constants';
import Main from "./Main";

export default function Home() {
    return (
        <View>
            <Header title={TITLE} />
            <Main />
        </View>
    );
}

