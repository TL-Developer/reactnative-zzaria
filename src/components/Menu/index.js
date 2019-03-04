import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const Footer = () => (
  <View style={styles.container}>
    <Text>Footer</Text>
  </View>
);


const styles = StyleSheet.create({
  container: {
    height: '10%',
    padding: 20,
    backgroundColor: '#ff3300',
  }
});

export default Footer;
