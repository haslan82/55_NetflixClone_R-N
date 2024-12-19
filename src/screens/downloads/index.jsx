import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import defaultScreenStyle from '../../../example/styles/defaultScreenStyle';

const DownLoad = () => {
  return (
    <View style={defaultScreenStyle.container}>
      <Text>DownLoad</Text>
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

export default DownLoad;
