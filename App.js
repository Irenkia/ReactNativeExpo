import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import DrawerNavigation from './src/navigations/DrawerNavigation/DrawerNavigation';

const App = () => {

  return (
    <View style={styles.container}>
      <StatusBar />
      <DrawerNavigation />
    </View>
  )
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
