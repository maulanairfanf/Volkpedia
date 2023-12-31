import axios from "axios";
import {BASE_URL} from '@env'


const api = axios.create({
  baseURL: "http://10.0.2.2:9000/api/v1"
})

// api.interceptors.request.use(
//   config => {
//     // if (!config.headers.Authorization) {
//     //   config.headers.Authorization = `Bearer ${authContext.getAccessToken()}`;
//     // }
//     // config.headers.Authorization = `Bearer ${initialState.userToken}`;

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