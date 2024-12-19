import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import defaultScreenStyle from '../../../example/styles/defaultScreenStyle';

const Home = () => {
  return (
    <View style={defaultScreenStyle.container}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default Home;
