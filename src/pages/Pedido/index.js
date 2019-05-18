import React, { Component } from 'react';
import { Platform, StyleSheet, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';

import { navigationBarOptions } from '../../helpers/navigationBarOptions';
import BarImage from '../../components/BarImage';

import Pedido from '../../components/Pedido';

import {
  addAoCarrinho,
  somaValorPedidos,
} from '../../redux-flow/actions/carrinho';

const PedidoPage = ({
  navigation,
  addAoCarrinhoDispatch,
  somaValorPedidosDispatch,
}) => (
  <ScrollView style={styles.container}>
    <Pedido
      navigation={navigation}
      addAoCarrinhoDispatch={addAoCarrinhoDispatch}
      somaValorPedidosDispatch={somaValorPedidosDispatch}
    />
  </ScrollView>
);

PedidoPage.navigationOptions = {
  title: 'Seu pedido',
  ...navigationBarOptions,
  headerLeft: <BarImage />,
}

const mapDispatchToProps = dispatch => ({
  addAoCarrinhoDispatch: payload => dispatch(addAoCarrinho(payload)),
  somaValorPedidosDispatch: payload => dispatch(somaValorPedidos(payload)),
});

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#831e10',
  },
  title: {
    fontSize: 22,
    marginTop: 10,
    marginBottom: 10,
    color: '#fff',
  }
});

export default connect(
  null,
  mapDispatchToProps,
)(PedidoPage);
