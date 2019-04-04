import React from 'react';
import { Platform, StyleSheet, ScrollView, View, Text } from 'react-native';
import { ListItem, Divider } from 'react-native-elements';

const PizzaSalgadaMeioaMeio = ({
  navigation,
  loading,
  pizzas,
}) => (
  <View>
    {
      pizzas.map(pizza => (
        <ScrollView key={pizza.id}>
          <ListItem
            key={pizza.name}
            title={pizza.name}
            subtitle={pizza.description}
            badge={{ value: pizza.valor, textStyle: { color: 'white' }, containerStyle: { marginTop: 10 } }}
            onPress={() => navigation.push('Pedido', {
              pedido: {
                ...pizza,
                type: 'pizza',
              },
            })}
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

export default PizzaSalgadaMeioaMeio;
