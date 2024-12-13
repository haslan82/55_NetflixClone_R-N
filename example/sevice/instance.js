import axios from 'axios';
import {BASE_URL} from './urls';

// Create an instance of axios to handle HTTP requests

const Client = axios.create();
Client.defaults.baseURL = BASE_URL;
Client.defaults.headers = {
  accept: 'application/json',
  'Content-Type': 'application/json',
};


export default Client;   /* https://udemig.teachable.com/courses/7-sezon-react-native-mobil/lectures/58863145    Http Methods (Axios) 1. 05 dk */