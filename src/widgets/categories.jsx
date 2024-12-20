import {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {getCategories} from '../store/actions/movieActions';
import CategoryItem from '../components/widgets/categoryItem';

const Categories = () => {
  const {categories} = useSelector(state => state?.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  //console.log(topRatedMovies);
  return (
    <View>
      <FlatList
        horizontal
        data={categories}
        renderItem={({item}) => <CategoryItem item={item} />}
      />
    </View>
  );
};

export default Categories;
