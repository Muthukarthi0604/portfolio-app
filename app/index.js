// App.js
import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import Home from '../src/screens/Home';  
import Footer from '../src/components/Footer';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default App;
