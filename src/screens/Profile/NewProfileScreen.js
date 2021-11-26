import React, { useState, useLayoutEffect, setState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from "./styles";

function NewProfileScreen({ navigation, route, navigation: { setOptions }, navigation: { setParams } }) {

    {/* setOptions */ }
    const { value, onChangeText } = useState(route.params.title);
    useLayoutEffect(() => {
        navigation.setOptions({
            title: value === '' ? 'No title' : value,
        });
    }), [navigation, value]


    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Profile Screen</Text>

            {/* setParams */}
            <Text style={styles.friends}>Friends: </Text>
            <Text style={styles.text}>{route.params.friends[0]}</Text>
            <Text style={styles.text}>{route.params.friends[1]}</Text>
            <Text style={styles.text}>{route.params.friends[2]}</Text>

            <TouchableOpacity style={styles.button}
                title="Swap profile name and friends"
                onPress={() => navigation.setParams({
                    friends:
                        route.params.friends[0] === 'Brent'
                            ? ['Wojciech', 'Szymon', 'Jakub']
                            : ['Brent', 'Satya', 'Michas'],
                    title:
                        route.params.title === "Brents Profile"
                            ? "Lucys Profile"
                            : "Brents Profile",
                })
                } >
                <Text>Swap profile name and friends</Text>
            </TouchableOpacity>


            {/* setOptions */}
            <TextInput style={styles.input}
                onChangeText={onChangeText}
                value={value}
            />



            <TouchableOpacity
                title="Go back"
                style={styles.button}
                onPress={() => navigation.goBack()}>
                <Text>Go back</Text>
            </TouchableOpacity>

        </View >
    )
};

export default NewProfileScreen;