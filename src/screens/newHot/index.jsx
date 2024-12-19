import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import defaultScreenStyle from '../../../example/styles/defaultScreenStyle';

const NewHot = () => {
  return (
    <View style={defaultScreenStyle.container}>
      <Text>NewHot</Text>
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

export default NewHot;
