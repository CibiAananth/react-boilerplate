import axios from 'axios';
import {
  cacheAdapterEnhancer,
  throttleAdapterEnhancer,
} from 'axios-extensions';
// redux utils
import store from 'redux-utils/store';
import { authTypes } from 'redux-utils/types';
// core library
import ls from 'lib/core/storageFactory';

export const BASE_URL = process.env.REACT_BASE_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 20000,
  adapter: throttleAdapterEnhancer(
    cacheAdapterEnhancer(axios.defaults.adapter),
    {
      threshold: 0, // make new api call after 2 minutes
    },
  ),
});

// catch and log all the http errors and return back
axiosInstance.interceptors.response.use(
  response => response,
  (error) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      // eslint-disable-next-line
      console.log('response error', error.response);
      if (error.response.data.detail === 'Invalid token.') {
        store.dispatch({
          type: authTypes.inValidtoken,
          error: true,
          payload: error.response.data,
        });
        ls.clear();
        window.location = '/';
      }
      return Promise.reject(error.response);
    }
    if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      // eslint-disable-next-line
      console.log('request error', error.request);
      return Promise.reject(error.request);
    }
    // Something happened in setting up the request that triggered an Error
    // eslint-disable-next-line
    console.log('general error', error.message);
    return Promise.reject(error);
  },
);

export default axiosInstance;
