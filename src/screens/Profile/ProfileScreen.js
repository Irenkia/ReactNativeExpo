import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from "./stylesProfile";

function ProfileScreen({ navigation, route }) {

    const { friends } = route.params;
    const Change = () => {
        navigation.setParams({
            friends: friends[0] === 'Brent' ? ['Wojciech', 'Szymon', 'Jakub'] : ['Brent', 'Satya', 'Michas']
        })
    }
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Profile Screen</Text>

            <FlatList
                data={friends}
                keyExtractor={(i) => i}
                renderItem={({ item }) => (
                    <Text style={styles.text}>
                        {item}
                    </Text>
                )}
            />

            <TouchableOpacity style={styles.button}
                onPress={Change} >
                <Text>Swap profile name and friends</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.goBack()}>
                <Text>Go back</Text>
            </TouchableOpacity>
        </View >
    )
};

export default ProfileScreen;