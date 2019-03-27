import React, { Component } from 'react';
import { Platform, StyleSheet, ScrollView, Text } from 'react-native';
import { ListItem, Divider } from 'react-native-elements';

import MenuPizzas from '../../components/Pizzas/menu';
import Modal from '../../components/Modal';

const Pizzas = ({
  navigation,
}) => (
  <ScrollView style={styles.container}>
    <MenuPizzas navigation={navigation} />
  </ScrollView>
);

Pizzas.navigationOptions = {
  title: 'Pizzas',
}

export default Pizzas;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
});
