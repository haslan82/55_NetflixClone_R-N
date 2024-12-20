import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ThemeColors} from '../../theme/ThemeColors';

const CategoryItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.name}>{item.name} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10,
  },
  name: {
    color: ThemeColors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CategoryItem;
