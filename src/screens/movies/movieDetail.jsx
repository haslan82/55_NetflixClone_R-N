import React, {useEffect} from 'react';
import {
  View,
  ScrollView,
  ActivityIndicator,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import {DefaultScreenStyle} from '../../styles/DefaultScreenStyle';
import {useDispatch, useSelector} from 'react-redux';
import {getMovieData} from '../../store/actions/movieActions';
import {ThemeColors} from '../../theme/ThemeColors';
import {IMAGE_URL} from '../../service/url';
import {height, width} from '../../utils/Constant';
import style from '../../styles/input';

const MovieDetail = ({route}) => {
  const {movieId} = route?.params;
  const dispatch = useDispatch();
  const {pendingDetailData, movieDetailData} = useSelector(
    state => state.movies,
  );

  useEffect(() => {
    dispatch(
      getMovieData({
        movieId: movieId,
      }),
    );
  }, []);
  //! console.log(movieId);
  return (
    <View style={DefaultScreenStyle.detailScreen}>
      {pendingDetailData ? (
        <View>
          <ActivityIndicator color={ThemeColors.white} size={'large'} />
        </View>
      ) : (
        <ScrollView>
          <Image
            source={{uri: IMAGE_URL + movieDetailData?.poster_path}}
            style={{
              width: width,
              height: height * 0.6,
              borderRadius: 5,
              resizeMode: 'cover',
            }}
          />
          <View
            style={{
              position: 'absolute',
              width: 70,
              height: 70,
              borderRadius: 50,
              right: 0,
              top: 60,
              backgroundColor: ThemeColors.yellow,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.average}>{movieDetailData.vote_average?.toFixed(1)}</Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.title}>{movieDetailData.original_title}</Text>
            <Text style={styles.tagline}>{movieDetailData.tagline}</Text>
            <Text style={styles.description}>{movieDetailData.overview}</Text>
            <Text style={styles.language}>Language</Text>
            {movieDetailData.spoken_languages?.map((item, index) => (
              <Text style={styles.spoken} key={index}>
                {item.name}
              </Text>
            ))}

            <Text style={styles.language}>Production Countries</Text>
            {movieDetailData.production_countries?.map((item, index) => (
              <Text style={styles.spoken} key={index}>
                {item.name}
              </Text>
            ))}

            <Text style={styles.language}>Genres</Text>
            {movieDetailData.genres?.map((item, index) => (
              <Text style={styles.spoken} key={index}>
                {item.name}
              </Text>
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  average: {
    color: ThemeColors.black,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: ThemeColors.white,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  infoContainer: {
    padding: 10,
    backgroundColor: ThemeColors.black,
    borderRadius: 10,
    marginVertical: 20,
    marginBottom: 40,
  },
  tagline: {
    color: ThemeColors.white,
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
    lineHeight: 24,
    marginTop: 10,
  },
  description: {
    color: ThemeColors.white,
    fontSize: 16,
    fontWeight: '500',
    marginTop: 10,
    marginBottom: 10,
    lineHeight: 24,
  },
  language: {
    color: ThemeColors.red,
    fontSize: 20,
    fontWeight: '500',
    marginTop: 5,
    marginBottom: 10,
  },
  spoken: {
    color: ThemeColors.white,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 5,
    marginTop: 5,
  },
});

export default MovieDetail;
