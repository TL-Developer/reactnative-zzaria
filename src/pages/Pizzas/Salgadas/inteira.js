import React from 'react';
import { connect } from 'react-redux';
import { Platform, StyleSheet, ScrollView, View, Text } from 'react-native';
import { Divider } from 'react-native-elements';

import PizzasSalgadasInteira from '../../../components/Pizzas/Salgadas/Inteira';

const PizzaSalgadaInteiraPage = ({
  navigation,
  loading,
  pizzas,
}) => (
  <ScrollView style={styles.container}>
    <Text style={styles.title}>Escolha 1 sabor</Text>
    <Divider />
    <PizzasSalgadasInteira
      navigation={navigation}
      loading={loading}
      pizzas={pizzas}
    />
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

const mapStateToProps = state => ({
  pizzas: state.pizzas.salgadas.list,
  loading: state.pizzas.salgadas.loading,
});

export default connect(
  mapStateToProps,
  null,
)(PizzaSalgadaInteiraPage);
