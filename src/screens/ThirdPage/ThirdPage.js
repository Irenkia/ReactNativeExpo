import React from 'react';
import { TouchableOpacity, View, Text, SafeAreaView } from 'react-native';
import stylesThird from './stylesThird';

const ThirdPage = ({ navigation }) => {
    return (
        <SafeAreaView style={stylesThird.safeAreaView}>
            <View style={stylesThird.view}>
                <View style={stylesThird.container}>

                    <Text
                        style={stylesThird.text}>
                        This is Third Page
                    </Text>

                    <TouchableOpacity style={stylesThird.button}
                        onPress={() => navigation.navigate('FirstPage')} >
                        <Text>Go to First Page</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={stylesThird.button}
                        onPress={() => navigation.navigate('SecondPage')} >
                        <Text>Go to Second Page</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={stylesThird.button}
                        onPress={() => navigation.navigate('Home')} >
                        <Text>Go to Home</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </SafeAreaView>
    );
}

export default ThirdPage;
