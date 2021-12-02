import React from 'react';
import { View, Text } from 'react-native';
import stylesFooter from './stylesFooter';

const Footer = () => {
    return (
        <View style={stylesFooter.container}>
            <Text style={stylesFooter.text}>My fixed footer</Text>
        </View>
    );
};

export default Footer;
