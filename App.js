import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import Navigation from './src/navigations/Navigation';
const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Navigation />
    </View>
  )
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
