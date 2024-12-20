import {useEffect} from 'react';
import {Text, StyleSheet, FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  getCategories,
  getTopRatedMovies,
} from '../../store/actions/movieActions';
import {DefaultScreenStyle} from '../../styles/DefaultScreenStyle';
import CategoryItem from '../../components/movies/categoryItem';

const Home = () => {
  const {topRatedMovies, categories} = useSelector(state => state?.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  //console.log(topRatedMovies);
  return (
    <View style={DefaultScreenStyle.container}>
      <FlatList
      horizontal
        data={categories}
        renderItem={({item}) => (
         <CategoryItem item={item} />
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
