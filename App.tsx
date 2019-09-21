import React from 'react';
import styled from '@emotion/native';

import AppContainer from './AppNavigator';
import { initializeFirebase } from './util/firebase/initFirebase';

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
