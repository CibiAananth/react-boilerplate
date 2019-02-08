/* eslint-disable no-param-reassign */
import _ from 'lodash';
import axiosInstance from 'api/axios';
import ls from 'lib/core/storageFactory';

const get = ({ uriPath, payload, headers }) => {
  const config = { headers: {} };
  if (_.includes(headers, 'auth')) {
    config.headers.Authorization = `Bearer ${ls.get('authToken')}`;
  }
  config.params = payload;
  return axiosInstance
    .get(uriPath, config)
    .then(response => ({ params: payload, response }))
    .catch(error => ({ params: payload, error }));
};

const post = ({ uriPath, payload, headers }) => {
  const config = { headers: {} };
  if (_.includes(headers, 'auth')) {
    config.headers.Authorization = `Bearer ${ls.get('authToken')}`;
  }
  return axiosInstance
    .post(uriPath, payload, config)
    .then(response => ({ params: payload, response }))
    .catch(error => ({ params: payload, error }));
};

const formData = ({ uriPath, payload }) => {
  const config = { headers: { 'Content-Type': 'multipart/form-data' } };
  return axiosInstance
    .post(uriPath, payload, config)
    .then(response => ({ params: payload, response }))
    .catch(error => ({ params: payload, error }));
};

export { get, post, formData };
