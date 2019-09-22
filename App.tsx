import React from 'react';

import AppContainer from './AppNavigator';

import { initializeFirebase } from './util/firebase/initFirebase';

export default function App() {
  initializeFirebase();
  return (
    <AppContainer/>
  );
}
