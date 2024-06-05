import axiosEp from '../util/request';

export const getUser = (id) => {
  return axiosEp({
    url: `/api/users/${id}`,
    method: 'get',
  });
};

export const updateUser = (user) => {
  return axiosEp({
    url: '/api/users',
    method: 'put',
    data: user,
  });
};

export const createUser = (user) => {
  return axiosEp({
    url: '/api/users',
    method: 'post',
    data: user,
  });
};
