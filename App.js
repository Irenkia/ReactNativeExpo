import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import Home from './src/components/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
