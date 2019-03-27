import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const Header = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Napoles Pizzaria</Text>
  </View>
);


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: '10%',
    padding: 20,
    backgroundColor: '#ff3300',
  },
  title: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'center',
  }
});

export default Header;
