import axios from 'axios'; 

const api = axios.create({
  baseURL: 'https://app.ftoyd.com/fronttemp-service',
  timeout: 5000,
});

export default api;

