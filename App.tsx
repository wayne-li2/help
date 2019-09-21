import React from 'react';
import { initializeFirebase } from './util/firebase/initFirebase';
import { Text, View } from 'react-native';
import styled from '@emotion/native';

import AppContainer from './AppNavigator';



const Container = styled.View({
  padding: 10,
});



export default function App() {
  initializeFirebase();
  return (
    <View>
      <Text>Hello</Text>
      <AppContainer />
    </View>
  );
}
