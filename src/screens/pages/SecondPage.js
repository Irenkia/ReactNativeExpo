import React from 'react';
import { TouchableOpacity, View, Text, SafeAreaView } from 'react-native';
import stylesPages from './stylesPages';

const SecondPage = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 16 }}>
                <View style={stylesPages.container}>
                    <Text
                        style={stylesPages.text}>
                        This is Second Page
                    </Text>

                    <TouchableOpacity style={stylesPages.button}
                        onPress={() => navigation.navigate('FirstPage')} >
                        <Text>Go to First Page</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={stylesPages.button}
                        onPress={() => navigation.navigate('ThirdPage')} >
                        <Text>Go to Third Page</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={stylesPages.button}
                        onPress={() => navigation.goBack()} >
                        <Text>Go to Home</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </SafeAreaView>
    );
}

export default SecondPage;
