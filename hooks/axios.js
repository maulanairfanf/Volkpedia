import axios from "axios";
import {BASE_URL} from '@env'
import * as SecureStore from 'expo-secure-store';


const TOKEN_KEY = "token"
const api = axios.create({
  baseURL: BASE_URL
})


api.interceptors.response.use(async (response) => {
    return response
  }, async function (error) {
    if (error.response.status === 401 || error.response.status === 500) {
      await SecureStore.deleteItemAsync(TOKEN_KEY) 
      api.defaults.headers.common['Authorization'] = ''
    }
    return Promise.reject(error);
});


const customAxios = async (method, endpoint, params) => {
  try {
    const response = await api[method](endpoint, params)
    return Promise.resolve(response) 
  } catch (error) {
    if ( error.response.status === 401) {
      await SecureStore.deleteItemAsync(TOKEN_KEY) 
      api.defaults.headers.common['Authorization'] = ''
    }
    return Promise.reject(error);
  }
}

export {api, customAxios}
