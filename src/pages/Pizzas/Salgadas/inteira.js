import React from 'react';
import { Platform, StyleSheet, ScrollView, View, Text } from 'react-native';
import { Divider } from 'react-native-elements';

import PizzasSalgadasInteira from '../../../components/Pizzas/Salgadas/Inteira';

const PizzaSalgadaInteiraPage = () => (
  <ScrollView style={styles.container}>
    <Text style={styles.title}>Escolha 1 sabor</Text>
    <Divider />
    <PizzasSalgadasInteira />
  </ScrollView>
);

PizzaSalgadaInteiraPage.navigationOptions = {
  title: 'Pizzas Inteiras',
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

export default PizzaSalgadaInteiraPage;
