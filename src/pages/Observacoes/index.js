import React, { Component } from 'react';
import { Platform, StyleSheet, ScrollView, Text } from 'react-native';
import { ListItem, Divider } from 'react-native-elements';

import Observacoes from '../../components/Observacoes';

const Observacoes = ({
  navigation,
}) => (
  <ScrollView style={styles.container}>
    <Observacoes navigation={navigation} />
  </ScrollView>
);

Observacoes.navigationOptions = {
  title: 'Página inicial',
}

export default Observacoes;

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
