import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        padding: 10,
        justifyContent: "center",
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#f3f3f3'
    },
    headerTitle: {
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center'
    }
})

Header.propTypes = {
    title: PropTypes.string.isRequired,
};
export default Header;