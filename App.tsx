import React from 'react';
import { initializeFirebase } from './util/firebase/initFirebase';
import { Text, View } from 'react-native';
import styled from '@emotion/native';

import AppContainer from './AppNavigator';



const Container = styled.View({
  flex: 1,
  paddingTop: 10,
});



export default function App() {
  initializeFirebase();
  return (
    <Container>
      <AppContainer />
    </Container>
  );
}
