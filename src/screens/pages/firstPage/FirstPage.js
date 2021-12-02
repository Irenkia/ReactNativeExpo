import React from 'react';
import { TouchableOpacity, View, Text, SafeAreaView } from 'react-native';
import stylesFirst from './stylesFirst';

const FirstPage = ({ navigation }) => {
    return (
        <SafeAreaView style={stylesFirst.safeAreaView}>
            <View style={stylesFirst.view}>
                <View style={stylesFirst.container}>
                    <Text
                        style={stylesFirst.text}>
                        This is the First Page
                    </Text>

                    <TouchableOpacity style={stylesFirst.button}
                        onPress={() => navigation.navigate('SecondPage')} >
                        <Text>Go to Second Page</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={stylesFirst.button}
                        onPress={() => navigation.navigate('ThirdPage')} >
                        <Text>Go to Third Page</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={stylesFirst.button}
                        onPress={() => navigation.navigate('Home')} >
                        <Text>Go to Home</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </SafeAreaView>
    );
}

export default FirstPage;
