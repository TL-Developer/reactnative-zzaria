import React from 'react';
import { Platform, StyleSheet, View, Text } from 'react-native';
import { ListItem, Divider } from 'react-native-elements';

const MenuPizzas = ({
  navigation,
}) => (
  <View>
    <Text style={styles.title}>Salgadas</Text>
    <Divider style={{ backgroundColor: 'blue' }} />
    <ListItem
      title='Meio a Meio'
      subtitle='Escolha dois sabores'
      onPress={() => navigation.push('PizzasSalgadasMeioaMeio')}
    />
    <ListItem
      title='Inteira'
      subtitle='Escolha um sabor'
      onPress={() => navigation.navigate('PizzasSalgadasInteira')}
    />
    <Text style={styles.title}>Doces</Text>
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

export default MenuPizzas;
