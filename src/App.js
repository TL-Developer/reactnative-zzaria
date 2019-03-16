import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { ThemeProvider } from 'react-native-elements';

import Routes from './routes';

const App = () => (
  <ThemeProvider>
    <Routes style={styles.container} />
  </ThemeProvider>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fafafa',
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
