import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListingScreen from './screens/ListingScreen';

export default function App() {
  return (
    <ListingScreen
      address={'123 Main St'}
    />
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
