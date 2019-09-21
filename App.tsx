import React from 'react';

import AppContainer from './AppNavigator';

import { BaseContainer } from './style/Styles';
import { initializeFirebase } from './util/firebase/initFirebase';

export default function App() {
  initializeFirebase();
  return (
    <BaseContainer>
      <AppContainer />
    </BaseContainer>
  );
}
