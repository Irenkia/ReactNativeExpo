import React from 'react';
import { TouchableOpacity, View, Text, SafeAreaView } from 'react-native';
import stylesSecond from './stylesSecond';

const SecondPage = ({ navigation }) => {
    return (
        <SafeAreaView style={stylesSecond.safeAreaView}>
            <View style={stylesSecond.view}>
                <View style={stylesSecond.container}>
                    <Text
                        style={stylesSecond.text}>
                        This is Second Page
                    </Text>

                    <TouchableOpacity style={stylesSecond.button}
                        onPress={() => navigation.navigate('FirstPage')} >
                        <Text>Go to First Page</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={stylesSecond.button}
                        onPress={() => navigation.navigate('ThirdPage')} >
                        <Text>Go to Third Page</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={stylesSecond.button}
                        onPress={() => navigation.navigate('Home')} >
                        <Text>Go to Home</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </SafeAreaView>
    );
}

export default SecondPage;
