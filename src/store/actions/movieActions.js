import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verbs';
import {
  CATEGORIES_URL,
  MOVIE_DETAIL_URL,
  POPULAR_URL,
  TOP_RATED_MOVIE_URL,
  UPCOMING_MOVIE_URL,
} from '../../service/url';
import { MOVIEDETAIL } from '../../utils/routes';

const getTopRatedMovies = createAsyncThunk(
  'movies/getTopRatedMovies',
  async params => {
    const response = await getRequest(TOP_RATED_MOVIE_URL, params);
    //console.log("Full Response:", response); // Yanıtın tamamını inceleyin
    //console.log("Response Data:", response.data);
    //console.log("Response Data Results:", response.data?.results);
    return response.data.results;
  },
);

const getCategories = createAsyncThunk('movies/getCategories', async params => {
  const response = await getRequest(CATEGORIES_URL, params);

  return response.data.genres;
});

const getPopularMovies = createAsyncThunk(
  'movies/getPopularMovies',
  async params => {
    const response = await getRequest(POPULAR_URL, params);

    return response.data.results;
  },
);

const getUpComingMovies = createAsyncThunk(
  'movies/getUpComingMovies',
  async params => {
    const response = await getRequest(UPCOMING_MOVIE_URL, params);

    return response.data.results;
  },
)


const getMovieData = createAsyncThunk('movies/getMovieData', async params => {
  const response = await getRequest(MOVIE_DETAIL_URL+params.movieId, params);

  return response.data;
});


export {getTopRatedMovies, getCategories, getPopularMovies, getUpComingMovies, getMovieData};
