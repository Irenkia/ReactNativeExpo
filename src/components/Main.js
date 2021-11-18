import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';


const Main = () => {

    const [name, setName] = useState('');
    const [textBody, setTextBody] = useState('');

    const changeName = (event) => {
        setName(event);
        console.log(event);
    }

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <TextInput
                    onChangeText={changeName}
                    placeholder={'write your name'}
                    value={name}
                />
            </View>
            <Text>Welcome  {textBody} !</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapper: {
        borderBottomWidth: 1,
        marginTop: 12
    }
});
export default Main;
