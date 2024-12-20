import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verbs';
import {CATEGORIES_URL, TOP_RATED_MOVIE_URL} from '../../service/url';

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


const getCategories = createAsyncThunk(
  'movies/getCategories',
  async params => {
    const response = await getRequest(CATEGORIES_URL, params);
    //console.log("Full Response:", response); // Yanıtın tamamını inceleyin
    //console.log("Response Data:", response.data);
    //console.log("Response Data Results:", response.data?.results);
    return response.data.genres; 
    
  },
);


export {getTopRatedMovies, getCategories};
