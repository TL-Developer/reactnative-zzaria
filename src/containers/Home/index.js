import React from 'react';
import { Platform, StyleSheet, ScrollView } from 'react-native';

import PizzasSalgadas from '../../components/Home/PizzasSalgadas';
import PizzasDoces from '../../components/Home/PizzasDoces';

const Home = () => (
  <ScrollView style={styles.container}>
    <PizzasSalgadas />
    <PizzasDoces />
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
