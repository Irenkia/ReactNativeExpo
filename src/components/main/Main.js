import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import stylesMain from './stylesMain';

const Main = () => {

    const [name, setName] = useState('');
    const [textBody, setTextBody] = useState('friend');

    const addName = () => {
        if (name === '') {
            return alert('The field cannot be empty, please enter your name');
        }
        setTextBody(name);
        setName('');
    }

    return (
        <View style={stylesMain.container}>
            <View style={stylesMain.wrapper}>
                <TextInput
                    style={stylesMain.input}
                    onChangeText={(event) => setName(event)}
                    placeholder={'write your name'}
                    value={name}
                />
                <Button title={'ok'} onPress={addName} />
            </View>
            <View >
                <Text style={stylesMain.text} >Welcome  {textBody} !</Text>
            </View>
        </View>
    );
};

export default Main;
