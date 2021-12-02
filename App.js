import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, StatusBar, SafeAreaView } from 'react-native';
import DrawerNavigation from './src/navigations/DrawerNavigation/DrawerNavigation';

const App = () => {

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <StatusBar />
        <DrawerNavigation />
      </View>
    </SafeAreaView>
  )
};

export default App;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1
  },
  container: {
    flex: 1,
  },
});
