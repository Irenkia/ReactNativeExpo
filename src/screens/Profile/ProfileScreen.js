import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from "./styles";

function ProfileScreen({ route, navigation }) {

    const { itemId, otherParam } = route.params;

    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('Home')}>
                <Text>To Home</Text>
            </TouchableOpacity>

            <View>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>otherParam: {JSON.stringify(otherParam)}</Text>
            </View>

            <TouchableOpacity
                title="Go to Details... again"
                style={styles.button}
                onPress={() => navigation.push('Profile', { itemId: Math.random() * 100, otherParam: 'Overview' },)}>
                <Text>Go to Details...again</Text>
            </TouchableOpacity>

            <TouchableOpacity
                title="Go to Home"
                style={styles.button}
                onPress={() => navigation.navigate('Home')}>
                <Text>Go to Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
                title="Go back"
                style={styles.button}
                onPress={() => navigation.goBack()}>
                <Text>Go back</Text>
            </TouchableOpacity>
            <TouchableOpacity
                title="Go back to first screen in stack"
                style={styles.button}
                onPress={() => navigation.popToTop()}>
                <Text>Go back to first screen in stack</Text>
            </TouchableOpacity>

        </View>
    )
};

export default ProfileScreen;
