import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3005',
  // timeout: 30000,
  withCredentials: true
});

export default instance;