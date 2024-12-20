//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import MovieItem from '../movies/movieItem';
import { ThemeColors } from '../../theme/ThemeColors';

// create a component
const Section = ({item}) => {
  const {topRatedMovies, popularMovies, upComingMovies} = useSelector(state => state.movies);

const setData=()=>{
    switch (item.id) {
        case 1: return topRatedMovies
        case 2: return popularMovies
        case 3: return upComingMovies
        default : return topRatedMovies
       
            
       
    
     
    }
}

  return (
    <View style={styles.container}>
          <Text style={styles.title}>{item.title} </Text>
      <FlatList

        horizontal
        data={setData()}
        renderItem={({item}) => <MovieItem item={item} />}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  title: {
    color: ThemeColors.white,
    fontSize: 20,
    fontWeight: '500',
    marginVertical:10,
    marginBottom:20

  },
});

//make this component available to the app
export default Section;
