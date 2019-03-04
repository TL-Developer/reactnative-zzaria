import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { ListItem, Divider } from 'react-native-elements';

const list = [
  {
    name: 'Grande 2 sabores',
    subtitle: 'Escolha dois sabores'
  },
  {
    name: 'Grande',
    subtitle: 'Escolha um sabor'
  },
  {
    name: 'Broto 2 sabores',
    subtitle: 'Escolha dois sabores'
  },
  {
    name: 'Broto',
    subtitle: 'Escolha um sabor'
  },
]

const PizzasSalgadas = () => (
  <View>
    <Text style={styles.title}>Pizzas Salgadas</Text>
    <Divider style={{ backgroundColor: 'blue' }} />
    {
      list.map((l, i) => (
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

export default PizzasSalgadas;
