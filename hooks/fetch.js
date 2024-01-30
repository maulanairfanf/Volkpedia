import { api } from './axios'
import * as SecureStore from 'expo-secure-store';

export async function useFetch(method, endpoint, params) {
  try {
    const response =  await api[method](endpoint, params)
    if (response && endpoint === ('/auth/signin')) {
      await SecureStore.setItemAsync("token", response.data.data.token)
      api.defaults.headers.common['Authorization'] = `Bearer ${response.data.data.token}`
    }
    return response
  } catch (error) {
    throw error
  }
}