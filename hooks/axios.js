import axios from "axios";
import {BASE_URL} from '@env'


const api = axios.create({
  baseURL: BASE_URL
})

api.interceptors.request.use(
  config => {
    // if (!config.headers.Authorization) {
    //   config.headers.Authorization = `Bearer ${authContext.getAccessToken()}`;
    // }
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODdiYWE0MGM5NThjYWUzMDY5MmQ0NyIsImlhdCI6MTcwMzM5NzM4NiwiZXhwIjoxNzA1OTg5Mzg2fQ.yBkiErwOF-yHD8zCfNE_rknWB_JOxZAv2M3agVR6AS4`;

    return config;
  },
  error => {
    return Promise.reject(error);
  },
)

api.interceptors.response.use((response) => {
    return response
  }, async function (error) {
  return Promise.reject(error);
});

export {api}