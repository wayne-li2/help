import React from 'react';
import SearchScreen from './screens/SearchScreen';
import { initializeFirebase } from './util/firebase/initFirebase';

import styled from '@emotion/native';

const Container = styled.View({
  padding: 10,
});

export default function App() {
  initializeFirebase();
  return (
    <Container>
      <SearchScreen/>
    </Container>
  );
}
