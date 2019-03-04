/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { ThemeProvider } from 'react-native-elements';

import Header from './components/Header';
import Home from './containers/Home';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ThemeProvider>
        <View style={styles.container}>
          <Header />
          <Home />
        </View>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fafafa'
  },
});
