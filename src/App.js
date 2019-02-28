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

import Header from './components/Header';
import Content from './components/Content';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Content />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: flex,
    backgroundColor: '#fafafa',
  },
});
