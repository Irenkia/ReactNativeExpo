import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const Main = () => {

    const [name, setName] = useState('');
    const [textBody, setTextBody] = useState('friend');

    const changeName = (event) => {
        setName(event);
    }

    const addName = () => {
        if (name === '') {
            return alert('The field cannot be empty, please enter your name');
        }
        setTextBody(name);
        setName('');
    }

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <TextInput
                    style={styles.input}
                    onChangeText={changeName}
                    placeholder={'write your name'}
                    value={name}
                />
                <Button title={'ok'} onPress={addName} />
            </View>
            <View >
                <Text style={styles.text} >Welcome  {textBody} !</Text>
            </View>
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
        flexDirection: 'row',
        borderBottomWidth: 1,
        marginTop: 12,

    },
    input: {
        textAlign: 'center'

    },
    text: {
        marginTop: 30,
        fontSize: 25
    }
});
export default Main;
