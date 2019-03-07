import React from 'react';
import { Platform, StyleSheet, ScrollView, View, Text } from 'react-native';
import { ListItem, Divider } from 'react-native-elements';

const PizzasDoces = () => (
  <View>
    <Text style={styles.title}>Pizzas Doces</Text>
    <Divider style={{ backgroundColor: 'blue' }} />
    <ListItem
      title='Meio a Meio'
      subtitle='Escolha dois sabores'
    />
    <ListItem
      title='Inteira'
      subtitle='Escolha um sabor'
    />
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    marginTop: 10,
    marginBottom: 10,
  }
});

export default PizzasDoces;
