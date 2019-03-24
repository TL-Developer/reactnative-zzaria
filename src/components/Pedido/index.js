import React, { Component } from 'react';
import { Platform, StyleSheet, ScrollView, Text, Picker, TextInput } from 'react-native';
import { ListItem } from 'react-native-elements';

const Pedido = ({
  navigation,
}) => (
  <ScrollView style={styles.container}>
    <Text>{JSON.stringify(navigation.state.params.pedido)}</Text>

    <Picker
      style={{height: 50, width: 100}}
     >
      <Picker.Item label="Sem borda" value="Sem borda" />
      <Picker.Item label="Catupiry" value="Catupiry" />
    </Picker>

    <Text>Observações</Text>
    <TextInput
      multiline={true}
      numberOfLines={6}
      placeholder="Ex: sem cebola..."
    />
  </ScrollView>
);

export default Pedido;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
});
