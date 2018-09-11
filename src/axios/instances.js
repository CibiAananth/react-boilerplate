import axios from "axios";

import { BASE_URL, SUB_URL } from "../constants/apiConstants/credentials";

const axiosInstance = axios.create({
  baseURL: BASE_URL + SUB_URL,
  timeout: 15000
  // headers: {
  // 	Authorization: `Bearer ${localStorage.getItem('userToken')}`,
  // 	'X-api-key': API_KEY
  // }
});

axiosInstance.interceptors.response.use(function(error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log("response error", error.request);
    return Promise.reject(error.response);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log("request error", error.request);
    return Promise.reject(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log("general error", error.message);
    return Promise.reject(error);
  }
});

export { axiosInstance };
