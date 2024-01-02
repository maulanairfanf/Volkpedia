import { createContext, useContext, useEffect, useState } from "react";
import { api } from '../hooks/axios'
import * as SecureStore from 'expo-secure-store';

const AuthContext = createContext({})
const TOKEN_KEY = "token"

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
  const [authState, setAuthState] = useState({
    token: null,
    authenticated: null,
    isLoading: true
  })

  useEffect(() => {
    const loadToken = async () => {
      const token = await SecureStore.getItemAsync(TOKEN_KEY)
      if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setAuthState({
          token: token,
          authenticated: true,
          isLoading: false
        })
      } else {
        setAuthState({
          token: null,
          authenticated: false,
          isLoading: false
        })
      }
    }
    loadToken()
  },[])

  const setConfig = async (token) => {

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    
    await SecureStore.setItemAsync(TOKEN_KEY, token)
    setAuthState({
      token: token,
      authenticated: true,
      isLoading: false
    })
  }

  const register = async (email, password, fullName) => {
    try {
      const response = await api.post('/auth/signup', {email, password, fullName})
      setConfig(response.data.token)
      return response
    } catch (error) {
      return error
    }
  }

  const login = async (email, password) => {
    console.log('email', email)
    console.log('password', password)
    try {
      const response = await api.post('/auth/signin', {email, password})
      console.log('response',response)
      setConfig(response.data.data.token)
      return response
    } catch (error) {
      console.log('error', error)
      throw error
      return error
    }
  }

  const logout = async (email, password) => {
  
    await SecureStore.deleteItemAsync(TOKEN_KEY)
    api.defaults.headers.common['Authorization'] = ''
    
    setAuthState({
      token: null,
      authenticated: false
    })
  }


  const value = {
    onRegister: register,
    onLogin: login,
    onLogout: logout,
    authState
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}