import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchScreen from './screens/SearchScreen';

export default function App() {
  return (
    <SearchScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
