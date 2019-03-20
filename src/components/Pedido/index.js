import React, { Component } from 'react';
import { Platform, StyleSheet, ScrollView, Text, Picker } from 'react-native';
import { ListItem } from 'react-native-elements';

const Pedido = ({
  navigation,
}) => (
  <ScrollView style={styles.container}>
    <Text>{JSON.stringify(navigation.state.params.pedido)}</Text>

    <Picker
      style={{height: 50, width: 100}}
     >
      <Picker.Item label="Java" value="Sem borda" />
      <Picker.Item label="JavaScript" value="Catupiry" />
    </Picker>
  </ScrollView>
);

export default Pedido;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
});
