import handleError from './handleError';
import { api } from './axios'
import * as SecureStore from 'expo-secure-store';

export async function useFetch(method, endpoint, params) {
  try {
    const response =  await api[method](endpoint, params)
    if (response && endpoint.includes('auth')) {
      await SecureStore.setItemAsync("token", response.data.data.token)
      api.defaults.headers.common['Authorization'] = `Bearer ${response.data.data.token}`
    }
    return response
  } catch (error) {
    return handleError(error)
  }
}