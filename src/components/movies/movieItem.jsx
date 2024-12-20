import React from 'react';
import {StyleSheet, Image, Pressable} from 'react-native';
import {IMAGE_URL} from '../../service/url';
import {height, width} from '../../utils/Constant';
import { useNavigation } from '@react-navigation/native';
import { MOVIEDETAIL } from '../../utils/routes';


const MovieItem = ({item}) => {
    //console.log(item);
    const navigation = useNavigation();
  return (
    <Pressable
    onPress={()=>navigation.navigate(MOVIEDETAIL, {movieId: item.id})}
    style={styles.container}>
      <Image
        source={{uri: IMAGE_URL+item?.poster_path}}
        style={{
          width: width*0.3,
          height: height*0.2,
          borderRadius: 5,
          resizeMode: 'cover',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 7,
   
  },
});

export default MovieItem;
