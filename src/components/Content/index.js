import React from 'react';
import {Platform, StyleSheet, View, Text} from 'react-native';

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
]

const Content = () => (
  <View style={styles.container}>

  </View>
);


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: '80%',
    padding: 20,
    backgroundColor: '#fff',
  }
});

export default Content;
