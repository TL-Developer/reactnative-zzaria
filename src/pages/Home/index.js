import React, { Component } from 'react';
import { Platform, StyleSheet, ScrollView, Text } from 'react-native';
import { ListItem, Divider } from 'react-native-elements';

import MenuHome from '../../components/Home/menu';

const Home = ({
  navigation,
}) => (
  <ScrollView style={styles.container}>
    <MenuHome navigation={navigation} />
  </ScrollView>
);

Home.navigationOptions = {
  title: 'Página inicial',
}

export default Home;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  title: {
    fontSize: 22,
    marginTop: 10,
    marginBottom: 10,
    color: '#000',
  }
});
