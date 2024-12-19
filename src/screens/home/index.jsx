import {useEffect} from 'react';
import {Text, StyleSheet, FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getTopRatedMovies} from '../../store/actions/movieActions';
import {DefaultScreenStyle} from '../../styles/DefaultScreenStyle';

const Home = () => {
  const {topRatedMovies} = useSelector(state => state.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopRatedMovies());
  }, []);
  console.log(topRatedMovies);
  return (
    <View style={DefaultScreenStyle.container}>
      <FlatList
        data={topRatedMovies}
        renderItem={({item}) => (
          <Text style={{color: 'white'}}>{item.original_title}</Text>
        )}
       
      />
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
