import axios from "axios";
import {BASE_URL} from '@env'

const api = axios.create({
  baseURL: BASE_URL
})

// api.interceptors.request.use(
//   config => {
//     if (!config.headers.Authorization) {
//       config.headers.Authorization = `Bearer ${authContext.getAccessToken()}`;
//     }

//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   },
// )

api.interceptors.response.use((response) => {
    return response
  }, async function (error) {
  return Promise.reject(error);
});

export {api}