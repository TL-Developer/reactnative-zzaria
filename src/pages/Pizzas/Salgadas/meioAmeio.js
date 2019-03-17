import React from 'react';
import { Platform, StyleSheet, ScrollView, View, Text } from 'react-native';
import { Divider } from 'react-native-elements';

import MeioaMeio from '../../../components/Pizzas/Salgadas/MeioaMeio';

const PizzaSalgadaMeioaMeioPage = () => (
  <ScrollView style={styles.container}>
    <Text>Escolha 2 sabores</Text>
    <Divider />
    <MeioaMeio />
  </ScrollView>
);

PizzaSalgadaMeioaMeioPage.navigationOptions = {
  title: 'Pizzas Meio a Meio',
}

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

export default PizzaSalgadaMeioaMeioPage;
