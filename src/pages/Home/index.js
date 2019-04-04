import React, { Component } from 'react';
import { Platform, StyleSheet, ScrollView, View, Text } from 'react-native';
import { ListItem, Divider } from 'react-native-elements';

import MenuHome from '../../components/Home/menu';
import BotaoCarrinho from '../../components/Carrinho/BotaoCarrinho';

const Home = ({
  navigation,
}) => (
  <ScrollView style={styles.container}>
    <MenuHome navigation={navigation} />
    <BotaoCarrinho navigation={navigation} />
  </ScrollView>
);

Home.navigationOptions = {
  title: 'Página inicial',
}

export default Home;

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
