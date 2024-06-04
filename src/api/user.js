import axiosEp from '../util/request';

export const getUser = (id) => {
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
