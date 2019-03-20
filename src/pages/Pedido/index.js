import React, { Component } from 'react';
import { Platform, StyleSheet, ScrollView, Text } from 'react-native';

import Pedido from '../../components/Pedido';

const PedidoPage = ({
  navigation,
}) => (
  <ScrollView style={styles.container}>
    <Pedido navigation={navigation} />
  </ScrollView>
);

PedidoPage.navigationOptions = {
  title: 'Seu pedido',
}

export default PedidoPage;

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
