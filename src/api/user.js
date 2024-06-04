import axiosEp from '../util/request';

export const getUser = (id) => {
  return Promise.resolve({
    avatar: 'https://p.ipic.vip/hllizo.JPG',
    name: 'Qiqi Zhao',
    phone: '13152486382',
    role: 'FRONTEND',
    country: 'China',
    city: 'Guangdong Huizhou',
    email: 'bme_ritter@foxmail.com',
  });
  return axiosEp({
    url: '/api/users',
    method: 'get',
  });
};

export const updateUser = (user) => {
  return Promise.resolve(user);
  return axiosEp({
    url: '/api/users',
    method: 'post',
    data: user,
  });
};
