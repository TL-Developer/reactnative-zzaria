import React, { Component } from 'react';
import { Platform, StyleSheet, ScrollView, Text } from 'react-native';
import { ListItem } from 'react-native-elements';

const MenuHome = ({
  navigation,
}) => (
  <ScrollView style={styles.container}>
    <ListItem
      title='Pizzas'
      onPress={() => navigation.push('Pizzas')}
    />
    <ListItem
      title='Brotos'
    />
    <ListItem
      title='Esfihas'
    />
    <ListItem
      title='Beirutes'
    />
    <ListItem
      title='Bebidas'
    />
  </ScrollView>
);

export default MenuHome;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
});
