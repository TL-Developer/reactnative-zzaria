import React from 'react';
import { Platform, StyleSheet, ScrollView, View, Text } from 'react-native';
import { ListItem, Divider } from 'react-native-elements';

import PizzasSalgadas from '../../components/Home/PizzasSalgadas';
import PizzasDoces from '../../components/Home/PizzasSalgadas';
import BrotosSalgados from '../../components/Home/PizzasSalgadas';
import BrotosDoces from '../../components/Home/PizzasSalgadas';

const Home = () => (
  <ScrollView style={styles.container}>
    <PizzasSalgadas />
    <PizzasDoces />
    <BrotosSalgados />
    <BrotosDoces />
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    height: '90%',
    padding: 10,
  },
  title: {
    fontSize: 22,
    marginTop: 10,
    marginBottom: 10,
  }
});

export default Home;
