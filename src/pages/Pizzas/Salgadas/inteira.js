import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Platform, StyleSheet, ScrollView, View, Text } from 'react-native';
import { Divider } from 'react-native-elements';

import { navigationBarOptions } from '../../../helpers/navigationBarOptions';
import BarImage from '../../../components/BarImage';

import PizzasSalgadasInteira from '../../../components/Pizzas/Salgadas/Inteira';

import {
  getListPizzasSalgadas,
} from '../../../redux-flow/actions/pizzasSalgadas';

class PizzaSalgadaInteiraPage extends PureComponent {

  componentDidMount() {
    const {
      pizzas,
      getListPizzasSalgadasDispatch,
    } = this.props;

    if (pizzas.length === 0) {
      getListPizzasSalgadasDispatch();
    }
  }

  render() {
    const {
      navigation,
      loading,
      pizzas,
    } = this.props;

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Escolha 1 sabor</Text>
        <Divider />
        <Text style={styles.loading}>{loading && 'Carregando pizzas...'}</Text>
        <PizzasSalgadasInteira
          navigation={navigation}
          loading={loading}
          pizzas={pizzas}
        />
      </ScrollView>
    )
  }
}

PizzaSalgadaInteiraPage.navigationOptions = {
  title: 'Escolha sua pizza',
    ...navigationBarOptions,
  headerLeft: <BarImage />,
}

const styles = StyleSheet.create({
  container: {
    height: '90%',
    padding: 10,
    backgroundColor: '#831e10',
  },
  title: {
    fontSize: 22,
    marginTop: 10,
    marginBottom: 10,
    color: 'white',
  },
  loading: {
    color: 'white',
    marginTop: 10,
  },
});

const mapStateToProps = state => ({
  pizzas: state.pizzas.salgadas.list,
  loading: state.pizzas.salgadas.loading,
});

const mapDispatchToProps = dispatch => ({
  getListPizzasSalgadasDispatch: payload => dispatch(getListPizzasSalgadas()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PizzaSalgadaInteiraPage);
