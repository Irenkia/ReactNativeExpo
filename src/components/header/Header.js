import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import stylesHeader from './stylesHeader';

const Header = ({ title }) => {
    return (
        <View style={stylesHeader.headerContainer}>
            <Text style={stylesHeader.headerTitle}>{title}</Text>
        </View>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
};
export default Header;