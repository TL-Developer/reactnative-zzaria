import React, { Component } from 'react';
import { Platform, StyleSheet, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';

import Carrinho from '../../components/Carrinho';
import BotaoComprar from '../../components/Carrinho/BotaoComprar';

import {
  setFormaPG,
  setTroco,
} from '../../redux-flow/actions/carrinho';

const CarrinhoPage = ({
  navigation,
  carrinho,
  pagamentos,
  setFormaPgDispatch,
  setTrocoDispatch,
}) => (
  <ScrollView style={styles.container}>
    <Carrinho
      navigation={navigation}
      carrinho={carrinho}
      pagamentos={pagamentos}
      setFormaPgDispatch={setFormaPgDispatch}
      setTrocoDispatch={setTrocoDispatch}
    />
    <BotaoComprar carrinho={carrinho} navigation={navigation} />
  </ScrollView>
);

CarrinhoPage.navigationOptions = {
  title: 'Sua sacola',
}

const mapStateToProps = state => ({
  carrinho: state.carrinho,
  pagamentos: state.pagamentos,
});

const mapDispatchToProps = dispatch => ({
  setFormaPgDispatch: payload => dispatch(setFormaPG(payload)),
  setTrocoDispatch: payload => dispatch(setTroco(payload)),
});

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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CarrinhoPage);
