import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// we don't use html elements, but rather the components provided by react native

const App = () => {
  console.log('logging is possible!!')
  // logs can be viewed in metro bundler after selecting the "device" your simulating under

  return (
    <View style={styles.container}>
      <Text>ga-bri-elle</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default App;

// here we create a style sheet object
// we pass in an object with a property
// we use the JS for CSS attributes which will be translated on build
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
