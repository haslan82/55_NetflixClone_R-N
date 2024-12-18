import {Smileys} from 'iconsax-react-native';
import React from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import {ThemeColors} from '../../theme/ThemeColors';
import {getRandomColor} from '../../utils/Function';
import {height, width} from '../../utils/Constant';
import {useNavigation} from '@react-navigation/native';
import {ADDNEWLIST} from '../../utils/routes';

const WatchListItem = ({item, index}) => {
  // console.log(item.id)
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(ADDNEWLIST)}
      style={styles.container}>
      <View
        style={{
          width: width * 0.35,
          height: width * 0.35,
          backgroundColor: getRandomColor(index),
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 2,
        }}>
        <Image
          style={{width: width * 0.30, height: width * 0.30, resizeMode:"contain"}}
          source={require('../../assets/images/smile.png')}
        />
      </View>
      <Text style={styles.title}>{item.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 10,
  },
  title: {
    color: ThemeColors.white,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default WatchListItem;
