import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from "./ProfileStyles";

function ProfileScreen({ navigation, route }) {

    {/* setOptions */ }
    const { friends } = route.params;
    const Change = () => {
        return (
            navigation.setParams({
                friends: friends[0] === 'Brent' ? ['Wojciech', 'Szymon', 'Jakub'] : ['Brent', 'Satya', 'Michas']
            })
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Profile Screen</Text>

            {/* setParams */}
            <Text style={styles.friends}>Friends: </Text>
            <Text style={styles.text}>{friends[0]}</Text>
            <Text style={styles.text}>{friends[1]}</Text>
            <Text style={styles.text}>{friends[2]}</Text>

            <TouchableOpacity style={styles.button}
                title="Swap profile name and friends"
                onPress={Change} >
                <Text>Swap profile name and friends</Text>
            </TouchableOpacity>

            <TouchableOpacity
                title="Go back"
                style={styles.button}
                onPress={() => navigation.goBack()}>
                <Text>Go back</Text>
            </TouchableOpacity>
        </View >
    )
};

export default ProfileScreen;