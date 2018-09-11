import { axiosInstance } from "../axios";

export function userLogin(params) {
  return axiosInstance
    .post(`/login`, params)
    .then(response => ({ params, response }))
    .catch(error => ({ params, error }));
}
