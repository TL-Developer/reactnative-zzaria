import React, { Component } from 'react';
import { Platform, StyleSheet, ScrollView, Text } from 'react-native';
import { ListItem, Divider } from 'react-native-elements';

import PizzasSalgadas from '../../components/Home/PizzasSalgadas';
import PizzasDoces from '../../components/Home/PizzasDoces';
import BrotosSalgados from '../../components/Home/BrotosSalgados';
import BrotosDoces from '../../components/Home/BrotosDoces';

const Home = ({
  navigation,
}) => (
  <ScrollView style={styles.container}>
    <PizzasSalgadas navigation={navigation} />
    <PizzasDoces />
    <BrotosSalgados />
    <BrotosDoces />
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
