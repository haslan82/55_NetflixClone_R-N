import {useEffect} from 'react';
import { View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getCategories, getPopularMovies, getTopRatedMovies, getUpComingMovies} from '../../store/actions/movieActions';
import {DefaultScreenStyle} from '../../styles/DefaultScreenStyle';
import Categories from '../../widgets/categories';
import Sections from '../../widgets/sections';

const Home = () => {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getTopRatedMovies());
    dispatch(getPopularMovies());
    dispatch(getUpComingMovies());
  }, []);
  //console.log(topRatedMovies);
  return (
    <View style={DefaultScreenStyle.container}>
      <Categories />
      <Sections />
      {/* <FlatList
        horizontal
        data={categories}
        renderItem={({item}) => <CategoryItem item={item} />}
      /> */}
    </View>
  );
};

export default Home;
