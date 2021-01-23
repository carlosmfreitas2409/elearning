import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';

import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => (
  <View style={{ flex: 1 }}>
    <StatusBar barStyle="light-content" backgroundColor="#6548A3" />
    <AppProvider>
      <Routes />
    </AppProvider>
  </View>
);

export default App;
