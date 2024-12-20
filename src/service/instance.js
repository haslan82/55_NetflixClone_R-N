import axios from 'axios';
import { API_KEY, token } from '../utils/Constant';
import { BASE_URL } from './url';

// Create an instance of axios to handle HTTP requests

const Client = axios.create();
Client.defaults.baseURL = BASE_URL;
Client.defaults.params={
    api_key:API_KEY,
    language:"en-EN"
}
Client.defaults.headers = {
  accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`,  
};


export default Client;   /* https://udemig.teachable.com/courses/7-sezon-react-native-mobil/lectures/58863145    Http Methods (Axios) 1. 05 dk */