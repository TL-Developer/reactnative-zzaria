import React from 'react';
import { connect } from 'react-redux';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { ListItem, Divider } from 'react-native-elements';

const PizzasSalgadas = ({
  pizzas,
}) => (
  <View>
    <Text style={styles.title}>Pizzas Salgadas</Text>
    <Divider style={{ backgroundColor: 'blue' }} />
    {
      pizzas.map((l, i) => (
        <ListItem
          key={i}
          title={l.name}
          subtitle={l.subtitle}
        />
      ))
    }
  </View>
);

const styles = StyleSheet.create({
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
)(PizzasSalgadas);
