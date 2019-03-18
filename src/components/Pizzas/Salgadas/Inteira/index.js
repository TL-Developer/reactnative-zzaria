import React from 'react';
import { connect } from 'react-redux';
import { Platform, StyleSheet, ScrollView, View, Text } from 'react-native';
import { ListItem, Divider } from 'react-native-elements';

const PizzaSalgadaMeioaMeio = ({
  pizzas,
}) => (
  <View>
    {
      pizzas.map(pizza => (
        <ScrollView key={pizza.id}>
          <ListItem
            key={pizza.id}
            title={pizza.name}
            subtitle={pizza.description}
            badge={{ value: pizza.valor, textStyle: { color: 'white' }, containerStyle: { marginTop: 10 } }}
          />
          <Divider key={pizza.id} style={{ backgroundColor: 'red' }} />
        </ScrollView>
      ))
    }
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    marginTop: 10,
    marginBottom: 10,
  },
});

const mapStateToProps = state => ({
  pizzas: state.pizzas.salgadas.list,
  loading: state.pizzas.salgadas.loading,
});

export default connect(
  mapStateToProps,
  null,
)(PizzaSalgadaMeioaMeio);
