import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const Content = () => (
  <View style={styles.container}>
    <Text>content</Text>
  </View>
);


const styles = StyleSheet.create({
  container: {
    height: 80,
    padding: 20,
    backgroundColor: '#000',
  }
});

export default Content;
