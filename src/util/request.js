import axios from 'axios';

const axiosEp = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 30000,
});

axiosEp.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {}
);

axiosEp.interceptors.response.use(
  async (res) => {
    console.log('dddd', res.status);
    return res.data;
  },
  async (error) => {
    console.log('error');

    throw error;
  }
);

export default axiosEp;
