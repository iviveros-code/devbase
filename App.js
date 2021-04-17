import React from 'react';
import {StatusBar} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';

import {theme} from './src/theme';
import Navigation from './src/navigation';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <>
        <StatusBar barStyle="light-content" />
        <Navigation />
      </>
    </PaperProvider>
  );
}
