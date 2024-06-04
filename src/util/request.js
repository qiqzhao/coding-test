import axios from 'axios';

const axiosEp = axios.create({
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
    const message = res.data.message;
    if (code === 404) {
    } else if (code === 402) {
    } else {
    }

    return res.data;
  },
  async (error) => {
    console.log('error');

    return false;
  }
);

export default axiosEp;
