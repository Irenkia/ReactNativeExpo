import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
//import Navigation from './src/Navigation';
import NewNavigation from './src/NewNavigation';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      {/* <Navigation /> */}
      <NewNavigation />
    </View>
  )
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
